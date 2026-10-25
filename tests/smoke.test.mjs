// SPDX-License-Identifier: AGPL-3.0-or-later
// Smoke test: the game loads, and each of the 10 levels starts and runs for a few seconds without a JavaScript error.
// Run with: npm test (needs a browser once: npx playwright install chromium)
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const page_url = pathToFileURL(join(root, 'index.html')).href;
// The game runs inside an IIFE. Serve it with one extra line that exposes its state to the test; index.html is not changed.
const html = readFileSync(join(root, 'index.html'), 'utf8');
const end = html.lastIndexOf('})();');
assert.ok(end > 0, 'the game script ends with })();');
const served = html.slice(0, end) + 'window.__LW = { game, LEVELS, startLevel };\n' + html.slice(end);

let browser, page;
const errors = [];

before(async () => {
  browser = await chromium.launch();
  page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  page.on('pageerror', e => errors.push(e.message));
  await page.route(page_url, r => r.fulfill({ body: served, contentType: 'text/html; charset=utf-8' }));
  await page.goto(page_url);
  await page.waitForFunction(() => window.__LW);
});
after(async () => { await browser?.close(); });

test('the game loads on its title screen, without errors', async () => {
  assert.equal(await page.evaluate(() => window.__LW.game.state), 'title');
  assert.equal(await page.evaluate(() => window.__LW.LEVELS.length), 10);
  assert.match(await page.title(), /The Locked World/);
  assert.deepEqual(errors, []);
});

for (let i = 0; i < 10; i++) {
  test(`level ${i + 1} starts and runs`, async () => {
    errors.length = 0;
    const name = await page.evaluate(n => { window.__LW.startLevel(n); return window.__LW.LEVELS[n].name; }, i);
    // Play a little: move and hold fire, so the level's update and drawing code actually run
    await page.mouse.move(900, 300);
    await page.mouse.down();
    await page.keyboard.down('d');
    await page.waitForTimeout(2500);
    await page.keyboard.up('d');
    await page.mouse.up();
    const s = await page.evaluate(() => ({ state: window.__LW.game.state, idx: window.__LW.game.idx, lt: window.__LW.game.lt }));
    assert.deepEqual(errors, [], `${name}: JavaScript error`);
    assert.equal(s.idx, i, `${name}: wrong level`);
    assert.ok(['intro', 'play', 'clear', 'dead'].includes(s.state), `${name}: unexpected state ${s.state}`);
    assert.ok(s.lt > 0, `${name}: the level clock does not advance`);
  });
}
