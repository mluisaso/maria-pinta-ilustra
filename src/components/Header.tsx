
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
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
  };

  return (
    <div className="fixed top-0 right-0 h-full w-16 z-50 flex flex-col items-center justify-center space-y-8" style={{ backgroundColor: '#be1622' }}>
      {/* Logo blanco en la banda roja */}
      <div className="mb-8">
        <img 
          src="/lovable-uploads/84f0becf-8cb0-4c0e-9769-54240476447c.png" 
          alt="Mariatepinta" 
          className="h-12 w-auto"
        />
      </div>
      
      {/* Opciones del menú verticalmente */}
      <nav className="flex flex-col items-center space-y-6">
        <button 
          onClick={() => scrollToSection('portfolio')}
          className="text-white hover:text-gray-200 transition-colors font-medium transform -rotate-90 whitespace-nowrap text-sm"
        >
          Portfolio
        </button>
        <Link 
          to="/about"
          className="text-white hover:text-gray-200 transition-colors font-medium transform -rotate-90 whitespace-nowrap text-sm"
        >
          Sobre mí
        </Link>
        <Link 
          to="/contact"
          className="text-white hover:text-gray-200 transition-colors font-medium transform -rotate-90 whitespace-nowrap text-sm"
        >
          Contacto
        </Link>
      </nav>
    </div>
  );
};

export default Header;
