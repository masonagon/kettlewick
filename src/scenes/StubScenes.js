import Phaser from 'phaser';
import { setBg } from '../utils/setBg.js';

function addNav(scene, activeScene) {
  const { width, height } = scene.scale;
  const tabs = [
    { key: 'nav_shop',    label: 'Shop',    scene: 'ShopScene'    },
    { key: 'nav_forage',  label: 'Forage',  scene: 'ForageScene'  },
    { key: 'nav_brew',    label: 'Brew',    scene: 'BrewScene'    },
    { key: 'nav_village', label: 'Village', scene: 'VillageScene' },
    { key: 'nav_recipe',  label: 'Recipes', scene: 'RecipeScene'  },
  ];
  const tabWidth = width / tabs.length;
  scene.add.rectangle(width / 2, height - 36, width, 72, 0x2a1a0e).setOrigin(0.5);
  scene.add.rectangle(width / 2, height - 72, width, 2, 0xc8860a).setOrigin(0.5);
  tabs.forEach((tab, i) => {
    const x = tabWidth * i + tabWidth / 2;
    const y = height - 36;
    const active = tab.scene === activeScene;
    scene.add.image(x, y - 8, tab.key)
      .setDisplaySize(44, 44)
      .setAlpha(active ? 1 : 0.5)
      .setInteractive({ useHandCursor: !active })
      .on('pointerdown', () => { if (!active) scene.scene.start(tab.scene); });
    scene.add.text(x, y + 20, tab.label, {
      fontSize: '9px', color: active ? '#e8c870' : '#7a5830'
    }).setOrigin(0.5);
  });
}

export class ForageScene extends Phaser.Scene {
  constructor() { super('ForageScene'); }
  create() {
    setBg('assets/backgrounds/forage_bg.png');
    const { width, height } = this.scale;
    this.add.text(width/2, height/2-20, 'Foraging Map', { fontFamily:'serif', fontSize:'22px', color:'#e8f0d8' }).setOrigin(0.5);
    this.add.text(width/2, height/2+20, 'Coming soon', { fontSize:'13px', color:'#9ab890' }).setOrigin(0.5);
    addNav(this, 'ForageScene');
  }
}

export class BrewScene extends Phaser.Scene {
  constructor() { super('BrewScene'); }
  create() {
    setBg('assets/backgrounds/brew_bg.png');
    const { width, height } = this.scale;
    this.add.text(width/2, height/2-20, 'Brewing Bench', { fontFamily:'serif', fontSize:'22px', color:'#e8d8a0' }).setOrigin(0.5);
    this.add.text(width/2, height/2+20, 'Coming soon', { fontSize:'13px', color:'#9a8060' }).setOrigin(0.5);
    addNav(this, 'BrewScene');
  }
}

export class VillageScene extends Phaser.Scene {
  constructor() { super('VillageScene'); }
  create() {
    setBg('assets/backgrounds/village_bg.png');
    const { width, height } = this.scale;
    this.add.text(width/2, height/2-20, 'Village Folk', { fontFamily:'serif', fontSize:'22px', color:'#f0d8b0' }).setOrigin(0.5);
    this.add.text(width/2, height/2+20, 'Coming soon', { fontSize:'13px', color:'#9a8060' }).setOrigin(0.5);
    addNav(this, 'VillageScene');
  }
}

export class RecipeScene extends Phaser.Scene {
  constructor() { super('RecipeScene'); }
  create() {
    setBg('assets/backgrounds/recipe_bg.png');
    const { width, height } = this.scale;
    this.add.text(width/2, height/2-20, "Apothecary's Compendium", { fontFamily:'serif', fontSize:'18px', color:'#3a1a04' }).setOrigin(0.5);
    this.add.text(width/2, height/2+20, 'Coming soon', { fontSize:'13px', color:'#8a6030' }).setOrigin(0.5);
    addNav(this, 'RecipeScene');
  }
}
