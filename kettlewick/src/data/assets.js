// ─────────────────────────────────────────────
// KETTLEWICK — Asset Manifest
// To add a new asset: drop the file into the
// correct /assets subfolder, then add one line
// here in the matching section.
//
// Format: { key: 'unique_key', path: 'assets/...' }
// The key is how you reference it in Phaser:
//   this.add.image(x, y, 'mugwort')
// ─────────────────────────────────────────────

export const BACKGROUNDS = [
  { key: 'bg_shop',    path: 'assets/backgrounds/shop_bg.png' },
  { key: 'bg_forage',  path: 'assets/backgrounds/forage_bg.png' },
  { key: 'bg_brew',    path: 'assets/backgrounds/brew_bg.png' },
  { key: 'bg_village', path: 'assets/backgrounds/village_bg.png' },
  { key: 'bg_recipe',  path: 'assets/backgrounds/recipe_bg.png' },
];

export const UI = [
  { key: 'btn_wood',       path: 'assets/ui/buttons/btn_wood.png' },
  { key: 'btn_parchment',  path: 'assets/ui/buttons/btn_parchment.png' },
  { key: 'panel_scroll',   path: 'assets/ui/frames/panel_scroll.png' },
  { key: 'panel_wood',     path: 'assets/ui/frames/panel_wood.png' },
  { key: 'frame_portrait', path: 'assets/ui/frames/frame_portrait.png' },
  { key: 'bar_empty',      path: 'assets/ui/frames/bar_empty.png' },
  { key: 'bar_full',       path: 'assets/ui/frames/bar_full.png' },
];

export const ICONS = [
  { key: 'icon_coin',     path: 'assets/ui/icons/coin.png' },
  { key: 'icon_flame',    path: 'assets/ui/icons/flame.png' },
  { key: 'icon_bag',      path: 'assets/ui/icons/bag.png' },
  { key: 'icon_lock',     path: 'assets/ui/icons/lock.png' },
  { key: 'icon_star',     path: 'assets/ui/icons/star.png' },
  { key: 'icon_bell',     path: 'assets/ui/icons/bell.png' },
  { key: 'icon_clock',    path: 'assets/ui/icons/clock.png' },
  { key: 'icon_question', path: 'assets/ui/icons/question.png' },
  { key: 'icon_check',    path: 'assets/ui/icons/check.png' },
  // Nav tab icons
  { key: 'nav_shop',    path: 'assets/ui/icons/nav_shop.png' },
  { key: 'nav_forage',  path: 'assets/ui/icons/nav_forage.png' },
  { key: 'nav_brew',    path: 'assets/ui/icons/nav_brew.png' },
  { key: 'nav_village', path: 'assets/ui/icons/nav_village.png' },
  { key: 'nav_recipe',  path: 'assets/ui/icons/nav_recipe.png' },
  // Seasonal badges
  { key: 'badge_spring', path: 'assets/ui/icons/badge_spring.png' },
  { key: 'badge_summer', path: 'assets/ui/icons/badge_summer.png' },
  { key: 'badge_autumn', path: 'assets/ui/icons/badge_autumn.png' },
  { key: 'badge_winter', path: 'assets/ui/icons/badge_winter.png' },
];

// ─── INGREDIENTS ──────────────────────────────
// Drop new ingredient PNGs into /assets/ingredients/
// then add a line here. key = ingredient id used in recipes.js

