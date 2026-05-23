// ─────────────────────────────────────────────
// KETTLEWICK — Game State
// Single source of truth. Persisted to localStorage.
// ─────────────────────────────────────────────

const SAVE_KEY = 'kettlewick_save';

const DEFAULT_STATE = {
  // Progression
  day: 1,
  season: 'autumn',   // spring | summer | autumn | winter
  year: 1,
  gold: 80,

  // Streak
  lastPlayedDate: null,
  streakDays: 0,

  // Inventory: { ingredientKey: count }
  inventory: {
    mugwort: 2,
    nettleroot: 3,
    rivermoss: 1,
    pineresin: 2,
  },

  // Brewed potions ready to sell: { recipeKey: count }
  shelf: {},

  // Villager relationships: { villagerKey: 0-100 }
  relationships: {},

  // Recipe discovery: { recipeKey: true/false }
  discoveredRecipes: {
    quiet_fog: true,
    deep_warmth: true,
  },

  // Shop upgrade level (0-5), unlocks new shelf tiers
  shopLevel: 0,

  // Current active season decorations
  seasonDecor: [],
};

export function loadState() {
  try {
    const saved = localStorage.getItem(SAVE_KEY);
    if (saved) return { ...DEFAULT_STATE, ...JSON.parse(saved) };
  } catch (e) {
    console.warn('Save load failed, using defaults');
  }
  return { ...DEFAULT_STATE };
}

export function saveState(state) {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Save failed');
  }
}

export function resetState() {
  localStorage.removeItem(SAVE_KEY);
  return { ...DEFAULT_STATE };
}

// Check and update daily streak
export function checkStreak(state) {
  const today = new Date().toDateString();
  if (state.lastPlayedDate === today) return state;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const newStreak = state.lastPlayedDate === yesterday.toDateString()
    ? state.streakDays + 1
    : 1;

  return { ...state, streakDays: newStreak, lastPlayedDate: today };
}

// Advance the in-game day
export function advanceDay(state) {
  const seasons = ['spring', 'summer', 'autumn', 'winter'];
  const DAYS_PER_SEASON = 28;

  let { day, season, year } = state;
  day += 1;

  if (day > DAYS_PER_SEASON) {
    day = 1;
    const idx = seasons.indexOf(season);
    if (idx === seasons.length - 1) {
      season = seasons[0];
      year += 1;
    } else {
      season = seasons[idx + 1];
    }
  }

  return { ...state, day, season, year };
}
