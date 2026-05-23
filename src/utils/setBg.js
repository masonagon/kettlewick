// Sets the HTML background image behind the Phaser canvas
export function setBg(assetPath) {
  const el = document.getElementById('scene-bg');
  if (el) el.src = assetPath;
}
