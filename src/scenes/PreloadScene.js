import Phaser from 'phaser';
import { ALL_ASSETS } from '../data/assets.js';

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene');
  }

  preload() {
    const { width, height } = this.scale;

    // ── Loading bar ──
    const barBg = this.add.rectangle(width / 2, height / 2, 280, 16, 0x3a2010);
    const bar   = this.add.rectangle(width / 2 - 140, height / 2, 0, 12, 0xc8860a);
    bar.setOrigin(0, 0.5);

    this.add.text(width / 2, height / 2 - 32, 'Kettlewick', {
      fontFamily: 'serif', fontSize: '28px', color: '#f0d8b0'
    }).setOrigin(0.5);

    const loadingText = this.add.text(width / 2, height / 2 + 28, 'Loading...', {
      fontFamily: 'serif', fontSize: '13px', color: '#8a6840'
    }).setOrigin(0.5);

    this.load.on('progress', (value) => {
      bar.width = 276 * value;
    });

    this.load.on('fileprogress', (file) => {
      loadingText.setText(`Loading: ${file.key}`);
    });

    // ── Load every asset; fall back to placeholder if file missing ──
    this.load.on('loaderror', (file) => {
      console.warn(`Asset missing: ${file.key} (${file.src}) — using placeholder`);
      // Re-register key pointing at the closest placeholder
      const placeholderMap = {
        ingredient: 'assets/ingredients/placeholder.png',
        potion:     'assets/potions/placeholder.png',
        villager:   'assets/villagers/placeholder.png',
        portrait:   'assets/villagers/portraits/placeholder.png',
        bg:         'assets/backgrounds/shop_bg.png',
        prop:       'assets/props/shop/shelf.png',
        icon:       'assets/ui/icons/coin.png',
        default:    'assets/ui/placeholder_button.png',
      };
      const fallback = Object.entries(placeholderMap).find(([k]) =>
        file.key.includes(k)
      )?.[1] ?? placeholderMap.default;

      this.textures.addBase64(file.key, this.textures.getBase64(fallback));
    });

    ALL_ASSETS.forEach(({ key, path }) => {
      this.load.image(key, path);
    });
  }

  create() {
    this.scene.start('ShopScene');
  }
}
