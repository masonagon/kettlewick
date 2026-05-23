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

    // 1. Background (bottom layer)
    this.add.image(width / 2, height / 2, 'bg_shop').setDisplaySize(width, height);

    // 2. Shelf prop FIRST (behind parchment panel)
    this.add.image(width / 2, height * 0.36, 'prop_shelf')
      .setDisplaySize(width * 0.82, height * 0.30);

    // 3. Parchment panel on top of shelf
    this.add.image(width / 2, height * 0.50, 'panel_scroll')
      .setDisplaySize(width * 0.92, height * 0.60);

    this.renderShelf();
    this.renderHUD();
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
      const y = height * 0.36;
      const img = this.add.image(x, y, recipe.potionKey)
        .setDisplaySize(40, 56)
        .setInteractive({ useHandCursor: true });
      if (shelf[recipeKey] > 1) {
        this.add.text(x + 14, y - 24, `x${shelf[recipeKey]}`, {
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

    // Gold pill — fallback to dark rounded rect if asset missing
    this.add.rectangle(60, 28, 110, 36, 0x2a1a0e, 0.85).setOrigin(0.5);
    this.add.image(28, 28, 'hud_gold').setDisplaySize(100, 34).setVisible(true);
    this.add.text(68, 28, `${this.state.gold}g`, {
      fontSize: '13px', color: '#f5d44a', fontStyle: 'bold'
    }).setOrigin(0, 0.5);

    // Gem pill
    this.add.rectangle(width - 60, 28, 100, 36, 0x2a1a0e, 0.85).setOrigin(0.5);
    this.add.image(width - 52, 28, 'hud_gems').setDisplaySize(84, 34);
    this.add.text(width - 38, 28, `0`, {
      fontSize: '13px', color: '#c8a0ff', fontStyle: 'bold'
    }).setOrigin(0, 0.5);

    // Streak bar — dark bg behind it so it's always visible
    this.add.rectangle(width / 2, 60, 164, 22, 0x2a1a0e, 0.7).setOrigin(0.5);
    this.add.image(width / 2, 60, 'bar_amber').setDisplaySize(160, 18);

    // Season label
    const season = this.state.season.charAt(0).toUpperCase() + this.state.season.slice(1);
    this.add.image(width / 2, 92, 'btn_parchment').setDisplaySize(180, 32);
    this.add.text(width / 2, 92, `${season} - Day ${this.state.day}`, {
      fontSize: '11px', color: '#3a1a04', fontStyle: 'bold'
    }).setOrigin(0.5);
  }

  renderNav() {
    const { width, height } = this.scale;
    const tabs = [
      { label: 'Shop',    scene: 'ShopScene',    active: true  },
      { label: 'Forage',  scene: 'ForageScene',  active: false },
      { label: 'Brew',    scene: 'BrewScene',    active: false },
      { label: 'Village', scene: 'VillageScene', active: false },
      { label: 'Recipes', scene: 'RecipeScene',  active: false },
    ];

    const tabWidth = width / tabs.length;

    // Nav background
    this.add.rectangle(width / 2, height - 36, width, 72, 0x2a1a0e).setOrigin(0.5);
    // Top border line
    this.add.rectangle(width / 2, height - 72, width, 2, 0xc8860a).setOrigin(0.5);

    tabs.forEach((tab, i) => {
      const x = tabWidth * i + tabWidth / 2;
      const y = height - 36;

      if (tab.active) {
        // Active tab: parchment bg + dark text
        this.add.image(x, y, 'btn_parchment').setDisplaySize(tabWidth - 6, 58);
        this.add.text(x, y, tab.label, {
          fontSize: '12px', color: '#3a1a04', fontStyle: 'bold'
        }).setOrigin(0.5);
      } else {
        // Inactive tabs: gold text, no bg
        this.add.text(x, y, tab.label, {
          fontSize: '11px', color: '#c8a060'
        }).setOrigin(0.5)
          .setInteractive({ useHandCursor: true })
          .on('pointerdown', () => this.scene.start(tab.scene));
      }
    });
  }
}