export const INGREDIENTS = [
  // Herbs & Plants
  { key: 'mugwort',       path: 'assets/ingredients/mugwort.png' },
  { key: 'foxglove',      path: 'assets/ingredients/foxglove.png' },
  { key: 'nettleroot',    path: 'assets/ingredients/nettleroot.png' },
  { key: 'rivermoss',     path: 'assets/ingredients/rivermoss.png' },
  { key: 'yarrow',        path: 'assets/ingredients/yarrow.png' },
  { key: 'elderflower',   path: 'assets/ingredients/elderflower.png' },
  { key: 'valerian',      path: 'assets/ingredients/valerian.png' },
  { key: 'stjohnswort',   path: 'assets/ingredients/stjohnswort.png' },
  { key: 'chamomile',     path: 'assets/ingredients/chamomile.png' },
  { key: 'lavender',      path: 'assets/ingredients/lavender.png' },
  { key: 'rosehip',       path: 'assets/ingredients/rosehip.png' },
  { key: 'hawthorn',      path: 'assets/ingredients/hawthorn.png' },
  { key: 'rowanberry',    path: 'assets/ingredients/rowanberry.png' },
  { key: 'sloe',          path: 'assets/ingredients/sloe.png' },
  { key: 'meadowsweet',   path: 'assets/ingredients/meadowsweet.png' },
  { key: 'betony',        path: 'assets/ingredients/betony.png' },
  { key: 'hyssop',        path: 'assets/ingredients/hyssop.png' },
  { key: 'lemonbalm',     path: 'assets/ingredients/lemonbalm.png' },
  { key: 'woad',          path: 'assets/ingredients/woad.png' },
  { key: 'wormwood',      path: 'assets/ingredients/wormwood.png' },
  { key: 'comfrey',       path: 'assets/ingredients/comfrey.png' },
  { key: 'agrimony',      path: 'assets/ingredients/agrimony.png' },
  { key: 'selfheal',      path: 'assets/ingredients/selfheal.png' },
  { key: 'pennywort',     path: 'assets/ingredients/pennywort.png' },
  { key: 'cleavers',      path: 'assets/ingredients/cleavers.png' },
  // Fungi & Mosses
  { key: 'morel',         path: 'assets/ingredients/morel.png' },
  { key: 'chanterelle',   path: 'assets/ingredients/chanterelle.png' },
  { key: 'flyagaric',     path: 'assets/ingredients/flyagaric.png' },
  { key: 'deathcap',      path: 'assets/ingredients/deathcap.png' },
  { key: 'oyster',        path: 'assets/ingredients/oyster.png' },
  { key: 'puffball',      path: 'assets/ingredients/puffball.png' },
  { key: 'turkeytail',    path: 'assets/ingredients/turkeytail.png' },
  { key: 'witchesbutter', path: 'assets/ingredients/witchesbutter.png' },
  { key: 'ghostfungus',   path: 'assets/ingredients/ghostfungus.png' },
  { key: 'truffle',       path: 'assets/ingredients/truffle.png' },
  { key: 'velvetshank',   path: 'assets/ingredients/velvetshank.png' },
  { key: 'bogmoss',       path: 'assets/ingredients/bogmoss.png' },
  { key: 'lungwort',      path: 'assets/ingredients/lungwort.png' },
  { key: 'rocktripe',     path: 'assets/ingredients/rocktripe.png' },
  { key: 'hairmoss',      path: 'assets/ingredients/hairmoss.png' },
  // Minerals, Resins & Rare
  { key: 'amber',         path: 'assets/ingredients/amber.png' },
  { key: 'beeswax',       path: 'assets/ingredients/beeswax.png' },
  { key: 'pineresin',     path: 'assets/ingredients/pineresin.png' },
  { key: 'riverclay',     path: 'assets/ingredients/riverclay.png' },
  { key: 'chalk',         path: 'assets/ingredients/chalk.png' },
  { key: 'pyrite',        path: 'assets/ingredients/pyrite.png' },
  { key: 'smokyquartz',   path: 'assets/ingredients/smokyquartz.png' },
  { key: 'rosequartz',    path: 'assets/ingredients/rosequartz.png' },
  { key: 'honeycomb',     path: 'assets/ingredients/honeycomb.png' },
  { key: 'waxseal',       path: 'assets/ingredients/waxseal.png' },
  { key: 'blacksalt',     path: 'assets/ingredients/blacksalt.png' },
  { key: 'moonwater',     path: 'assets/ingredients/moonwater.png' },
  { key: 'starlingfeather', path: 'assets/ingredients/starlingfeather.png' },
  { key: 'snailshell',    path: 'assets/ingredients/snailshell.png' },
  { key: 'butterflywing', path: 'assets/ingredients/butterflywing.png' },
  { key: 'crowfeather',   path: 'assets/ingredients/crowfeather.png' },
  { key: 'owlpellet',     path: 'assets/ingredients/owlpellet.png' },
  { key: 'cobwebsilk',    path: 'assets/ingredients/cobwebsilk.png' },
  { key: 'dewdrops',      path: 'assets/ingredients/dewdrops.png' },
];

// ─── POTIONS ──────────────────────────────────
export const POTIONS = [
  { key: 'potion_quiet_fog',    path: 'assets/potions/quiet_fog.png' },
  { key: 'potion_deep_warmth',  path: 'assets/potions/deep_warmth.png' },
  { key: 'potion_sleep',        path: 'assets/potions/sleep.png' },
  { key: 'potion_courage',      path: 'assets/potions/courage.png' },
  { key: 'potion_shadow_salve', path: 'assets/potions/shadow_salve.png' },
  { key: 'potion_clarity',      path: 'assets/potions/clarity.png' },
  { key: 'potion_warmth_brew',  path: 'assets/potions/warmth_brew.png' },
  { key: 'potion_bitter_cure',  path: 'assets/potions/bitter_cure.png' },
  { key: 'potion_bloom',        path: 'assets/potions/bloom.png' },
  { key: 'potion_dreamers_rest',path: 'assets/potions/dreamers_rest.png' },
];

