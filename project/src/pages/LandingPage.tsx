import React, { useEffect, useState } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';

type Page = 'home' | 'chat' | 'about';

interface LandingPageProps {
  onNavigate: (page: Page) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const spiritualPhrases = [
    "Radhe Radhe ✨",
    "Where love meets devotion",
    "Enter the eternal Vrindavan in your heart"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Hero Section */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Experience the Divine Love of
            <span className="block text-pink-400 ">
              Radha Ji & Krishna Ji
            </span>
            <span className="text-4xl md:text-5xl"> 🦚🌸</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            A spiritual companion that shares the eternal rasa of Vrindavan with you.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={() => onNavigate('chat')}
            className="group bg-gradient-to-r from-teal-400 to-blue-500 px-8 py-4 rounded-2xl text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
          >
            <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
            <span>Enter the Divine Chat 🌼</span>
          </button>
          
          <button
            onClick={() => onNavigate('about')}
            className="group bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl text-white font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
          >
            <Sparkles className="w-6 h-6 group-hover:animate-spin" />
            <span>About Radha–Krishna ✨</span>
          </button>
        </div>

        {/* Spiritual Phrases */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {spiritualPhrases.map((phrase, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg transform transition-all duration-700 hover:scale-105 ${
                showMessage ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <p className="text-white/90 text-lg font-medium italic">
                "{phrase}"
              </p>
            </div>
          ))}
        </div>

        {/* Divine Message */}
        {showMessage && (
          <div className="mt-12 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-8 border border-pink-300/30 shadow-xl animate-fade-in">
            <p className="text-white text-lg italic leading-relaxed">
              "In the garden of your heart, let the lotus of devotion bloom. 
              Every moment spent in remembrance of Radha-Krishna is a step closer to Vrindavan."
            </p>
            <p className="text-pink-300 mt-4 font-semibold">— A message from the divine realm</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;