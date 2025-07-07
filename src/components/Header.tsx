
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:block fixed top-0 right-0 h-full w-64 z-50 flex flex-col" style={{ backgroundColor: '#be1622' }}>
        <div className="flex flex-col h-full p-6">
          {/* Logo blanco en la banda roja - clickable para ir a home */}
          <div className="mb-8 flex justify-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/84f0becf-8cb0-4c0e-9769-54240476447c.png" 
                alt="Mariatepinta" 
                className="h-16 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
          
          {/* Opciones del menú */}
          <nav className="flex flex-col space-y-6 mb-auto">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-white hover:text-gray-200 transition-colors font-medium text-left text-lg"
            >
              Portfolio
            </button>
            <Link 
              to="/about"
              className="text-white hover:text-gray-200 transition-colors font-medium text-left text-lg"
            >
              Sobre mí
            </Link>
            <Link 
              to="/contact"
              className="text-white hover:text-gray-200 transition-colors font-medium text-left text-lg"
            >
              Contacto
            </Link>
          </nav>

          {/* Redes sociales */}
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.08v5.73a3.87 3.87 0 01-3.14 3.78 3.77 3.77 0 01-4.85-3.5A4.09 4.09 0 019.8 4.1a4.1 4.1 0 01.31-.05 4.47 4.47 0 01.2-1.94 6.27 6.27 0 00-2.13.35 6.06 6.06 0 00-4.08 5.78 5.84 5.84 0 007.66 5.55 5.89 5.89 0 004.13-5.55v-2.8a8.14 8.14 0 004.77 1.2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-4" style={{ backgroundColor: '#be1622' }}>
        <div className="flex items-center justify-between">
          {/* Logo clickable para ir a home */}
          <Link to="/">
            <img 
              src="/lovable-uploads/84f0becf-8cb0-4c0e-9769-54240476447c.png" 
              alt="Mariatepinta" 
              className="h-8 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>
          
          {/* Navigation links */}
          <div className="flex space-x-4 text-sm">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-white hover:text-gray-200 transition-colors font-medium"
            >
              Portfolio
            </button>
            <Link 
              to="/about"
              className="text-white hover:text-gray-200 transition-colors font-medium"
            >
              Sobre mí
            </Link>
            <Link 
              to="/contact"
              className="text-white hover:text-gray-200 transition-colors font-medium"
            >
              Contacto
            </Link>
          </div>
          
          {/* Social icons */}
          <div className="flex space-x-2">
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.08v5.73a3.87 3.87 0 01-3.14 3.78 3.77 3.77 0 01-4.85-3.5A4.09 4.09 0 019.8 4.1a4.1 4.1 0 01.31-.05 4.47 4.47 0 01.2-1.94 6.27 6.27 0 00-2.13.35 6.06 6.06 0 00-4.08 5.78 5.84 5.84 0 007.66 5.55 5.89 5.89 0 004.13-5.55v-2.8a8.14 8.14 0 004.77 1.2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
