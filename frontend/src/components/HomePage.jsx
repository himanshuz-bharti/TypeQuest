import React, { useState } from 'react';
import { Users, Trophy, Zap, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function TypeQuestHomepage() {
  const [wpm, setWpm] = useState(0);
  const [races, setRaces] = useState(0);
  const navigate = useNavigate();
  const handlePlayAsGuest = () =>{
    navigate('/play');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">TypeQuest</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Leaderboard</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="text-blue-600 hover:text-blue-700 font-medium">Sign In</button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Create Account
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Account Creation Banner */}
            <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Track Your Progress!</h3>
              <p className="text-blue-100 mb-4">Play the most Unique typing game in the world!</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Create Your Account
              </button>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                TypeQuest - The Global Typing Competition
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Increase your typing speed while having fun.
              </p>

              {/* CTA Button */}
              <button onClick={()=>handlePlayAsGuest()} className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                <span>Play as Guest</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Settings */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">Theme:</span>
                <select className="border border-gray-300 rounded px-3 py-1 text-blue-600 font-medium">
                  <option>Modern</option>
                  <option>Classic</option>
                  <option>Dark</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right Column - Car Illustration */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
              {/* Race Track */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gray-200"></div>
              <div className="absolute top-0 left-0 w-1/3 h-2 bg-green-500"></div>
              
              {/* Speedometer-style Stats */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white mb-4">
                  <div>
                    <div className="text-3xl font-bold">{wpm}</div>
                    <div className="text-sm opacity-90">WPM</div>
                  </div>
                </div>
                <p className="text-gray-600">Your current speed</p>
              </div>

              {/* Nature Scene Illustration */}
              <div className="relative mb-8">
                <svg viewBox="0 0 400 300" className="w-full h-48">
                  {/* Sky Background */}
                  <rect width="400" height="200" fill="#87CEEB" />
                  
                  {/* Ground */}
                  <rect y="200" width="400" height="100" fill="#90EE90" />
                  
                  {/* Clouds */}
                  <g fill="white" opacity="0.8">
                    <circle cx="80" cy="60" r="20" />
                    <circle cx="100" cy="55" r="25" />
                    <circle cx="120" cy="60" r="20" />
                    
                    <circle cx="280" cy="40" r="15" />
                    <circle cx="295" cy="38" r="18" />
                    <circle cx="310" cy="40" r="15" />
                  </g>
                  
                  {/* Words as floating elements */}
                  <g fill="#4A5568" fontSize="28" fontWeight="bold" fontFamily="Arial, sans-serif">
                    <rect x="60" y="30" width="100" height="40" rx="20" fill="white" stroke="#CBD5E0" strokeWidth="2" />
                    <text x="110" y="55" textAnchor="middle">TREE</text>
                    
                    <rect x="250" y="80" width="100" height="40" rx="20" fill="white" stroke="#CBD5E0" strokeWidth="2" />
                    <text x="300" y="105" textAnchor="middle">BIRD</text>
                    
                    <rect x="80" y="120" width="120" height="40" rx="20" fill="white" stroke="#CBD5E0" strokeWidth="2" />
                    <text x="140" y="145" textAnchor="middle">CLOUD</text>
                    
                    <rect x="220" y="160" width="140" height="40" rx="20" fill="white" stroke="#CBD5E0" strokeWidth="2" />
                    <text x="290" y="185" textAnchor="middle">GARDEN</text>
                    
                    <rect x="120" y="220" width="120" height="40" rx="20" fill="white" stroke="#CBD5E0" strokeWidth="2" />
                    <text x="180" y="245" textAnchor="middle">GRASS</text>
                  </g>
                  
                  {/* Decorative elements */}
                  <circle cx="50" cy="250" r="8" fill="#228B22" />
                  <circle cx="350" cy="230" r="6" fill="#228B22" />
                  <circle cx="380" cy="270" r="5" fill="#228B22" />
                </svg>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-5 h-5 text-blue-600 mr-1" />
                    <span className="text-2xl font-bold text-gray-900">0</span>
                  </div>
                  <p className="text-sm text-gray-600">Races</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center mb-2">
                    <Trophy className="w-5 h-5 text-yellow-500 mr-1" />
                    <span className="text-2xl font-bold text-gray-900">--</span>
                  </div>
                  <p className="text-sm text-gray-600">Best WPM</p>
                </div>
              </div>
            </div>

            {/* Floating START indicator */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-xl shadow-lg transform rotate-12">
              <span className="font-bold text-lg">START</span>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Beat your friends</h3>
            <p className="text-gray-600">Compete against players from around the world.</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Track Progress</h3>
            <p className="text-gray-600">Monitor your improvement with detailed statistics and performance analytics.</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Community</h3>
            <p className="text-gray-600">Join millions of typists improving their skills and competing for the top spot.</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Follow TypeQuest on social media</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
              <span className="text-sm font-bold">f</span>
            </a>
            <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
              <span className="text-sm font-bold">t</span>
            </a>
            <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors">
              <span className="text-sm font-bold">Y</span>
            </a>
            <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <span className="text-sm font-bold">TT</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}