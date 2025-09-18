import React from 'react';

const FloatingElements: React.FC = () => {
  const feathers = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 15 + Math.random() * 10,
    x: Math.random() * 100,
    size: 20 + Math.random() * 30,
  }));

  const lotuses = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    delay: Math.random() * 3,
    duration: 12 + Math.random() * 8,
    x: Math.random() * 100,
    size: 25 + Math.random() * 20,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
      {/* Floating Peacock Feathers */}
      {feathers.map((feather) => (
        <div
          key={`feather-${feather.id}`}
          className="absolute animate-float-up opacity-60"
          style={{
            left: `${feather.x}%`,
            animationDelay: `${feather.delay}s`,
            animationDuration: `${feather.duration}s`,
            fontSize: `${feather.size}px`,
          }}
        >
          🦚
        </div>
      ))}

      {/* Floating Lotus Petals */}
      {lotuses.map((lotus) => (
        <div
          key={`lotus-${lotus.id}`}
          className="absolute animate-float-diagonal opacity-50"
          style={{
            left: `${lotus.x}%`,
            animationDelay: `${lotus.delay}s`,
            animationDuration: `${lotus.duration}s`,
            fontSize: `${lotus.size}px`,
          }}
        >
          🌸
        </div>
      ))}

      {/* Divine Sparkles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        >
          ✨
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;