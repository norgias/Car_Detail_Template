import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: 'home' | 'testimonials';
  onNavigate: (page: 'home' | 'testimonials') => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="text-2xl font-bold text-yellow-400 cursor-pointer"
            style={{ fontFamily: "'Russo One', sans-serif" }}
            onClick={() => onNavigate('home')}
          >
            VROOM AUTO DETAIL
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-white hover:text-yellow-400 transition-colors ${
                currentPage === 'home' ? 'text-yellow-400' : ''
              }`}
            >
              Home
            </button>
            {currentPage === 'home' && (
              <>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  Contact
                </button>
              </>
            )}
            <button
              onClick={() => onNavigate('testimonials')}
              className={`text-white hover:text-yellow-400 transition-colors ${
                currentPage === 'testimonials' ? 'text-yellow-400' : ''
              }`}
            >
              Testimonials
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/98 border-t border-yellow-500/20">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => {
                onNavigate('home');
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 text-white hover:text-yellow-400 transition-colors ${
                currentPage === 'home' ? 'text-yellow-400' : ''
              }`}
            >
              Home
            </button>
            {currentPage === 'home' && (
              <>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-3 py-2 text-white hover:text-yellow-400 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left px-3 py-2 text-white hover:text-yellow-400 transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-3 py-2 text-white hover:text-yellow-400 transition-colors"
                >
                  Contact
                </button>
              </>
            )}
            <button
              onClick={() => {
                onNavigate('testimonials');
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 text-white hover:text-yellow-400 transition-colors ${
                currentPage === 'testimonials' ? 'text-yellow-400' : ''
              }`}
            >
              Testimonials
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
