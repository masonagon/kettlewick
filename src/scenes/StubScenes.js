import Phaser from 'phaser';

// ─── Shared nav helper ───────────────────────
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
  scene.add.rectangle(width / 2, height - 36, width, 72, 0x3a2010).setOrigin(0.5);
  scene.add.rectangle(width / 2, height - 71, width, 1, 0x5a3018);
  tabs.forEach((tab, i) => {
    const x = tabWidth * i + tabWidth / 2;
    const y = height - 36;
    const active = tab.scene === activeScene;
    scene.add.text(x, y, tab.label, {
      fontSize: '10px', color: active ? '#e8a830' : '#7a5830'
    }).setOrigin(0.5).setInteractive({ useHandCursor: !active })
      .on('pointerdown', () => { if (!active) scene.scene.start(tab.scene); });
  });
}

// ─── FORAGE SCENE ────────────────────────────
export class ForageScene extends Phaser.Scene {
  constructor() { super('ForageScene'); }
  create() {
    const { width, height } = this.scale;
    this.add.image(width / 2, height / 2, 'bg_forage').setDisplaySize(width, height);
    this.add.text(width / 2, height / 2 - 40, 'Foraging Map', {
      fontFamily: 'serif', fontSize: '22px', color: '#e8f0d8'
    }).setOrigin(0.5);
    this.add.text(width / 2, height / 2, 'Coming soon — drop your\nforage map assets to unlock', {
      fontSize: '13px', color: '#9ab890', align: 'center'
    }).setOrigin(0.5);
    addNav(this, 'ForageScene');
  }
}

// ─── BREW SCENE ──────────────────────────────
export class BrewScene extends Phaser.Scene {
  constructor() { super('BrewScene'); }
  create() {
    const { width, height } = this.scale;
    this.add.image(width / 2, height / 2, 'bg_brew').setDisplaySize(width, height);
    this.add.text(width / 2, height / 2 - 40, 'Brewing Bench', {
      fontFamily: 'serif', fontSize: '22px', color: '#e8d8a0'
    }).setOrigin(0.5);
    this.add.text(width / 2, height / 2, 'Coming soon — drop your\nbrew scene assets to unlock', {
      fontSize: '13px', color: '#9a8060', align: 'center'
    }).setOrigin(0.5);
    addNav(this, 'BrewScene');
  }
}

// ─── VILLAGE SCENE ───────────────────────────
export class VillageScene extends Phaser.Scene {
  constructor() { super('VillageScene'); }
  create() {
    const { width, height } = this.scale;
    this.add.image(width / 2, height / 2, 'bg_village').setDisplaySize(width, height);
    this.add.text(width / 2, height / 2 - 40, 'Village Folk', {
      fontFamily: 'serif', fontSize: '22px', color: '#f0d8b0'
    }).setOrigin(0.5);
    this.add.text(width / 2, height / 2, 'Coming soon — drop your\nvillager assets to unlock', {
      fontSize: '13px', color: '#9a8060', align: 'center'
    }).setOrigin(0.5);
    addNav(this, 'VillageScene');
  }
}

// ─── RECIPE SCENE ────────────────────────────
export class RecipeScene extends Phaser.Scene {
  constructor() { super('RecipeScene'); }
  create() {
    const { width, height } = this.scale;
    this.add.image(width / 2, height / 2, 'bg_recipe').setDisplaySize(width, height);
    this.add.text(width / 2, height / 2 - 40, "Apothecary's Compendium", {
      fontFamily: 'serif', fontSize: '18px', color: '#3a1a04'
    }).setOrigin(0.5);
    this.add.text(width / 2, height / 2, 'Coming soon — drop your\nrecipe book assets to unlock', {
      fontSize: '13px', color: '#8a6030', align: 'center'
    }).setOrigin(0.5);
    addNav(this, 'RecipeScene');
  }
}
