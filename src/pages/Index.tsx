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
        { src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500', title: 'Infantil 1', description: 'Mundo de fantasía' },
        { src: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500', title: 'Infantil 2', description: 'Aventuras dibujadas' },
        { src: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500', title: 'Infantil 3', description: 'Sonrisas garantizadas' },
        { src: 'https://images.unsplash.com/photo-1519340333755-56e9c1d4a3c2?w=500', title: 'Infantil 4', description: 'Diversión colorida' },
        { src: 'https://images.unsplash.com/photo-1515524738708-327f6b0037a7?w=500', title: 'Infantil 5', description: 'Pequeños héroes' },
        { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', title: 'Infantil 6', description: 'Magia infantil' },
        { src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500', title: 'Infantil 7', description: 'Mundo de fantasía' },
        { src: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500', title: 'Infantil 8', description: 'Aventuras dibujadas' },
        { src: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500', title: 'Infantil 9', description: 'Sonrisas garantizadas' },
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
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white md:pr-64 pt-32 md:pt-0">
      <Header />

      {/* Hero Section */}
      <section id="portfolio" className="relative min-h-screen flex flex-col items-center justify-center bg-white pt-20 pb-12">
        {/* Lottie Animation */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-8 flex-shrink-0">
          <LottieAnimation className="w-full h-full" />
        </div>
        
        {/* Logo rojo debajo de la animación - más pequeño y separado */}
        <div className="mb-12">
          <img 
            src="/lovable-uploads/8db84594-1fe6-42bc-94fe-55ac7bbea2ef.png" 
            alt="Mariatepinta" 
            className="h-8 md:h-10 lg:h-12"
          />
        </div>

        {/* Portfolio Sections */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-8">
          {portfolioSections.map((section, sectionIndex) => (
            <div key={section.id} id={section.id} className="space-y-4 group">
              {/* Navigation arrows positioned above the photos */}
              <div className="relative">
                <button
                  onClick={() => scrollHorizontal(`scroll-container-${sectionIndex}`, 'left')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-[#be1622] group-hover:bg-black rounded-full flex items-center justify-center hover:bg-[#a01420] transition-colors duration-200"
                >
                  <ChevronLeft size={16} className="text-white" />
                </button>
                
                <button
                  onClick={() => scrollHorizontal(`scroll-container-${sectionIndex}`, 'right')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-[#be1622] group-hover:bg-black rounded-full flex items-center justify-center hover:bg-[#a01420] transition-colors duration-200"
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
                          <div className="bg-[#be1622] w-full h-full flex items-center justify-center">
                            <div className="p-4 max-w-xs text-center">
                              <h3 className="font-normal text-white mb-2">{image.title}</h3>
                              <p className="text-sm text-white/90">{image.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
