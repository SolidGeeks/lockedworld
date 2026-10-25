# The Locked World

A top-down shooter in 10 levels that runs in the browser. Lockware has locked the city: free it with the Solid Geeks crew (Term, Rep, Brax, Null, Bit, Atlas, Brick).

**Play:** https://solidgeeks.github.io/lockedworld/

**The game is in French.** Level names below are the ones you see on screen, with a translation.

| Level | Mechanic | Teammate won |
|---|---|---|
| 1. Marais du Presque-Fini *(the Almost-Done Swamp)* | Fog, rescue 4 Orphans | Bit · triple shot |
| 2. Gymnase CI *(the CI Gym)* | Arena, 5 waves, combos | Rep · fire rate |
| 3. Ada-Lovelace *(the Ada Lovelace district)* | Escort the canteen truck | Atlas · armour |
| 4. Étages de Lockware *(Lockware's floors)* | Stealth in the dark | Null · ghost dodge |
| 5. Chantier Strata *(the Strata building site)* | Defence, then the Lockware boss | Brick · turrets |
| 6. Discord des nouveaux *(the newcomers' Discord)* | Protect 30 newcomers | Term · welcome shield (R) |
| 7. Archives SPDX *(the SPDX Archives)* | License ammo (1, 2, 3) and a boss | Atlas · dual license |
| 8. Réseau de Strata *(the Strata network)* | Switch the packets' routes | Brax, overclocked |
| 9. Arbre des dépendances *(the dependency tree)* | Vertical scrolling, typosquats, a disguised boss | Null · piercing audit |
| 10. La Fuite *(the Leak)* | Chase a key thief, rotate the secrets | Null · sprint |

## Controls

- Move: ZQSD, WASD or the arrow keys
- Aim and shoot: mouse, hold the button (F for auto-aim)
- Dodge: Space · Turret: E · Shield: R · License: 1, 2, 3 · Pause: P or Esc
- Touch: left thumb to move, right thumb to aim

## How it is built

One `index.html` file, no build step, no dependencies: Canvas 2D, sound synthesized with Web Audio, progress saved in the browser (`localStorage`). Only the fonts come from Google Fonts.

To try it locally: open `index.html` in a browser, or run `python3 -m http.server` in this folder and go to http://localhost:8000.

To run the tests (Node.js 22 or later; the game itself needs nothing, Playwright is only for the tests):

```bash
npm install
npx playwright install chromium   # once
npm test                          # the game loads, and each of the 10 levels starts and runs without an error
```

Changes are listed in [CHANGELOG.md](CHANGELOG.md).

## Contributing

Contributions follow the [Solid standard](https://github.com/SolidGeeks/.github/blob/main/CONTRIBUTING.md): sign off every commit with `git commit -s` (DCO), no CLA. The code is licensed [AGPL-3.0-or-later](LICENSE). To report a vulnerability, see [SECURITY.md](SECURITY.md).
