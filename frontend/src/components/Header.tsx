import React from 'react';
import { Home, MessageCircle, Info, Music, Menu, X } from 'lucide-react';

type Page = 'home' | 'chat' | 'about';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { key: 'home' as Page, label: 'Home', icon: Home },
    { key: 'chat' as Page, label: 'Divine Chat', icon: MessageCircle },
    { key: 'about' as Page, label: 'About', icon: Info },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative z-20 p-4">
      <nav className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg p-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Music className="w-8 h-8 text-amber-300 animate-pulse" />
              <h1 className="text-2xl font-bold text-white">
                Radha<span className="text-pink-300">♥</span>Krishna
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 bg-white/10 rounded-xl p-1">
              {navItems.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => handleNavigate(key)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === key
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{label}</span>
                </button>
              ))}
            </div>

            {/* Desktop Chant Button */}
            <button
              className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-pink-400 to-purple-400 px-4 py-2 rounded-lg text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => alert('Radhe Radhe 🙏\n\nHare Krishna Hare Krishna\nKrishna Krishna Hare Hare\nHare Rama Hare Rama\nRama Rama Hare Hare')}
            >
              <Music className="w-4 h-4" />
              <span className="text-sm font-medium">Chant Now</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/20">
              <div className="space-y-2">
                {navItems.map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => handleNavigate(key)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      currentPage === key
                        ? 'bg-white/20 text-white shadow-lg'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{label}</span>
                  </button>
                ))}
                
                {/* Mobile Chant Button */}
                <button
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-400 to-purple-400 px-4 py-3 rounded-lg text-white hover:shadow-lg transition-all duration-300 mt-4"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    alert('Radhe Radhe 🙏\n\nHare Krishna Hare Krishna\nKrishna Krishna Hare Hare\nHare Rama Hare Rama\nRama Rama Hare Hare');
                  }}
                >
                  <Music className="w-5 h-5" />
                  <span className="font-medium">Chant Now</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;