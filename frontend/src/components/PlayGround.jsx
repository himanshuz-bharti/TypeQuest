import React, { useEffect, useRef, useState } from 'react';
import { WORD_POOLS, DIFFICULTY_SETTINGS, GAME_CONSTANTS } from './constants/gameConfig';
import { createFallingWord, calculateScore, hasWordReachedGround } from './utils/gamehelper';

export default function PlayGround() {
  const [difficulty, setDifficulty] = useState('medium');
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(DIFFICULTY_SETTINGS.medium.lives);
  const [textWritten, setTextWritten] = useState('');
  const [fallingWords, setFallingWords] = useState([]);

  const animationRef = useRef();
  const lastSpawnTimeRef = useRef(0);
  const lastFrameTimeRef = useRef(0);
  const gameAreaRef = useRef();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!gameStarted) return;
      if (e.key === 'Backspace') {
        setTextWritten((prev) => prev.slice(0, -1));
      } else if (e.key.length === 1 && /^[a-zA-Z]$/.test(e.key)) {
        setTextWritten((prev) => prev + e.key.toLowerCase());
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameStarted]);

  useEffect(() => {
    if (!gameStarted || textWritten === '') return;

    setFallingWords((prev) => {
      const matched = prev.find(
        (w) => !w.destroyed && !w.isDestroying && w.text.toLowerCase() === textWritten.toLowerCase()
      );
      if (!matched) return prev;

      const updated = prev.map((w) =>
        w.id === matched.id ? { ...w, isDestroying: true } : w
      );

      setTimeout(() => {
        setFallingWords((p) => p.filter((w) => w.id !== matched.id));
      }, 300);

      setScore((s) => s + calculateScore(difficulty));
      setTextWritten('');

      return updated;
    });
  }, [textWritten, gameStarted, difficulty]);

  useEffect(() => {
    if (!gameStarted) return;

    const animate = (timestamp) => {
      const settings = DIFFICULTY_SETTINGS[difficulty];

      if (!lastFrameTimeRef.current) lastFrameTimeRef.current = timestamp;
      const deltaTime = timestamp - lastFrameTimeRef.current;
      lastFrameTimeRef.current = timestamp;

      // Spawn new words
      if (timestamp - lastSpawnTimeRef.current > settings.spawnRate) {
        setFallingWords((prev) => {
          const activeWords = prev.filter((w) => !w.destroyed && !w.isDestroying);
          if (activeWords.length < settings.maxWords) {
            return [...prev, createFallingWord(difficulty)];
          }
          return prev;
        });
        lastSpawnTimeRef.current = timestamp;
      }

      // Update word positions
      let deaths = 0;
      setFallingWords((prev) => {
        const updated = prev.map((word) => {
          if (word.destroyed || word.isDestroying) return word;

          const fallAmount = settings.fallSpeed * (deltaTime / (1000 / 60));
          const newY = word.y + fallAmount;

          const gameHeight = gameAreaRef.current?.clientHeight || 800;
          if (newY > gameHeight - 50) {
            deaths += 1;
            setLives((l) => {
          const newLives = Math.max(0, l - deaths);
          console.log("n", newLives);
          return newLives;
        });
            console.log('Word reached ground:', word);
            return { ...word, y: newY, destroyed: true };
          }

          return { ...word, y: newY };
        });

        // Filter out destroyed words (but keep isDestroying for animation)
        return updated.filter((word) => !word.destroyed);
      });


      if (gameStarted) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    lastFrameTimeRef.current = 0;
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [gameStarted, difficulty]);

   useEffect(()=>{
    if(lives==0) setGameStarted(false);
   },[lives]);

  const resetGame = () => {
    setScore(0);
    setLives(DIFFICULTY_SETTINGS[difficulty].lives);
    setFallingWords([]);
    setTextWritten('');
    lastSpawnTimeRef.current = 0;
    lastFrameTimeRef.current = 0;
  };

  const handleStart = () => {
    resetGame();
    setGameStarted(true);
  };

  const handlePauseResume = () => {
    setGameStarted((prev) => !prev);
  };

  const handleDifficultyChange = (e) => {
    const newDiff = e.target.value;
    setDifficulty(newDiff);
    if (!gameStarted) {
      setLives(DIFFICULTY_SETTINGS[newDiff].lives);
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex">
      {/* Left Panel - Full Green */}
      <div className="w-1/4 bg-green-400 p-6 flex flex-col">
        {/* Typing Display Section */}
        <div className="bg-green-500 p-3 rounded-lg mb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Type to destroy</h2>
          <input
            type="text"
            value={textWritten}
            readOnly
            className="w-full p-2 rounded-lg border border-gray-300 bg-white text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="type to destroy..."
          />
        </div>

        <div className="bg-green-300 p-3 rounded-lg mb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Lives</h2>
          <div className="flex items-center gap-1">
            {Array.from({ length: lives }, (_, i) => (
              <span key={i} className="text-red-500 text-xl">❤️</span>
            ))}
            {Array.from({ length: DIFFICULTY_SETTINGS[difficulty].lives - lives }, (_, i) => (
              <span key={i} className="text-gray-400 text-xl">🤍</span>
            ))}
          </div>
        </div>

      
        <div className="bg-green-300 p-3 rounded-lg mb-3">
          <h2 className="text-lg font-bold text-gray-800 mb-1">Score</h2>
          <div className="text-3xl font-bold text-gray-800 mb-1">{score}</div>
          <div className="text-xs text-gray-700">Current Score</div>
        </div>

       
        <div className="bg-green-300 p-3 rounded-lg mb-4">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Choose difficulty</h3>
          <select
            value={difficulty}
            onChange={handleDifficultyChange}
            className="w-full p-2 rounded-lg border border-gray-300 bg-white text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        
        <div className="bg-green-300 p-4 rounded-lg">
          {!gameStarted ? (
            <button
              onClick={handleStart}
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-bold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Start
            </button>
          ) : (
            <button
              onClick={handlePauseResume}
              className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-bold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Pause
            </button>
          )}
        </div>
      </div>

      <div ref={gameAreaRef} className="flex-1 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
    
        <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700"></div>

      
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gray-400"></div>

       
        <div className="relative z-10 h-full flex items-center justify-center">
          {lives === 0 && (
            <div className="h-full flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-4xl font-bold mb-4">Game Over!</div>
                <div className="text-xl mb-2">Final Score: {score}</div>
                <div className="text-lg opacity-75">Click Restart to play again</div>
              </div>
            </div>
          )}
          {!gameStarted && lives > 0 && (
            <div className="text-white text-2xl font-semibold opacity-50">
              Game Area - Press Start to Begin
            </div>
          )}
          {gameStarted &&
            fallingWords.map((word) => (
              <div
                key={word.id}
                className={`absolute transition-opacity transition-transform duration-300 ${
                  word.isDestroying ? 'opacity-0 scale-150' : 'opacity-100 scale-100'
                }`}
                style={{
                  left: `${word.x}%`,
                  top: `${word.y}px`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="bg-green-500 border-2 border-green-600 text-white px-4 py-2 rounded-lg shadow-lg font-bold text-lg">
                  {word.text}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}