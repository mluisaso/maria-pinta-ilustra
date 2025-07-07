
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Linkedin, Menu, X } from 'lucide-react';

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
    { name: 'Editorial', id: 'editorial' },
    { name: 'Infantil', id: 'infantil' }, 
    { name: 'Viñetas', id: 'vinetas' },
    { name: 'IA', id: 'ia' },
    { name: 'Team building', id: 'team-building' },
    { name: 'Visual thinking', id: 'visual-thinking' }
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
                    key={category.name}
                    onClick={() => scrollToSection(category.id)}
                    className="block text-white/90 hover:text-white transition-colors text-sm"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* MI ALTER EGO siempre desplegado */}
            <div className="relative">
              <div className="text-white text-left text-lg font-normal">
                MI ALTER EGO
              </div>
              
              {/* Submenu siempre visible */}
              <div className="mt-2 ml-4 space-y-3">
                <Link
                  to="/bendita-rutina"
                  className="block text-white/90 hover:text-white transition-colors text-sm"
                >
                  Bendita Rutina
                </Link>
              </div>
            </div>
            
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
              <Instagram size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              <img 
                src="/lovable-uploads/bb8002d5-0962-4d3a-9301-9603bec5426c.png" 
                alt="Social Media" 
                className="w-5 h-5 object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Version - Header más alto */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 px-4 py-8" style={{ backgroundColor: '#be1622' }}>
        <div className="flex items-center justify-between">
          {/* Logo alineado a la izquierda - tamaño reducido */}
          <Link to="/">
            <img 
              src="/lovable-uploads/84f0becf-8cb0-4c0e-9769-54240476447c.png" 
              alt="Mariatepinta" 
              className="h-6 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>
          
          {/* Menú hamburguesa */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Menú desplegable móvil */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#be1622] p-4">
            <nav className="flex flex-col space-y-4">
              <div className="text-white font-normal text-lg">PORTFOLIO</div>
              <div className="ml-4 space-y-2">
                {portfolioCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => {
                      scrollToSection(category.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block text-white/90 hover:text-white transition-colors text-sm"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              <div className="text-white font-normal text-lg">MI ALTER EGO</div>
              <div className="ml-4 space-y-2">
                <Link 
                  to="/bendita-rutina"
                  className="block text-white/90 hover:text-white transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Bendita Rutina
                </Link>
              </div>
              
              <Link 
                to="/contact"
                className="text-white hover:text-gray-200 transition-colors font-normal text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACTO
              </Link>
              
              {/* Redes sociales en móvil - alineadas a la izquierda */}
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-white hover:text-gray-200 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-white hover:text-gray-200 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-white hover:text-gray-200 transition-colors">
                  <img 
                    src="/lovable-uploads/bb8002d5-0962-4d3a-9301-9603bec5426c.png" 
                    alt="Social Media" 
                    className="w-5 h-5 object-contain"
                  />
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
