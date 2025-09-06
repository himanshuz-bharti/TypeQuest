// gameConfig.js - Game configuration constants

export const WORD_POOLS = {
  easy: [
    'funny', 'happy', 'quick', 'brave', 'smart', 'green', 'music', 'dance', 'light', 'water',
    'magic', 'tiger', 'pizza', 'beach', 'storm', 'field', 'robot', 'train', 'smile', 'cloud'
  ],
  medium: [
    'adventure', 'beautiful', 'challenge', 'discover', 'elephant', 'fantastic', 'hospital', 'keyboard', 'mountain', 'question',
    'butterfly', 'computer', 'dinosaur', 'festival', 'grocery', 'homework', 'internet', 'journey', 'library', 'notebook'
  ],
  hard: [
    'extraordinary', 'sophisticated', 'revolutionary', 'contemporary', 'understanding', 'encyclopedia', 'responsibility', 'characteristics', 'demonstration', 'accomplished',
    'environmental', 'philosophical', 'technological', 'international', 'consciousness', 'biodiversity', 'architecture', 'performance', 'magnificent', 'transformation'
  ]
};

export const DIFFICULTY_SETTINGS = {
  easy: { 
    spawnRate: 2500, 
    fallSpeed: 0.5,
    maxWords: 3,
    lives:5,
  },
  medium: { 
    spawnRate: 2000, 
    fallSpeed: 1.0,
    maxWords: 4,
    lives:4,
  },
  hard: { 
    spawnRate: 1500, 
    fallSpeed: 1.3,
    maxWords: 5,
    lives:3,
  },
};

export const GAME_CONSTANTS = {
  INITIAL_LIVES: 4,
  GAME_AREA_WIDTH: 100, // percentage
  GAME_AREA_HEIGHT: 100, // percentage
  WORD_SPAWN_MARGIN: 15, // percentage from edges
  GROUND_THRESHOLD: 0, // percentage where words hit "ground"
  ANIMATION_INTERVAL: 16, // ~60fps
};

export const COLORS = {
  WORD_BACKGROUND: 'bg-green-500',
  WORD_BORDER: 'border-green-600',
  WORD_TEXT: 'text-white',
  DESTROYED_WORD: 'bg-red-500 border-red-600',
};