// ─── VILLAGERS ────────────────────────────────
export const VILLAGERS = [
  { key: 'villager_edda',   path: 'assets/villagers/edda.png' },
  { key: 'villager_pip',    path: 'assets/villagers/pip.png' },
  { key: 'villager_maren',  path: 'assets/villagers/maren.png' },
  { key: 'villager_oswin',  path: 'assets/villagers/oswin.png' },
  { key: 'villager_brynn',  path: 'assets/villagers/brynn.png' },
  { key: 'villager_tomas',  path: 'assets/villagers/tomas.png' },
  { key: 'villager_isolde', path: 'assets/villagers/isolde.png' },
  { key: 'villager_cael',   path: 'assets/villagers/cael.png' },
  { key: 'villager_nessa',  path: 'assets/villagers/nessa.png' },
  { key: 'villager_rowan',  path: 'assets/villagers/rowan.png' },
  // Portraits
  { key: 'portrait_edda',   path: 'assets/villagers/portraits/edda.png' },
  { key: 'portrait_pip',    path: 'assets/villagers/portraits/pip.png' },
  { key: 'portrait_maren',  path: 'assets/villagers/portraits/maren.png' },
  { key: 'portrait_oswin',  path: 'assets/villagers/portraits/oswin.png' },
  { key: 'portrait_brynn',  path: 'assets/villagers/portraits/brynn.png' },
  { key: 'portrait_tomas',  path: 'assets/villagers/portraits/tomas.png' },
  { key: 'portrait_isolde', path: 'assets/villagers/portraits/isolde.png' },
  { key: 'portrait_cael',   path: 'assets/villagers/portraits/cael.png' },
  { key: 'portrait_nessa',  path: 'assets/villagers/portraits/nessa.png' },
  { key: 'portrait_rowan',  path: 'assets/villagers/portraits/rowan.png' },
];

// ─── SHOP PROPS ───────────────────────────────
export const PROPS = [
  { key: 'prop_shelf',     path: 'assets/props/shop/shelf.png' },
  { key: 'prop_counter',   path: 'assets/props/shop/counter.png' },
  { key: 'prop_herbs_hang',path: 'assets/props/shop/herbs_hang.png' },
  { key: 'prop_scales',    path: 'assets/props/shop/scales.png' },
  { key: 'prop_mortar',    path: 'assets/props/shop/mortar.png' },
  { key: 'prop_ledger',    path: 'assets/props/shop/ledger.png' },
  { key: 'prop_cauldron',  path: 'assets/props/shop/cauldron.png' },
  { key: 'prop_crock',     path: 'assets/props/shop/crock.png' },
  { key: 'prop_basket',    path: 'assets/props/shop/basket.png' },
  { key: 'prop_lantern',   path: 'assets/props/shop/lantern.png' },
  { key: 'prop_sign',      path: 'assets/props/shop/sign.png' },
  { key: 'prop_broom',     path: 'assets/props/shop/broom.png' },
  { key: 'prop_herb_pot',  path: 'assets/props/shop/herb_pot.png' },
  { key: 'prop_candle',    path: 'assets/props/shop/candle.png' },
  { key: 'prop_chest',     path: 'assets/props/shop/chest.png' },
  // Forage map
  { key: 'forage_tree',    path: 'assets/props/forage/tree.png' },
  { key: 'forage_log',     path: 'assets/props/forage/log.png' },
  { key: 'forage_rock',    path: 'assets/props/forage/rock.png' },
  { key: 'forage_fog',     path: 'assets/props/forage/fog.png' },
  { key: 'forage_sparkle', path: 'assets/props/forage/sparkle.png' },
  { key: 'forage_player',  path: 'assets/props/forage/player.png' },
];

// ─── SEASONAL DECORATIONS ─────────────────────
export const SEASONAL = [
  { key: 'spring_blossom',  path: 'assets/seasonal/spring/blossom.png' },
  { key: 'spring_wreath',   path: 'assets/seasonal/spring/wreath.png' },
  { key: 'spring_nest',     path: 'assets/seasonal/spring/nest.png' },
  { key: 'summer_sunflower',path: 'assets/seasonal/summer/sunflower.png' },
  { key: 'summer_honey',    path: 'assets/seasonal/summer/honey.png' },
  { key: 'summer_basket',   path: 'assets/seasonal/summer/basket.png' },
  { key: 'autumn_corn',     path: 'assets/seasonal/autumn/corn.png' },
  { key: 'autumn_pumpkin',  path: 'assets/seasonal/autumn/pumpkin.png' },
  { key: 'autumn_wreath',   path: 'assets/seasonal/autumn/wreath.png' },
  { key: 'winter_holly',    path: 'assets/seasonal/winter/holly.png' },
  { key: 'winter_pinecone', path: 'assets/seasonal/winter/pinecone.png' },
  { key: 'winter_snowglobe',path: 'assets/seasonal/winter/snowglobe.png' },
];

// ─── ALL ASSETS (used by PreloadScene) ────────
export const ALL_ASSETS = [
  ...BACKGROUNDS,
  ...UI,
  ...ICONS,
  ...INGREDIENTS,
  ...POTIONS,
  ...VILLAGERS,
  ...PROPS,
  ...SEASONAL,
];
