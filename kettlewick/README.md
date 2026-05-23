# Kettlewick

A cozy apothecary idle sim with foraging, brewing, and villager relationships.

---

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

---

## Adding new assets (the main workflow)

### Step 1 — Drop the PNG into the right folder

| Asset type         | Folder                           |
|--------------------|----------------------------------|
| Ingredients        | `assets/ingredients/`            |
| Potions            | `assets/potions/`                |
| Villager full body | `assets/villagers/`              |
| Villager portrait  | `assets/villagers/portraits/`    |
| Backgrounds        | `assets/backgrounds/`            |
| Shop props         | `assets/props/shop/`             |
| Forage map props   | `assets/props/forage/`           |
| UI buttons/frames  | `assets/ui/buttons/` or `frames/`|
| HUD icons          | `assets/ui/icons/`               |
| Seasonal decor     | `assets/seasonal/spring/` etc.   |

Naming: lowercase with underscores. Match the filename to the key in `src/data/assets.js`.

### Step 2 — Register it in `src/data/assets.js`

```js
{ key: 'mugwort', path: 'assets/ingredients/mugwort.png' },
```

### Step 3 — Push

```bash
git add assets/ src/data/assets.js
git commit -m "add mugwort ingredient asset"
git push
```

If an asset is missing the game uses a colored placeholder — it won't crash.

---

## Project structure

```
kettlewick/
├── assets/
│   ├── ingredients/
│   ├── potions/
│   ├── villagers/portraits/
│   ├── backgrounds/
│   ├── props/shop/ and forage/
│   ├── seasonal/spring/ summer/ autumn/ winter/
│   └── ui/buttons/ frames/ icons/
└── src/
    ├── scenes/
    │   ├── PreloadScene.js   (loads all assets)
    │   ├── ShopScene.js      (main shop — active)
    │   └── StubScenes.js     (Forage, Brew, Village, Recipe — stubbed)
    └── data/
        ├── assets.js         ← EDIT THIS to add new assets
        ├── ingredients.js    ← ingredient definitions
        ├── recipes.js        ← potion recipes
        ├── villagers.js      ← villager stories
        └── gameState.js      ← save/load/streak logic
```
