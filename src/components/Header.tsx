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
    
    // Pequeño delay para asegurar que el menú se cierre antes del scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 100; // Altura del header móvil
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const portfolioCategories = [
    { name: 'Editorial', id: 'editorial' },
    { name: 'Infantil', id: 'infantil' }, 
    { name: 'Viñetas', id: 'vinetas' },
    { name: 'Para tu marca', id: 'team-building' },
    { name: 'Personalización con IA', id: 'ia' },
    { name: 'Proyectos personales', id: 'proyectos-personales' }
  ];

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:block fixed top-0 right-0 h-screen w-64 z-50 flex flex-col" style={{ backgroundColor: '#be1622' }}>
        <div className="flex flex-col h-full p-6 pt-20 overflow-y-auto">
          {/* Ilustración en desktop (sin logo) */}
          <div className="mb-8 flex flex-col items-center">
            {/* Solo ilustración en desktop */}
            <Link to="/">
              <div className="w-48">
                <img 
                  src="/lovable-uploads/29e59049-4a70-48e0-9c96-557eff0b9c02.png" 
                  alt="Ilustración Mariatepinta" 
                  className="w-full h-auto object-contain cursor-pointer"
                />
              </div>
            </Link>
          </div>
          
          {/* Opciones del menú - separadas del logo */}
          <nav className="flex flex-col space-y-6 mb-auto">
            {/* Portfolio siempre desplegado */}
            <div className="relative">
              <div className="text-white text-left text-lg font-normal">
                QUÉ HAGO
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
                <a
                  href="https://www.instagram.com/benditarrutina/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/90 hover:text-white transition-colors text-sm"
                >
                  Bendita Rutina
                </a>
              </div>
            </div>
            
            <a 
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors text-left text-lg font-normal"
            >
              ¡HOLA!
            </a>
          </nav>

          {/* Redes sociales */}
          <div className="flex justify-center space-x-4 mb-6">
            <a href="https://www.instagram.com/mariatepinta/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mariatepinta/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://www.tiktok.com/@mariatepinta" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
              <img 
                src="/lovable-uploads/bb8002d5-0962-4d3a-9301-9603bec5426c.png" 
                alt="TikTok" 
                className="w-5 h-5 object-contain"
              />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs text-white/80">
              Copyright © 2025 Mariatepinta.<br />
              Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Version - Header más alto */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 px-4 py-8" style={{ backgroundColor: '#be1622' }}>
        <div className="flex items-center justify-between w-full">
          {/* Menú hamburguesa - izquierda */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        
          {/* Logo centrado */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/">
              <div className="w-40">
                <img 
                  src="/lovable-uploads/84f0becf-8cb0-4c0e-9769-54240476447c.png" 
                  alt="Mariatepinta" 
                  className="w-full h-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
            </Link>
          </div>
          
          {/* Espacio vacío para equilibrar */}
          <div className="w-10"></div>
        </div>
        
        {/* Menú desplegable móvil */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#be1622] p-4 select-none">
            <nav className="flex flex-col space-y-4">
              <div className="text-white font-normal text-lg select-none">QUÉ HAGO</div>
              <div className="ml-4 space-y-2">
                {portfolioCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => {
                      scrollToSection(category.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block text-white/90 hover:text-white transition-colors text-sm select-none"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              <div className="text-white font-normal text-lg select-none">MI ALTER EGO</div>
              <div className="ml-4 space-y-2">
                <a 
                  href="https://www.instagram.com/benditarrutina/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/90 hover:text-white transition-colors text-sm select-none"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Bendita Rutina
                </a>
              </div>
              
              <a 
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors font-normal text-lg select-none"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ¡HOLA!
              </a>
              
              {/* Redes sociales en móvil - alineadas a la izquierda */}
              <div className="flex space-x-4 pt-4">
                <a href="https://www.instagram.com/mariatepinta/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/in/mariatepinta/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.tiktok.com/@mariatepinta" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
                  <img 
                    src="/lovable-uploads/bb8002d5-0962-4d3a-9301-9603bec5426c.png" 
                    alt="TikTok" 
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
