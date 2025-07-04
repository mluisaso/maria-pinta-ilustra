
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // Si no estamos en la página principal, navegar primero
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img 
              src="/lovable-uploads/38261183-3067-4b9c-b722-fbf329309b63.png" 
              alt="Mariatepinta" 
              className="h-8 md:h-10"
            />
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-red-500 transition-colors font-medium"
            >
              Portfolio
            </button>
            <Link 
              to="/about"
              className="text-gray-700 hover:text-red-500 transition-colors font-medium"
            >
              Sobre mí
            </Link>
            <Link 
              to="/contact"
              className="text-gray-700 hover:text-red-500 transition-colors font-medium"
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-gray-700 hover:text-red-500 transition-colors font-medium"
              >
                Portfolio
              </button>
              <Link 
                to="/about"
                className="text-left text-gray-700 hover:text-red-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre mí
              </Link>
              <Link 
                to="/contact"
                className="text-left text-gray-700 hover:text-red-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
