import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import LottieAnimation from '../components/LottieAnimation';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/ui/collapsible";
import ContactModal from '../components/ContactModal';

const Index = () => {
  const navigate = useNavigate();
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Initialize all sections as open
  useEffect(() => {
    const initialState: { [key: string]: boolean } = {};
    portfolioSections.forEach(section => {
      initialState[section.id] = true;
    });
    setOpenSections(initialState);
  }, []);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Detectar scroll para mostrar el botón flotante
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowFloatingButton(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Todas las imágenes del portfolio organizadas por categorías
  const portfolioSections = [
      {
        id: 'editorial',
        title: 'Editorial',
        images: [
          { src: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop', title: 'Placeholder 1', description: '' },
          { src: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=300&fit=crop', title: 'Placeholder 2', description: '' },
          { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop', title: 'Placeholder 3', description: '' }
      ]
    },
    {
      id: 'infantil',
      title: 'Infantil',
      images: [
        { src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=300&fit=crop', title: 'Placeholder 1', description: 'Imagen temporal' },
        { src: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=300&h=300&fit=crop', title: 'Placeholder 2', description: 'Imagen temporal' },
        { src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=300&fit=crop', title: 'Placeholder 3', description: 'Imagen temporal' }
      ]
    },
    {
      id: 'vinetas',
      title: 'Viñetas',
      images: [
        { src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=500', title: 'Viñeta', description: 'Una historia dibujada con gracia' },
        { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500', title: 'Viñeta', description: 'Momentos cotidianos con humor' },
        { src: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=500', title: 'Viñeta', description: 'Expresiones que hablan solas' },
        { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500', title: 'Viñeta', description: 'Humor gráfico' },
        { src: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500', title: 'Viñeta', description: 'Reflexiones visuales' },
        { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500', title: 'Viñeta', description: 'Historias cortas' },
        { src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=500', title: 'Viñeta', description: 'Una historia dibujada con gracia' },
        { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500', title: 'Viñeta', description: 'Momentos cotidianos con humor' },
        { src: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=500', title: 'Viñeta', description: 'Expresiones que hablan solas' },
      ]
    },
    {
      id: 'ia',
      title: 'IA',
      images: [
        { src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500', title: 'IA', description: 'Robots con personalidad' },
        { src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500', title: 'IA', description: 'Futuro dibujado a mano' },
        { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500', title: 'IA', description: 'Tecnología humanizada' },
        { src: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=500', title: 'IA', description: 'Ciencia ficción' },
        { src: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500', title: 'IA', description: 'Inteligencia visual' },
        { src: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=500', title: 'IA', description: 'Mundo digital' },
        { src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500', title: 'IA', description: 'Robots con personalidad' },
        { src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500', title: 'IA', description: 'Futuro dibujado a mano' },
        { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500', title: 'IA', description: 'Tecnología humanizada' },
      ]
    },
    {
      id: 'team-building',
      title: 'Team Building',
      images: [
        { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500', title: 'Equipo', description: 'Dinámicas grupales ilustradas' },
        { src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500', title: 'Equipo', description: 'Colaboración visual' },
        { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500', title: 'Equipo', description: 'Unión en trazos' },
        { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500', title: 'Equipo', description: 'Trabajo en equipo' },
        { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500', title: 'Equipo', description: 'Sinergia grupal' },
        { src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500', title: 'Equipo', description: 'Conexión humana' },
        { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500', title: 'Equipo', description: 'Dinámicas grupales ilustradas' },
        { src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500', title: 'Equipo', description: 'Colaboración visual' },
        { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500', title: 'Equipo', description: 'Unión en trazos' },
      ]
    },
    {
      id: 'visual-thinking',
      title: 'Visual Thinking',
      images: [
        { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500', title: 'Visual', description: 'Ideas complejas, dibujos simples' },
        { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500', title: 'Visual', description: 'Conceptos visualizados' },
        { src: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500', title: 'Visual', description: 'Pensamiento en imágenes' },
        { src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500', title: 'Visual', description: 'Mapas conceptuales' },
        { src: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500', title: 'Visual', description: 'Esquemas creativos' },
        { src: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=500', title: 'Visual', description: 'Diagramas únicos' },
        { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500', title: 'Visual', description: 'Ideas complejas, dibujos simples' },
        { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500', title: 'Visual', description: 'Conceptos visualizados' },
        { src: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500', title: 'Visual', description: 'Pensamiento en imágenes' },
      ]
    }
  ];

  const scrollHorizontal = (containerId: string, direction: 'left' | 'right') => {
    const container = document.getElementById(containerId);
    if (container) {
      const cardWidth = container.offsetWidth / 3; // Width of one card (1/3 of container)
      container.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-white md:pr-64 pt-48 md:pt-0">
      <Header />

      {/* Floating Contact Button - Solo desktop */}
      <div className={`fixed left-6 top-24 z-50 hidden md:block transition-all duration-500 ease-out ${
        showFloatingButton 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <button
          onClick={handleContactClick}
          className="w-16 h-16 bg-[#be1622] rounded-full flex items-center justify-center text-white font-poppins font-medium text-sm shadow-lg hover:bg-[#a01420] hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
          aria-label="Ir a contacto"
        >
          ¡Hola!
        </button>
      </div>

      {/* Hero Section */}
      <section id="portfolio" className="relative min-h-screen flex flex-col items-center justify-center bg-white pt-4 md:pt-20 pb-12">
        {/* Logo - hidden on mobile */}
        <div className="mb-8 hidden md:flex justify-center">
          <img 
            src="/lovable-uploads/e27c95ab-eb40-4ab3-ac43-b70d39b9ed96.png" 
            alt="Mariatepinta" 
            className="h-auto w-64 lg:w-80"
          />
        </div>

        {/* Circle ¡Hola! button - only desktop */}
        <div className="hidden md:flex absolute right-80 top-1/2 transform -translate-y-1/2 z-20">
          <div 
            className="bg-red-600 text-white rounded-full w-32 h-32 flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors shadow-lg"
            onClick={() => setIsContactModalOpen(true)}
          >
            <span className="text-lg font-bold">¡Hola!</span>
          </div>
        </div>

        {/* Lottie Animation - llena toda la pantalla hasta la banda roja */}
        <div className="w-full mb-4 md:mb-16 -mx-4 md:-mx-64">
          <LottieAnimation className="w-full h-auto" />
        </div>

        {/* Portfolio Sections */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-12 md:space-y-8">
          {portfolioSections.map((section, sectionIndex) => (
            <div key={section.id} className="space-y-4">
              {/* Section Title - visible on desktop only */}
              <h2 id={section.id} className="hidden md:block text-lg font-normal text-black text-left font-poppins underline decoration-[#be1622] decoration-2 underline-offset-4">
                {section.title}
              </h2>

              {/* Desktop layout with horizontal scroll */}
              <div className="hidden md:block">
                {/* Navigation arrows positioned above the photos */}
                <div className="relative">
                  <button
                    onClick={() => scrollHorizontal(`scroll-container-${sectionIndex}`, 'left')}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-[#be1622] rounded-full flex items-center justify-center hover:bg-[#a01420] transition-colors duration-200"
                  >
                    <ChevronLeft size={16} className="text-white" />
                  </button>
                  
                  <button
                    onClick={() => scrollHorizontal(`scroll-container-${sectionIndex}`, 'right')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-[#be1622] rounded-full flex items-center justify-center hover:bg-[#a01420] transition-colors duration-200"
                  >
                    <ChevronRight size={16} className="text-white" />
                  </button>

                  <div 
                    id={`scroll-container-${sectionIndex}`}
                    className="flex gap-1 overflow-x-auto scrollbar-hide scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {section.images.map((image, index) => (
                      <div key={index} className="group cursor-pointer flex-shrink-0 w-1/3 min-w-0">
                        <div className="relative overflow-hidden bg-gray-100 aspect-square">
                          <img 
                            src={image.src} 
                            alt={image.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/80 w-full h-full flex items-center justify-center backdrop-blur-sm">
                              <div className="p-4 max-w-xs text-center">
                                 <h3 className="font-normal text-black mb-2">{image.title}</h3>
                                 {section.id !== 'editorial' && <p className="text-sm text-black/70">{image.description}</p>}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile layout with collapsible sections */}
              <div className="md:hidden">
                <Collapsible
                  open={openSections[section.id]}
                  onOpenChange={() => toggleSection(section.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-normal text-black font-poppins underline decoration-[#be1622] decoration-2 underline-offset-4 flex-1">
                      {section.title}
                    </h2>
                    <CollapsibleTrigger className="p-2">
                      <span className="sr-only">
                        {openSections[section.id] ? 'Colapsar' : 'Expandir'} sección {section.title}
                      </span>
                      <ChevronDown 
                        size={20} 
                        className={`text-[#be1622] transition-transform duration-200 ${
                          openSections[section.id] ? 'rotate-180' : ''
                        }`}
                      />
                    </CollapsibleTrigger>
                  </div>
                  
                  <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="grid grid-cols-2 gap-1">
                      {section.images.map((image, index) => (
                        <div key={index} className="group cursor-pointer">
                          <div className="relative overflow-hidden bg-gray-100 aspect-square">
                            <img 
                              src={image.src} 
                              alt={image.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="bg-white/80 w-full h-full flex items-center justify-center backdrop-blur-sm">
                                <div className="p-4 max-w-xs text-center">
                                   <h3 className="font-normal text-black mb-2">{image.title}</h3>
                                   {section.id !== 'editorial' && <p className="text-sm text-black/70">{image.description}</p>}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
