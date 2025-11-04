import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import LottieAnimation from '../components/LottieAnimation';
import ContactModal from '../components/ContactModal';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/ui/collapsible";
import { Player } from '@lottiefiles/react-lottie-player';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ImageItem {
  src: string;
  title: string;
  description: string;
  type?: 'image' | 'lottie';
}

const Index = () => {
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLottieLoaded, setIsLottieLoaded] = useState(false);
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isCustomDrawingModalOpen, setIsCustomDrawingModalOpen] = useState(false);
  const [scrollStates, setScrollStates] = useState<{ [key: string]: { canScrollLeft: boolean; canScrollRight: boolean } }>({});

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

  // Detectar scroll para mostrar los botones flotantes
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      setShowFloatingButton(scrollY > 300);
      // Mostrar "Volver arriba" cuando se esté en la parte inferior del 80% de la página
      setShowBackToTop(scrollY > windowHeight * 0.5 && scrollY + windowHeight >= documentHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Evitar parpadeo en la carga inicial
  useEffect(() => {
    setIsLottieLoaded(true);
  }, []);

  // Todas las imágenes del portfolio organizadas por categorías
  const portfolioSections: { id: string; title: string; images: ImageItem[] }[] = [
    {
      id: 'editorial',
      title: 'Editorial',
      images: [
        { src: '/lovable-uploads/9215e25a-a54a-4515-892f-3508fcba19c2.png', title: 'Cosmopolitan', description: '' },
        { src: '/lovable-uploads/a87ac013-0aec-48a1-a067-4ffa4d6906e6.png', title: 'Buenavida', description: 'El País' },
        { src: '/lovable-uploads/fe5a575c-bbd6-4738-a9ae-7409a7c81bda.png', title: 'Renfe', description: '' },
        { src: '/lovable-uploads/40bddeb8-fe16-4370-96ac-4337ad6cfd4a.png', title: 'Telva', description: '' },
        { src: '/lovable-uploads/2553f794-e0ab-4c19-a506-864771b8628e.png', title: 'Lifestyle', description: 'La Razón' },
        { src: '/lovable-uploads/c30215de-34e4-488b-bcb3-6895af63ea01.png', title: 'Lifestyle', description: 'La Razón' },
        { src: '/lovable-uploads/c3293026-934e-46b8-97ae-87426fa24f74.png', title: 'Cosmopolitan', description: '' },
        { src: '/lovable-uploads/c156198e-405c-4268-b9e5-175b7f575677.png', title: 'Las estrellitas de Malekin', description: 'Libro infantil' },
        { src: '/lovable-uploads/47188929-30bb-4254-b206-adca732a6331.png', title: 'Alois', description: 'Libro ilustrado' },
        { src: '/lovable-uploads/2fc5a8a3-e9f5-4c46-bf37-5e8be56aabab.png', title: 'Banco Santander', description: '' },
        { src: '/lovable-uploads/de6dafae-05d9-4ee9-8104-1a5df337ca2d.png', title: 'Banco Santander', description: '' },
        { src: '/lovable-uploads/f992bc67-3c5c-41d4-a9be-45c2dedeea35.png', title: 'Planeta', description: 'Equidieta' },
        { src: '/lovable-uploads/fcd90193-269c-44eb-9c5a-fce463580757.png', title: 'Planeta', description: 'Armonía de Hogar' },
        { src: '/lovable-uploads/6b6dd0b6-3077-48c8-a502-3fd2b82541d4.png', title: 'Planeta', description: 'Cómo llegar joven a viejo' },
        { src: '/lovable-uploads/82e91a67-2fe8-4690-bc02-92f92849eab5.png', title: 'Planeta', description: 'Toma las riendas de tu salud' },
        
      ]
    },
    {
      id: 'infantil',
      title: 'Infantil',
      images: [
        { src: '/lovable-uploads/16b71bc6-e77e-4c39-b5d6-c01bb272dd5c.png', title: '', description: '' },
        { src: '/lovable-uploads/2247035a-f2a8-47ec-8acb-e86a76d7c8c2.png', title: '', description: '' },
        { src: '/lovable-uploads/6f34d969-10be-4b2d-b4b5-7226766d3238.png', title: '', description: '' },
        { src: '/lovable-uploads/e0e1331f-023b-4c56-8217-292ec90afb7a.png', title: '', description: '' },
        { src: '/lovable-uploads/46eb03b3-43d3-4e91-aa2c-bc302afb974d.png', title: '', description: '' },
        { src: '/lovable-uploads/ee0795ab-d68e-4944-8626-90283bee013a.png', title: '', description: '' },
        { src: '/lovable-uploads/d7ebac4b-8956-41d9-860a-3428aba5baf1.png', title: '', description: '' },
        { src: '/lovable-uploads/273877fe-4229-408e-a266-9ca348799652.png', title: '', description: '' },
        { src: '/lovable-uploads/9111f584-d8c5-4127-a2ea-943c83abec57.png', title: '', description: '' },
        { src: '/lovable-uploads/93769978-c658-47ca-8eb1-f3ade0f9a771.png', title: '', description: '' },
      ]
    },
    {
      id: 'vinetas',
      title: 'Viñetas',
      images: [
        { src: '/lovable-uploads/af6fe3e8-731b-42cc-916f-ec30191c88f2.png', title: '', description: '' },
        { src: '/lovable-uploads/43b7775c-5b62-4e2e-9bb9-29005cb6c74f.png', title: '', description: '' },
        { src: '/lovable-uploads/be52a4a3-d4f6-49dc-9bbe-2eeb96b6ebf2.png', title: '', description: '' },
        { src: '/lovable-uploads/af6f2cdc-cd6a-444e-a85f-20414dd904f0.png', title: '', description: '' },
        { src: '/lovable-uploads/652b5821-7047-496d-940c-19b294d72e9d.png', title: '', description: '' },
        { src: '/lovable-uploads/3764098a-b9ec-49a6-9bfb-09ebf115315a.png', title: '', description: '' },
        { src: '/lovable-uploads/91412baa-26aa-4773-8624-16f876fcf788.png', title: '', description: '' },
        { src: '/lovable-uploads/4bbeb368-9d91-49ef-90a5-aa5728e1d6ba.png', title: '', description: '' },
        { src: '/lovable-uploads/6eb93044-004e-4d9b-8bc8-091527e781b7.png', title: '', description: '' },
        { src: '/lovable-uploads/776614fa-73b7-4c84-95ef-61845f90a4d7.png', title: '', description: '' },
        { src: '/lovable-uploads/40341b68-73b7-49b5-bc51-f7a19a99fd11.png', title: '', description: '' },
      ]
    },
    {
      id: 'team-building',
      title: 'Para tu marca',
      images: [
        // Primeras 2 animaciones Lottie
        { src: 'lottie:https://lottie.host/d621c91a-d410-45a2-873d-258fe7517caf/TQ1MQIWlDj.json', title: 'Firma animada', description: 'Correos personalizados' },
        { src: 'lottie:https://lottie.host/35cee8a6-3c2b-4d7e-9361-53a2955bcbd8/S3eks5Jr7X.json', title: 'Firma animada', description: 'Correos personalizados' },
        
        { src: '/lovable-uploads/c6b5df98-2727-437c-9509-7a3a5cdf6ae0.png', title: 'Equipo personalizado', description: 'Contenido para\nredes/imprimible' },
        { src: '/lovable-uploads/987c74e8-f662-44d1-9ef8-b271bd251bfb.png', title: 'Equipo personalizado', description: 'Contenido para\nredes/imprimible' },
        { src: '/lovable-uploads/35691c1b-2efc-4c49-aefa-e2fd06f7d3c5.png', title: 'Equipo personalizado', description: 'Contenido para\nredes/imprimible' },
        { src: '/lovable-uploads/fab72f2e-11bb-4fea-8e5c-d403f4f617d5.png', title: 'Equipo personalizado', description: 'Contenido para\nredes/imprimible' },
        { src: '/lovable-uploads/854602ed-4c4b-4b2f-ad85-dea3fffc16be.png', title: 'Equipo personalizado', description: 'Contenido para\nredes/imprimible' },
        { src: '/lovable-uploads/fbd6b6cc-4ec5-4160-8f5a-5edcb7ec9856.png', title: 'Equipo personalizado', description: 'Contenido para\nredes/imprimible' },
        { src: '/lovable-uploads/4aad7615-de13-409b-ac5a-0827db0af510.png', title: 'Equipo personalizado', description: 'Contenido para\nredes/imprimible' },
        
        // Nuevas imágenes de Brooklyn Fitboxing
        { src: '/lovable-uploads/efb2a663-e081-4388-9bc7-c4186af7689b.png', title: 'Brooklyn Fitboxing', description: 'Sorteo en RRSS' },
        { src: '/lovable-uploads/06ea573e-0c0a-4de3-b975-e8ad7bdf0d75.png', title: 'Brooklyn Fitboxing', description: 'Sorteo en RRSS' },
        
        // Últimas 2 animaciones Lottie al final
        { src: 'lottie:https://lottie.host/11b9282d-92f1-4e6f-8566-b355232d7c3a/yT9FBK7rYM.json', title: 'Firma animada', description: 'Correos personalizados' },
        { src: 'lottie:https://lottie.host/0d6b6fc6-3e3f-4c64-99da-f3aba070d6dc/g8TjHsAQKv.json', title: 'Firma animada', description: 'Correos personalizados' },
      ]
    },
    {
      id: 'ia',
      title: 'Personalización con IA',
      images: [
        { src: '/lovable-uploads/bab3a667-ae55-4bf3-b15f-69b09134d712.png', title: 'IA', description: 'Robots con personalidad' },
        { src: '/lovable-uploads/f24ba6cd-1c32-432a-b26a-77d93a529259.png', title: 'IA', description: 'Futuro dibujado a mano' },
        { src: '/lovable-uploads/950c5cba-5c71-4bd4-9dbe-92bf9378cc03.png', title: 'IA', description: 'Tecnología humanizada' },
        { src: '/lovable-uploads/a9e262e4-7fa1-4a72-88b1-d333da84764c.png', title: 'IA', description: 'Ciencia ficción' },
        { src: '/lovable-uploads/ff564f31-ef86-44b1-8029-f9c718cb089e.png', title: 'IA', description: 'Inteligencia visual' },
        { src: '/lovable-uploads/eb48130d-d8df-4b7f-a088-dd618e939fc2.png', title: 'IA', description: 'Mundo digital' },
      ]
    },
    {
      id: 'proyectos-personales',
      title: 'Proyectos personales',
      images: [
        { src: '/lovable-uploads/0ccfe8e6-a5f4-44b4-b585-496b71e0d284.png', title: 'Invitación de boda', description: '' },
        { src: '/lovable-uploads/66a48fc2-0af1-4655-b1a4-4f54383dc6c2.png', title: 'Asana', description: '' },
        { src: '/lovable-uploads/9c55eafc-4689-4e57-9d43-45c7d8e6c34c.png', title: 'Homenaje a Bowie', description: '' },
        { src: '/lovable-uploads/53be8d9e-27e8-4e95-baf5-d5412e185286.png', title: 'Decadencia', description: '' },
        { src: '/lovable-uploads/casaOlivia.jpg', title: 'Casa particular', description: 'Ilustración a partir de foto para postales' },
        { src: '/lovable-uploads/ef37dc2b-d6c1-4dbb-972c-09cec5a05927.png', title: 'Plastilina', description: '' },
        { src: '/lovable-uploads/a0dae427-a54b-440b-8210-4cf81d6c947c.png', title: 'Plastilina', description: '' },
        { src: '/lovable-uploads/77a2dd6c-b604-4139-9694-d509ae705e4f.png', title: 'Plastilina', description: '' },
      ]
    },
    {
      id: 'dibujo-personalizado',
      title: 'Tu dibujo personalizado en el soporte que quieras',
      images: [
        { src: '/lovable-uploads/camisetadracarys.png', title: '', description: '' },
        { src: '/lovable-uploads/mochiladracarys.png', title: '', description: '' },
        { src: '/lovable-uploads/totedracarys.png', title: '', description: '' },
        { src: '/lovable-uploads/bodydracarys.png', title: '', description: '' },
        { src: '/lovable-uploads/camipadre.png', title: '', description: '' },
        { src: '/lovable-uploads/camisetamadre.png', title: '', description: '' },
        { src: '/lovable-uploads/sudaderaniña.png', title: '', description: '' },
        { src: '/lovable-uploads/bodybebe.png', title: '', description: '' },
      ]
    },
    {
      id: 'recordatorios-primera-comunion',
      title: 'Recordatorios Primera Comunión - Dibujos de catálogo',
      images: [
        { src: '/lovable-uploads/besobeberizado.png', title: 'Basado en catálogo', description: 'Colores pelo y fondo y razas personalizables' },
        { src: '/lovable-uploads/chinita.png', title: 'Basado en catálogo', description: 'Colores pelo y fondo y razas personalizables' },
        { src: '/lovable-uploads/corderito-sin-cordero.png', title: 'Basado en catálogo', description: 'Colores pelo y fondo y razas personalizables' },
        { src: '/lovable-uploads/negritaTUnica.png', title: 'Basado en catálogo', description: 'Colores pelo y fondo y razas personalizables' },
        { src: '/lovable-uploads/organzareclinatorio.png', title: 'Basado en catálogo', description: 'Colores pelo y fondo y razas personalizables' },
        { src: '/lovable-uploads/patinete.png', title: 'Basado en catálogo', description: 'Colores pelo y fondo y razas personalizables' },
        { src: '/lovable-uploads/rezoorganza.png', title: 'Basado en catálogo', description: 'Colores pelo y fondo y razas personalizables' },
        { src: '/lovable-uploads/tunicaangelito.png', title: 'Basado en catálogo', description: 'Colores pelo y fondo y razas personalizables' },
        { src: '/lovable-uploads/veladiadema.png', title: 'Basado en catálogo', description: 'Colores pelo y fondo y razas personalizables' },
        { src: '/lovable-uploads/velapaloma.png', title: 'Basado en catálogo', description: 'Colores pelo y fondo y razas personalizables' },
        { src: '/lovable-uploads/balon_traje_CORTO.png', title: 'Basado en catálogo', description: 'Colores pelo y fondo y razas personalizables' },
        { src: '/lovable-uploads/basketraje.png', title: 'Basado en catálogo', description: 'Colores pelo y fondo y razas personalizables' },
        { src: '/lovable-uploads/escudo-marinero.png', title: 'Basado en catálogo', description: 'Colores pelo y fondo y razas personalizables' },
        { src: '/lovable-uploads/futboltraje.png', title: 'Basado en catálogo', description: 'Colores pelo y fondo y razas personalizables' },
        { src: '/lovable-uploads/marineroBalon.png', title: 'Basado en catálogo', description: 'Colores pelo y fondo y razas personalizables' },
        { src: '/lovable-uploads/marinerobarquito.png', title: 'Basado en catálogo', description: 'Colores pelo y fondo y razas personalizables' },
        { src: '/lovable-uploads/marineroreclinatorio.png', title: 'Basado en catálogo', description: 'Colores pelo y fondo y razas personalizables' },
        { src: '/lovable-uploads/patinete-2.png', title: 'Basado en catálogo', description: 'Colores pelo y fondo y razas personalizables' },
        { src: '/lovable-uploads/RECLINATORIOTRAJE.png', title: 'Basado en catálogo', description: 'Colores pelo y fondo y razas personalizables' },
        { src: '/lovable-uploads/virgenpatio.png', title: 'Basado en catálogo', description: 'Colores pelo y fondo y razas personalizables' },
      ]
    },
    {
      id: 'recordatorios-primera-comunion-personalizados',
      title: 'Recordatorios Primera Comunión - Dibujos personalizados',
      images: [
        { src: '/lovable-uploads/colormen.png', title: 'Dibujo a medida', description: 'Tu dibujo como quieras' },
        { src: '/lovable-uploads/colorperritos.png', title: 'Dibujo a medida', description: 'Tu dibujo como quieras' },
        { src: '/lovable-uploads/columpio.png', title: 'Dibujo a medida', description: 'Tu dibujo como quieras' },
        { src: '/lovable-uploads/bluegrande.png', title: 'Dibujo a medida', description: 'Tu dibujo como quieras' },
        { src: '/lovable-uploads/flaviasola.png', title: 'Dibujo a medida', description: 'Tu dibujo como quieras' },
        { src: '/lovable-uploads/hermanas.png', title: 'Dibujo a medida', description: 'Tu dibujo como quieras' },
        { src: '/lovable-uploads/inigo.png', title: 'Dibujo a medida', description: 'Tu dibujo como quieras' },
        { src: '/lovable-uploads/marineroperrito.png', title: 'Dibujo a medida', description: 'Tu dibujo como quieras' },
        { src: '/lovable-uploads/rezando.png', title: 'Dibujo a medida', description: 'Tu dibujo como quieras' },
        { src: '/lovable-uploads/trenza.png', title: 'Dibujo a medida', description: 'Tu dibujo como quieras' },
      ]
    },
  ];

  const checkScrollState = (containerId: string) => {
    const container = document.getElementById(containerId);
    if (container) {
      const canScrollLeft = container.scrollLeft > 0;
      const canScrollRight = container.scrollLeft < (container.scrollWidth - container.clientWidth - 1); // -1 to handle rounding
      
      setScrollStates(prev => ({
        ...prev,
        [containerId]: { canScrollLeft, canScrollRight }
      }));
    }
  };

  const scrollHorizontal = (containerId: string, direction: 'left' | 'right') => {
    const container = document.getElementById(containerId);
    if (container) {
      const cardWidth = container.offsetWidth / 3; // Width of one card (1/3 of container)
      container.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
      
      // Check scroll state after a brief delay to allow for smooth scrolling
      setTimeout(() => checkScrollState(containerId), 100);
    }
  };

  // Initialize scroll states
  useEffect(() => {
    const initializeScrollStates = () => {
      portfolioSections.forEach((_, index) => {
        const containerId = `scroll-container-${index}`;
        checkScrollState(containerId);
      });
    };

    // Initialize after a brief delay to ensure elements are rendered
    setTimeout(initializeScrollStates, 100);
  }, []);

  // Add scroll listeners to each container
  useEffect(() => {
    const containers = portfolioSections.map((_, index) => {
      const containerId = `scroll-container-${index}`;
      const container = document.getElementById(containerId);
      
      if (container) {
        const handleScroll = () => checkScrollState(containerId);
        container.addEventListener('scroll', handleScroll);
        return { container, handleScroll };
      }
      return null;
    }).filter(Boolean);

    return () => {
      containers.forEach(item => {
        if (item && item.container && item.handleScroll) {
          item.container.removeEventListener('scroll', item.handleScroll);
        }
      });
    };
  }, []);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-white md:pr-64 pt-24 md:pt-0 ${!isLottieLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
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
        {/* Logo */}
        <div className="mb-8 hidden md:flex flex-col items-center justify-center">
          <img 
            src="/lovable-uploads/e27c95ab-eb40-4ab3-ac43-b70d39b9ed96.png" 
            alt="Mariatepinta" 
            className="h-auto w-64 lg:w-80 mb-6"
          />
        </div>

        {/* Lottie Animation - solo desktop */}
        <div className="w-full mb-4 md:mb-16 -mx-4 md:-mx-64 hidden md:block">
          <LottieAnimation 
            className="w-full h-auto" 
            onReady={() => setIsLottieLoaded(true)}
          />
        </div>

        {/* Lottie Animation Mobile */}
        <div className="w-full mb-4 -mx-4 md:hidden">
          <LottieAnimation 
            src="https://lottie.host/8a1eab2a-9091-455e-8129-1554b0db64de/g6WFBmQhgJ.json"
            className="w-full h-auto" 
            onReady={() => setIsLottieLoaded(true)}
          />
        </div>

        {/* Portfolio Sections */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-4 md:space-y-8">
          {portfolioSections.map((section, sectionIndex) => (
            <div key={section.id} id={section.id} className="space-y-4">
              {/* Section Title - visible on all screen sizes */}
              <h2 className="text-lg font-normal text-black text-left font-poppins underline decoration-[#be1622] decoration-2 underline-offset-4 md:block hidden">
                {section.title}
              </h2>

              {/* Mobile section title with inline collapsible arrow */}
              <div className="md:hidden">
                <Collapsible
                  open={openSections[section.id]}
                  onOpenChange={() => toggleSection(section.id)}
                >
                  <CollapsibleTrigger className="flex items-center w-full p-2 -mt-2 mb-2">
                     <h2 className="text-lg font-normal text-black text-left font-poppins underline decoration-[#be1622] decoration-2 underline-offset-4 inline">
                       {section.title}
                       <ChevronDown 
                         size={20} 
                         className={`text-[#be1622] transition-transform duration-200 ml-1 inline ${
                           openSections[section.id] ? 'rotate-180' : ''
                         }`}
                       />
                     </h2>
                    <span className="sr-only">
                      {openSections[section.id] ? 'Colapsar' : 'Expandir'} sección {section.title}
                    </span>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="grid grid-cols-2 gap-1">
                      {section.images.map((image, index) => (
                         <div key={index} className="group cursor-pointer">
                           <div className="relative overflow-hidden bg-gray-100 aspect-square flex items-center justify-center">
                             {image.src.startsWith('lottie:') ? (
                               <Player
                                 autoplay
                                 loop
                                 src={image.src.replace('lottie:', '')}
                                 style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                               />
                             ) : (
                               <img 
                                 src={image.src} 
                                 alt={image.title}
                                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                               />
                             )}
                               {section.id !== 'infantil' && section.id !== 'vinetas' && section.id !== 'ia' && (

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <div className="bg-white/80 w-full h-full flex items-center justify-center backdrop-blur-sm">
                                    <div className="p-4 max-w-xs text-center">
                                      <h3 className="font-normal text-black mb-2">{image.title}</h3>
                                      {image.description && (
                                        <p className="text-sm text-black/70">{image.description}</p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                             )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>

              {/* Desktop layout with horizontal scroll */}
              <div className="hidden md:block">
                {/* Navigation arrows positioned above the photos */}
                <div className="relative">
                   {scrollStates[`scroll-container-${sectionIndex}`]?.canScrollLeft && (
                     <button
                       onClick={() => scrollHorizontal(`scroll-container-${sectionIndex}`, 'left')}
                       className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-[#be1622] rounded-full flex items-center justify-center hover:bg-[#a01420] transition-colors duration-200"
                     >
                       <ChevronLeft size={16} className="text-white" />
                     </button>
                   )}
                   
                   {scrollStates[`scroll-container-${sectionIndex}`]?.canScrollRight && (
                     <button
                       onClick={() => scrollHorizontal(`scroll-container-${sectionIndex}`, 'right')}
                       className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-[#be1622] rounded-full flex items-center justify-center hover:bg-[#a01420] transition-colors duration-200"
                     >
                       <ChevronRight size={16} className="text-white" />
                     </button>
                   )}

                  <div 
                    id={`scroll-container-${sectionIndex}`}
                    className="flex gap-1 overflow-x-auto scrollbar-hide scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {section.images.map((image, index) => (
                      <div key={index} className="group cursor-pointer flex-shrink-0 w-1/3 min-w-0">
                         <div className="relative overflow-hidden bg-gray-100 aspect-square flex items-center justify-center">
                           {image.src.startsWith('lottie:') ? (
                             <Player
                               autoplay
                               loop
                               src={image.src.replace('lottie:', '')}
                               style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                             />
                           ) : (
                             <img 
                               src={image.src} 
                               alt={image.title}
                               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                             />
                            )}
                            {section.id !== 'infantil' && section.id !== 'vinetas' && section.id !== 'ia' && (
                               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                 <div className="bg-white/80 w-full h-full flex items-center justify-center backdrop-blur-sm">
                                   <div className="p-4 max-w-xs text-center">
                                     <h3 className="font-normal text-black mb-2">{image.title}</h3>
                                     {image.description && (
                                       <p className="text-sm text-black/70">{image.description}</p>
                                     )}
                                   </div>
                                 </div>
                               </div>
                            )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}

          {/* Button for custom drawing section */}
          <div className="max-w-6xl mx-auto px-4 md:px-8 mt-8 flex justify-center">
            <Button 
              onClick={() => setIsCustomDrawingModalOpen(true)}
              className="bg-[#be1622] hover:bg-[#a01420] text-white font-poppins"
            >
              Quiero información
            </Button>
          </div>
        </div>
      </section>

      
      {/* Back to Top Button - Desktop y Mobile */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out ${
        showBackToTop 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        <button
          onClick={scrollToTop}
          className="bg-[#be1622] hover:bg-[#a01420] text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 text-sm font-medium"
          aria-label="Volver arriba"
        >
          <span>Volver arriba</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />

      {/* Custom Drawing Info Modal */}
      <Dialog open={isCustomDrawingModalOpen} onOpenChange={setIsCustomDrawingModalOpen}>
        <DialogContent className="max-w-2xl font-poppins">
          <DialogHeader>
            <DialogTitle className="text-xl font-normal text-black">
              ¿Te gustaría tener una ilustración hecha especialmente para ti y lucirla en una camiseta, taza, body, bolsa, cuadro u otro producto de LaTostadora? ¡Es muy fácil!
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 mt-4">
            <h3 className="text-lg font-normal text-black">¿Cómo funciona?</h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-black mb-1">1.- Me cuentas tu idea</p>
                <p className="text-sm text-black/70">Persona, mascota, escena, afición, fanart, temática especial… ¡lo que imagines!</p>
              </div>
              
              <div>
                <p className="font-semibold text-black mb-1">2.- Realizo el dibujo personalizado</p>
                <p className="text-sm text-black/70">100% a medida y exclusivo para ti. Cuando esté listo, decidimos el soporte</p>
              </div>
              
              <div>
                <p className="font-semibold text-black mb-1">3.- Te mando el link para que lo encargues en LaTostadora</p>
                <p className="text-sm text-black/70">Tras haber decidido soporte, talla, color, etc... recibes el link para encargarlo. Ellos también se encargan del cobro y envío.</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Index;
