# The Locked World

Un shooter vu de dessus, en 5 niveaux, qui tourne dans le navigateur. Lockware a verrouillé la ville : libère-la avec l'équipage Solid Geeks (Term, Rep, Brax, Null, Bit, Atlas, Brick).

**Jouer :** https://solidgeeks.github.io/lockedworld/

| Niveau | Mécanique | Équipier gagné |
|---|---|---|
| 1. Marais du Presque-Fini | Brouillard, capture de 4 Orphelins | Bit · tir triple |
| 2. Gymnase CI | Arène, 5 vagues, combos | Rep · cadence |
| 3. Ada-Lovelace | Escorte du camion de cantine | Atlas · blindage |
| 4. Étages de Lockware | Infiltration dans le noir | Null · esquive fantôme |
| 5. Chantier Strata | Défense puis boss final | Brick · tourelles |

## Commandes

- Bouger : ZQSD, WASD ou flèches
- Viser et tirer : souris, clic maintenu (F pour la visée auto)
- Esquive : Espace · Tourelle : E (niveau 5) · Pause : P ou Échap
- Tactile : pouce gauche pour bouger, pouce droit pour viser

## Technique

Un seul fichier `index.html`, sans build ni dépendance : Canvas 2D, son synthétisé avec Web Audio, sauvegarde de la progression dans le navigateur (`localStorage`). Seules les polices viennent de Google Fonts.

Pour tester en local : ouvre `index.html` dans un navigateur, ou lance `python3 -m http.server` dans ce dossier puis va sur http://localhost:8000.

## Contribuer

Les contributions suivent le Solid standard : commits signés avec `git commit -s` (DCO), pas de CLA. Le code est sous licence AGPL-3.0-or-later.
