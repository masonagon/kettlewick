import Phaser from 'phaser';
import PreloadScene from './scenes/PreloadScene.js';
import ShopScene from './scenes/ShopScene.js';
import { ForageScene, BrewScene, VillageScene, RecipeScene } from './scenes/StubScenes.js';

const config = {
  type: Phaser.AUTO,
  width: 360,
  height: 640,
  transparent: true,
  parent: 'game-container',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  render: {
    antialias: true,
    pixelArt: false,
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

// Expose game globally so scenes can update the bg img
window.KettlewickGame = new Phaser.Game(config);
