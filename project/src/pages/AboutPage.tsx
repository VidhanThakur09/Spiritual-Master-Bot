import React from 'react';
import { Heart, Music, Sparkles, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Who Are Radha & Krishna?
            <span className="block text-3xl md:text-4xl mt-2">🌸🦚</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* About Radha & Krishna */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-lg space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="w-8 h-8 text-pink-400 animate-pulse" />
              <h2 className="text-2xl font-bold text-white">Divine Love Incarnate</h2>
            </div>
            
            <p className="text-white/90 leading-relaxed">
              Radha and Krishna embody the highest form of divine love. Radha Ji represents pure devotion 
              and selfless surrender, while Krishna represents the supreme beauty and playful joy of God.
            </p>
            
            <p className="text-white/90 leading-relaxed">
              Their pastimes in Vrindavan—on the banks of Yamuna, under the Kadamba trees, with peacocks 
              dancing and the sound of Krishna's flute filling the air—remind us of the eternal rasa, 
              the essence of devotion and love.
            </p>
          </div>

          {/* About This Website */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-lg space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="w-8 h-8 text-yellow-400 animate-spin" />
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            
            <p className="text-white/90 leading-relaxed">
              This chatbot is not Radha or Krishna, but a humble guide to help you reflect on their 
              divine pastimes, chant their holy names, and remember their love.
            </p>
            
            <p className="text-white/90 leading-relaxed">
              Through gentle conversations and spiritual reminders, we hope to kindle the flame of 
              devotion in your heart and bring you closer to the eternal Vrindavan within.
            </p>
          </div>
        </div>

        {/* Spiritual Teachings */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white text-center">Sacred Teachings</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Music,
                title: "The Flute's Call",
                content: "Krishna's flute represents the divine call to every soul. Its sweet melody awakens the dormant love in our hearts.",
                color: "from-blue-400 to-purple-400"
              },
              {
                icon: Heart,
                title: "Radha's Devotion",
                content: "Radha's love teaches us complete surrender. Her devotion shows us how to love without expecting anything in return.",
                color: "from-pink-400 to-red-400"
              },
              {
                icon: Star,
                title: "Vrindavan's Essence",
                content: "Vrindavan exists not just as a place, but as a state of consciousness - pure love and devotion to the divine.",
                color: "from-yellow-400 to-orange-400"
              }
            ].map((teaching, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${teaching.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <teaching.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{teaching.title}</h3>
                <p className="text-white/80 leading-relaxed">{teaching.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divine Quote */}
        <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-8 border border-pink-300/30 shadow-xl text-center">
          <blockquote className="text-2xl md:text-3xl text-white italic leading-relaxed mb-6">
            "Where there is love, there is Krishna. Where there is devotion, there is Radha. 
            Where both unite in a heart, there is Vrindavan."
          </blockquote>
          <p className="text-pink-300 font-semibold">— Ancient Wisdom</p>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4">Begin Your Spiritual Journey</h3>
          <p className="text-white/90 mb-6 leading-relaxed">
            Let the divine love of Radha-Krishna illuminate your path. Start with a simple chant, 
            a moment of meditation, or a conversation with our spiritual guide.
          </p>
          <div className="text-4xl">🙏 ॐ 🌸</div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;