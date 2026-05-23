import Phaser from 'phaser';
import PreloadScene from './scenes/PreloadScene.js';
import ShopScene from './scenes/ShopScene.js';
import { ForageScene, BrewScene, VillageScene, RecipeScene } from './scenes/StubScenes.js';

const DPR = Math.min(window.devicePixelRatio || 1, 2);

const config = {
  type: Phaser.AUTO,
  width: 360,
  height: 640,
  backgroundColor: '#2a1a0e',
  parent: 'game-container',
  resolution: DPR,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  render: {
    antialias: true,
    pixelArt: false,
    roundPixels: false,
  },
  scene: [
    PreloadScene,
    ShopScene,
    ForageScene,
    BrewScene,
    VillageScene,
    RecipeScene,
  ],
};

new Phaser.Game(config);
