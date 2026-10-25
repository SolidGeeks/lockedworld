# Changelog

All notable changes to The Locked World. The game is served from `main` at https://solidgeeks.github.io/lockedworld/: every change merged there is live, so entries are dated rather than versioned.

## 2026-10-25 — Solid standard

### Added
- Smoke test (`npm test`): the game loads, and each of the 10 levels starts and runs without a JavaScript error. CI runs it on every push and pull request.
- CodeQL now scans the game's code (inline in `index.html`), not only the workflows.
- README in English, with the level names as they appear in the game; AGPL-3.0 license, `SECURITY.md`, first-merge card for new contributors.

### Fixed
- Brand colour: Volt is `#C8FF2E`, as in the logo kit (was `#c8f520`).
- The GitHub link points at github.com/SolidGeeks.

## 2026-10-25 — first release

### Added
- Ten levels, each with its own mechanic and a teammate to win: fog and rescue, wave arena, escort, stealth, defence and boss, newcomers to protect, license ammo, packet routing, vertical scrolling, chase.
- Keyboard and mouse controls, two-thumb touch controls, sound synthesized with Web Audio, progress saved in the browser.
