import Phaser from 'phaser';
import { loadState, saveState, checkStreak } from '../data/gameState.js';
import { RECIPES } from '../data/recipes.js';
import { setBg } from '../utils/setBg.js';

export default class ShopScene extends Phaser.Scene {
  constructor() { super('ShopScene'); }

  create() {
    const { width, height } = this.scale;
    this.state = checkStreak(loadState());
    saveState(this.state);
    setBg('assets/backgrounds/shop_bg.png');

    this.add.image(width / 2, height * 0.42, 'panel_scroll')
      .setDisplaySize(width * 0.92, height * 0.55);
    this.add.image(width / 2, height * 0.36, 'prop_shelf')
      .setDisplaySize(width * 0.82, height * 0.30);

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
        .setDisplaySize(40, 56).setInteractive({ useHandCursor: true });
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
    this.add.rectangle(60, 28, 110, 36, 0x2a1a0e, 0.85).setOrigin(0.5);
    this.add.image(28, 28, 'hud_gold').setDisplaySize(100, 34);
    this.add.text(68, 28, `${this.state.gold}g`, {
      fontSize: '13px', color: '#f5d44a', fontStyle: 'bold'
    }).setOrigin(0, 0.5);

    this.add.rectangle(width - 60, 28, 100, 36, 0x2a1a0e, 0.85).setOrigin(0.5);
    this.add.image(width - 52, 28, 'hud_gems').setDisplaySize(84, 34);
    this.add.text(width - 38, 28, `0`, {
      fontSize: '13px', color: '#c8a0ff', fontStyle: 'bold'
    }).setOrigin(0, 0.5);

    this.add.rectangle(width / 2, 60, 164, 22, 0x2a1a0e, 0.7).setOrigin(0.5);
    this.add.image(width / 2, 60, 'bar_amber').setDisplaySize(160, 18);

    const season = this.state.season.charAt(0).toUpperCase() + this.state.season.slice(1);
    this.add.image(width / 2, 92, 'btn_parchment').setDisplaySize(180, 32);
    this.add.text(width / 2, 92, `${season} - Day ${this.state.day}`, {
      fontSize: '11px', color: '#3a1a04', fontStyle: 'bold'
    }).setOrigin(0.5);
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
    this.add.rectangle(width / 2, height - 36, width, 72, 0x2a1a0e).setOrigin(0.5);
    this.add.rectangle(width / 2, height - 72, width, 2, 0xc8860a).setOrigin(0.5);

    tabs.forEach((tab, i) => {
      const x = tabWidth * i + tabWidth / 2;
      const y = height - 36;

      const icon = this.add.image(x, y - 8, tab.key)
        .setDisplaySize(44, 44)
        .setAlpha(tab.active ? 1 : 0.5)
        .setInteractive({ useHandCursor: !tab.active })
        .on('pointerdown', () => { if (!tab.active) this.scene.start(tab.scene); });

      this.add.text(x, y + 20, tab.label, {
        fontSize: '9px',
        color: tab.active ? '#e8c870' : '#7a5830'
      }).setOrigin(0.5);
    });
  }
}
