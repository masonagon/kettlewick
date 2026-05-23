import Phaser from 'phaser';
import { setBg } from '../utils/setBg.js';

function addNav(scene, activeScene) {
  const { width, height } = scene.scale;
  const tabs = [
    { label: 'Shop',    scene: 'ShopScene'    },
    { label: 'Forage',  scene: 'ForageScene'  },
    { label: 'Brew',    scene: 'BrewScene'    },
    { label: 'Village', scene: 'VillageScene' },
    { label: 'Recipes', scene: 'RecipeScene'  },
  ];
  const tabWidth = width / tabs.length;
  scene.add.rectangle(width / 2, height - 36, width, 72, 0x2a1a0e).setOrigin(0.5);
  scene.add.rectangle(width / 2, height - 72, width, 2, 0xc8860a).setOrigin(0.5);
  tabs.forEach((tab, i) => {
    const x = tabWidth * i + tabWidth / 2;
    const y = height - 36;
    const active = tab.scene === activeScene;
    if (active) {
      scene.add.image(x, y, 'btn_parchment').setDisplaySize(tabWidth - 6, 58);
      scene.add.text(x, y, tab.label, { fontSize: '12px', color: '#3a1a04', fontStyle: 'bold' }).setOrigin(0.5);
    } else {
      scene.add.text(x, y, tab.label, { fontSize: '11px', color: '#c8a060' })
        .setOrigin(0.5).setInteractive({ useHandCursor: true })
        .on('pointerdown', () => scene.scene.start(tab.scene));
    }
  });
}

export class ForageScene extends Phaser.Scene {
  constructor() { super('ForageScene'); }
  create() {
    setBg('assets/backgrounds/forage_bg.png');
    const { width, height } = this.scale;
    this.add.text(width / 2, height / 2 - 40, 'Foraging Map', { fontFamily: 'serif', fontSize: '22px', color: '#e8f0d8' }).setOrigin(0.5);
    this.add.text(width / 2, height / 2, 'Coming soon', { fontSize: '13px', color: '#9ab890' }).setOrigin(0.5);
    addNav(this, 'ForageScene');
  }
}

export class BrewScene extends Phaser.Scene {
  constructor() { super('BrewScene'); }
  create() {
    setBg('assets/backgrounds/brew_bg.png');
    const { width, height } = this.scale;
    this.add.text(width / 2, height / 2 - 40, 'Brewing Bench', { fontFamily: 'serif', fontSize: '22px', color: '#e8d8a0' }).setOrigin(0.5);
    this.add.text(width / 2, height / 2, 'Coming soon', { fontSize: '13px', color: '#9a8060' }).setOrigin(0.5);
    addNav(this, 'BrewScene');
  }
}

export class VillageScene extends Phaser.Scene {
  constructor() { super('VillageScene'); }
  create() {
    setBg('assets/backgrounds/village_bg.png');
    const { width, height } = this.scale;
    this.add.text(width / 2, height / 2 - 40, 'Village Folk', { fontFamily: 'serif', fontSize: '22px', color: '#f0d8b0' }).setOrigin(0.5);
    this.add.text(width / 2, height / 2, 'Coming soon', { fontSize: '13px', color: '#9a8060' }).setOrigin(0.5);
    addNav(this, 'VillageScene');
  }
}

export class RecipeScene extends Phaser.Scene {
  constructor() { super('RecipeScene'); }
  create() {
    setBg('assets/backgrounds/recipe_bg.png');
    const { width, height } = this.scale;
    this.add.text(width / 2, height / 2 - 40, "Apothecary's Compendium", { fontFamily: 'serif', fontSize: '18px', color: '#3a1a04' }).setOrigin(0.5);
    this.add.text(width / 2, height / 2, 'Coming soon', { fontSize: '13px', color: '#8a6030' }).setOrigin(0.5);
    addNav(this, 'RecipeScene');
  }
}
