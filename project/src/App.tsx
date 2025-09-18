import React, { useState } from 'react';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ChatPage from './pages/ChatPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';

type Page = 'home' | 'chat' | 'about';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage onNavigate={setCurrentPage} />;
      case 'chat':
        return <ChatPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-br from-sky-400 to-blue-500 ">
      {/* Background Stars */}
      <div className="fixed inset-0 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <FloatingElements />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />
        <main className="flex-1">
          {renderPage()}
        </main>
        <Footer />
      </div>
      {/* Footer */}
        <footer className=" bottom-0 w-full z-20 p-4 pt-8">
          <div className="text-center text-white/80 text-sm">
            Made with ❤️, blessing, and a touch of Guru Guranga
          </div>
        </footer>
    </div>
  );
}

export default App;