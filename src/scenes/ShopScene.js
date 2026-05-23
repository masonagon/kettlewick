import Phaser from 'phaser';
import { loadState, saveState, checkStreak } from '../data/gameState.js';
import { RECIPES } from '../data/recipes.js';

export default class ShopScene extends Phaser.Scene {
  constructor() {
    super('ShopScene');
  }

  create() {
    const { width, height } = this.scale;
    this.state = checkStreak(loadState());
    saveState(this.state);

    // ── Background ──
    this.add.image(width / 2, height / 2, 'bg_shop').setDisplaySize(width, height);

    // ── Shop shelf ──
    this.add.image(width / 2, height * 0.45, 'prop_shelf')
      .setDisplaySize(width * 0.85, height * 0.38);

    // ── Render potions on shelf ──
    this.renderShelf();

    // ── HUD ──
    this.renderHUD();

    // ── Bottom nav ──
    this.renderNav();
  }

  renderShelf() {
    const { width, height } = this.scale;
    const shelf = this.state.shelf;
    const recipes = Object.keys(shelf);
    const startX = width * 0.15;
    const spacing = (width * 0.7) / Math.max(recipes.length, 1);

    recipes.forEach((recipeKey, i) => {
      const recipe = RECIPES[recipeKey];
      if (!recipe) return;
      const x = startX + i * spacing;
      const y = height * 0.42;

      const img = this.add.image(x, y, recipe.potionKey)
        .setDisplaySize(40, 56)
        .setInteractive({ useHandCursor: true });

      // Count badge
      if (shelf[recipeKey] > 1) {
        this.add.text(x + 14, y - 24, `×${shelf[recipeKey]}`, {
          fontSize: '10px', color: '#f0d8b0',
          backgroundColor: '#2a1a0e', padding: { x: 3, y: 1 }
        }).setOrigin(0.5);
      }

      img.on('pointerdown', () => this.sellPotion(recipeKey));
    });
  }

  sellPotion(recipeKey) {
    const recipe = RECIPES[recipeKey];
    if (!recipe || !this.state.shelf[recipeKey]) return;
    this.state.gold += recipe.baseValue;
    this.state.shelf[recipeKey] -= 1;
    if (this.state.shelf[recipeKey] <= 0) delete this.state.shelf[recipeKey];
    saveState(this.state);
    this.scene.restart();
  }

  renderHUD() {
    const { width } = this.scale;

    // Gold
    this.add.image(28, 28, 'icon_coin').setDisplaySize(22, 22);
    this.add.text(42, 28, `${this.state.gold}g`, {
      fontSize: '14px', color: '#e8d060', fontStyle: 'bold'
    }).setOrigin(0, 0.5);

    // Streak
    this.add.image(width - 60, 28, 'icon_flame').setDisplaySize(20, 20);
    this.add.text(width - 46, 28, `${this.state.streakDays}`, {
      fontSize: '14px', color: '#e85030', fontStyle: 'bold'
    }).setOrigin(0, 0.5);

    // Season / day
    const season = this.state.season.charAt(0).toUpperCase() + this.state.season.slice(1);
    this.add.text(width / 2, 18, `${season} · Day ${this.state.day}`, {
      fontSize: '11px', color: '#c8a060'
    }).setOrigin(0.5, 0);
  }

  renderNav() {
    const { width, height } = this.scale;
    const tabs = [
      { key: 'nav_shop',    label: 'Shop',    scene: 'ShopScene',    active: true  },
      { key: 'nav_forage',  label: 'Forage',  scene: 'ForageScene',  active: false },
      { key: 'nav_brew',    label: 'Brew',    scene: 'BrewScene',    active: false },
      { key: 'nav_village', label: 'Village', scene: 'VillageScene', active: false },
      { key: 'nav_recipe',  label: 'Recipes', scene: 'RecipeScene',  active: false },
    ];

    const tabWidth = width / tabs.length;

    // Nav background
    this.add.rectangle(width / 2, height - 36, width, 72, 0x3a2010)
      .setOrigin(0.5, 0.5);
    this.add.rectangle(width / 2, height - 71, width, 1, 0x5a3018);

    tabs.forEach((tab, i) => {
      const x = tabWidth * i + tabWidth / 2;
      const y = height - 36;
      const color = tab.active ? '#e8a830' : '#7a5830';

      this.add.image(x, y - 10, tab.key)
        .setDisplaySize(22, 22)
        .setTint(tab.active ? 0xe8a830 : 0x7a5830)
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => {
          if (!tab.active) this.scene.start(tab.scene);
        });

      this.add.text(x, y + 8, tab.label, {
        fontSize: '9px', color
      }).setOrigin(0.5);
    });
  }
}
