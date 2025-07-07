
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const portfolioCategories = [
    'Editorial',
    'Infantil', 
    'Viñetas',
    'Ia',
    'Team building',
    'Visual thinking'
  ];

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:block fixed top-0 right-0 h-full w-64 z-50 flex flex-col" style={{ backgroundColor: '#be1622' }}>
        <div className="flex flex-col h-full p-6">
          {/* Logo blanco en la banda roja - clickable para ir a home */}
          <div className="mb-16 flex justify-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/84f0becf-8cb0-4c0e-9769-54240476447c.png" 
                alt="Mariatepinta" 
                className="h-16 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
          
          {/* Opciones del menú - separadas del logo */}
          <nav className="flex flex-col space-y-6 mb-auto">
            {/* Portfolio siempre desplegado */}
            <div className="relative">
              <div className="text-white text-left text-lg font-normal">
                PORTFOLIO
              </div>
              
              {/* Submenu siempre visible - primera letra mayúscula */}
              <div className="mt-2 ml-4 space-y-3">
                {portfolioCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => scrollToSection('portfolio')}
                    className="block text-white/90 hover:text-white transition-colors text-sm"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <Link 
              to="/about"
              className="text-white hover:text-gray-200 transition-colors text-left text-lg font-normal"
            >
              SOBRE MÍ
            </Link>
            <Link 
              to="/contact"
              className="text-white hover:text-gray-200 transition-colors text-left text-lg font-normal"
            >
              CONTACTO
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
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.965 1.404-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.688 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Version - Banda más grande */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-6" style={{ backgroundColor: '#be1622', height: '150px' }}>
        <div className="flex items-center justify-between h-full">
          {/* Logo clickable para ir a home */}
          <Link to="/">
            <img 
              src="/lovable-uploads/84f0becf-8cb0-4c0e-9769-54240476447c.png" 
              alt="Mariatepinta" 
              className="h-16 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>
          
          {/* Menú hamburguesa */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Menú desplegable móvil */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#be1622] border-t border-white/20 p-4">
            <nav className="flex flex-col space-y-4">
              <div className="text-white font-normal text-lg">PORTFOLIO</div>
              <div className="ml-4 space-y-2">
                {portfolioCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      scrollToSection('portfolio');
                      setIsMobileMenuOpen(false);
                    }}
                    className="block text-white/90 hover:text-white transition-colors text-sm"
                  >
                    {category}
                  </button>
                ))}
              </div>
              <Link 
                to="/about"
                className="text-white hover:text-gray-200 transition-colors font-normal text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                SOBRE MÍ
              </Link>
              <Link 
                to="/contact"
                className="text-white hover:text-gray-200 transition-colors font-normal text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACTO
              </Link>
              
              {/* Redes sociales en móvil */}
              <div className="flex justify-center space-x-4 pt-4 border-t border-white/20">
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
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.965 1.404-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.688 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
