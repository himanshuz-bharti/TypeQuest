import { WORD_POOLS, DIFFICULTY_SETTINGS, GAME_CONSTANTS } from '../constants/gameConfig.js';


export const getRandomWord = (difficulty) => {
  const words = WORD_POOLS[difficulty] || WORD_POOLS.medium;
  return words[Math.floor(Math.random() * words.length)];
};


export const getRandomSpawnPosition = () => {
  const margin = GAME_CONSTANTS.WORD_SPAWN_MARGIN;
  return Math.random() * (GAME_CONSTANTS.GAME_AREA_WIDTH - 2 * margin) + margin;
};

export const createFallingWord = (difficulty) => {
  return {
    id: `word_${Date.now()}_${Math.random().toString(36)}`,
    text: getRandomWord(difficulty),
    x: getRandomSpawnPosition(),
    y: -10, // Start above the screen
    destroyed: false,
    isDestroying: false, // For animation states
    createdAt: Date.now()
  };
};


export const calculateScore = (difficulty) => {
  if(difficulty === 'easy') return 5;
  if(difficulty === 'medium') return 10;
  if(difficulty === 'hard') return 15;
};

export const hasWordReachedGround = (word) => {
  return word.y >= GAME_CONSTANTS.GAME_AREA_HEIGHT - GAME_CONSTANTS.GROUND_THRESHOLD;
};

