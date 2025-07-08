import React from 'react';
import Header from '../components/Header';
import LottieAnimation from '../components/LottieAnimation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Index = () => {
  // Todas las imágenes del portfolio organizadas por categorías
  const portfolioSections = [
    {
      id: 'editorial',
      title: 'Editorial',
      images: [
        { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500', title: 'Editorial 1', description: 'Narrativa visual' },
        { src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500', title: 'Editorial 2', description: 'Historias ilustradas' },
        { src: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500', title: 'Editorial 3', description: 'Páginas con alma' },
        { src: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500', title: 'Editorial 4', description: 'Literatura visual' },
        { src: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500', title: 'Editorial 5', description: 'Cuentos dibujados' },
        { src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500', title: 'Editorial 6', description: 'Mundos ilustrados' },
        { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500', title: 'Editorial 7', description: 'Narrativa visual' },
        { src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500', title: 'Editorial 8', description: 'Historias ilustradas' },
        { src: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500', title: 'Editorial 9', description: 'Páginas con alma' },
      ]
    },
    {
      id: 'infantil',
      title: 'Infantil',
      images: [
        { src: '/lovable-uploads/9bd32076-a65b-406d-ab49-18cef19f7bf8.png', title: 'Infantil 1', description: 'Mundo de fantasía' },
        { src: '/lovable-uploads/79ee57e3-9840-49f9-93fe-dee7ce32eb1a.png', title: 'Infantil 2', description: 'Aventuras dibujadas' },
        { src: '/lovable-uploads/e442ad7c-c1ec-4ae6-be7f-1df559903532.png', title: 'Infantil 3', description: 'Sonrisas garantizadas' },
        { src: '/lovable-uploads/f912a082-1ad7-45d4-8f63-4e84354ccdc8.png', title: 'Infantil 4', description: 'Diversión colorida' },
        { src: '/lovable-uploads/d6b0ca1a-d20e-48e2-bead-d4b8d67ef67e.png', title: 'Infantil 5', description: 'Pequeños héroes' },
        { src: '/lovable-uploads/e21d6183-5c61-483a-9ba3-70ee5a0f87c4.png', title: 'Infantil 6', description: 'Magia infantil' },
        { src: '/lovable-uploads/4dff3c5d-06e5-4a8b-aac2-51e5ed2f3bcf.png', title: 'Infantil 7', description: 'Mundo de fantasía' },
        { src: '/lovable-uploads/f2935822-cd37-4cbe-9e38-b97bbbf701b1.png', title: 'Infantil 8', description: 'Aventuras dibujadas' },
        { src: '/lovable-uploads/5edca1f5-e1c4-4658-b640-b5dfadfd1c71.png', title: 'Infantil 9', description: 'Sonrisas garantizadas' },
        { src: '/lovable-uploads/d2de8bfa-c7e3-4b74-aded-0e1aaa60e368.png', title: 'Infantil 10', description: 'Magia infantil' },
        { src: '/lovable-uploads/356fdd84-a0c1-4420-a4e6-50b389818aff.png', title: 'Infantil 11', description: 'Aventuras al aire libre' },
        { src: '/lovable-uploads/2ddfb707-ce87-43f9-937d-8e1523a17c19.png', title: 'Infantil 12', description: 'Diversión en la nieve' },
        { src: '/lovable-uploads/28e4e61d-852c-4e0c-ac6e-16d326a572de.png', title: 'Infantil 13', description: 'Aventuras submarinas' },
        { src: '/lovable-uploads/e2573526-5c53-4a48-9727-af5a45878642.png', title: 'Infantil 14', description: 'Días de lluvia' },
        { src: '/lovable-uploads/5bd218db-aa39-41b4-8790-601df714af23.png', title: 'Infantil 15', description: 'Jugando en inglés' },
        { src: '/lovable-uploads/58be4680-6fab-4334-846d-bd0a6dd395fc.png', title: 'Infantil 16', description: 'Deportes divertidos' },
        { src: '/lovable-uploads/814fe137-2633-47e6-9948-7876b20108c0.png', title: 'Infantil 17', description: 'Amigos del corral' },
        { src: '/lovable-uploads/a7feb34d-50a3-4ef8-82af-fc916d2cc2cd.png', title: 'Infantil 18', description: 'Aventuras del oeste' },
        { src: '/lovable-uploads/c3083f1d-74ca-4768-9190-b771d0518660.png', title: 'Infantil 19', description: 'Yoga para niños' },
        { src: '/lovable-uploads/5197131f-8534-4001-9d3e-7d6858c25884.png', title: 'Infantil 20', description: 'Cuentos de princesas' },
      ]
    },
    {
      id: 'vinetas',
      title: 'Viñetas',
      images: [
        { src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=500', title: 'Viñeta 1', description: 'Una historia dibujada con gracia' },
        { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500', title: 'Viñeta 2', description: 'Momentos cotidianos con humor' },
        { src: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=500', title: 'Viñeta 3', description: 'Expresiones que hablan solas' },
        { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500', title: 'Viñeta 4', description: 'Humor gráfico' },
        { src: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500', title: 'Viñeta 5', description: 'Reflexiones visuales' },
        { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500', title: 'Viñeta 6', description: 'Historias cortas' },
        { src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=500', title: 'Viñeta 7', description: 'Una historia dibujada con gracia' },
        { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500', title: 'Viñeta 8', description: 'Momentos cotidianos con humor' },
        { src: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=500', title: 'Viñeta 9', description: 'Expresiones que hablan solas' },
      ]
    },
    {
      id: 'ia',
      title: 'IA',
      images: [
        { src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500', title: 'IA 1', description: 'Robots con personalidad' },
        { src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500', title: 'IA 2', description: 'Futuro dibujado a mano' },
        { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500', title: 'IA 3', description: 'Tecnología humanizada' },
        { src: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=500', title: 'IA 4', description: 'Ciencia ficción' },
        { src: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500', title: 'IA 5', description: 'Inteligencia visual' },
        { src: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=500', title: 'IA 6', description: 'Mundo digital' },
        { src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500', title: 'IA 7', description: 'Robots con personalidad' },
        { src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500', title: 'IA 8', description: 'Futuro dibujado a mano' },
        { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500', title: 'IA 9', description: 'Tecnología humanizada' },
      ]
    },
    {
      id: 'team-building',
      title: 'Team Building',
      images: [
        { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500', title: 'Equipo 1', description: 'Dinámicas grupales ilustradas' },
        { src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500', title: 'Equipo 2', description: 'Colaboración visual' },
        { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500', title: 'Equipo 3', description: 'Unión en trazos' },
        { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500', title: 'Equipo 4', description: 'Trabajo en equipo' },
        { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500', title: 'Equipo 5', description: 'Sinergia grupal' },
        { src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500', title: 'Equipo 6', description: 'Conexión humana' },
        { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500', title: 'Equipo 7', description: 'Dinámicas grupales ilustradas' },
        { src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500', title: 'Equipo 8', description: 'Colaboración visual' },
        { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500', title: 'Equipo 9', description: 'Unión en trazos' },
      ]
    },
    {
      id: 'visual-thinking',
      title: 'Visual Thinking',
      images: [
        { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500', title: 'Visual 1', description: 'Ideas complejas, dibujos simples' },
        { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500', title: 'Visual 2', description: 'Conceptos visualizados' },
        { src: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500', title: 'Visual 3', description: 'Pensamiento en imágenes' },
        { src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500', title: 'Visual 4', description: 'Mapas conceptuales' },
        { src: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500', title: 'Visual 5', description: 'Esquemas creativos' },
        { src: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=500', title: 'Visual 6', description: 'Diagramas únicos' },
        { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500', title: 'Visual 7', description: 'Ideas complejas, dibujos simples' },
        { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500', title: 'Visual 8', description: 'Conceptos visualizados' },
        { src: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500', title: 'Visual 9', description: 'Pensamiento en imágenes' },
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

  return (
    <div className="min-h-screen bg-white md:pr-64 pt-48 md:pt-0">
      <Header />

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

        {/* Lottie Animation - llena toda la pantalla hasta la banda roja */}
        <div className="w-full mb-4 md:mb-16 -mx-4 md:-mx-64">
          <LottieAnimation className="w-full h-auto" />
        </div>

        {/* Portfolio Sections */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-12 md:space-y-8">
          {portfolioSections.map((section, sectionIndex) => (
            <div key={section.id} className="space-y-4">
              {/* Section Title - visible on all screen sizes */}
              <h2 id={section.id} className="text-lg font-normal text-black text-left font-poppins underline decoration-[#be1622] decoration-2 underline-offset-4">
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
                                <p className="text-sm text-black/70">{image.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile layout with vertical grid */}
              <div className="md:hidden grid grid-cols-2 gap-1">
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
                            <p className="text-sm text-black/70">{image.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
    </div>
  );
};

export default Index;
