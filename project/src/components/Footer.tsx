import React from 'react';
import { Heart, Star, Music } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg p-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <Heart className="w-5 h-5 text-pink-400 animate-pulse" />
              <Star className="w-5 h-5 text-yellow-400 animate-pulse" />
              <Music className="w-5 h-5 text-blue-400 animate-pulse" />
            </div>
            
            <p className="text-white/90 text-lg font-medium">
              Made with devotion, peacock feathers, and the grace of Sri Radha–Krishna ✨
            </p>
            
            <p className="text-pink-300 font-semibold">
              Radhe Radhe 🌸 Chant the holy names and let your heart dance in Vrindavan
            </p>
            
            <div className="flex items-center justify-center space-x-6 mt-4 text-white/60 text-sm">
              <span>🙏 Hare Krishna</span>
              <span>•</span>
              <span>🌸 Radhe Radhe</span>
              <span>•</span>
              <span>✨ Divine Love</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;