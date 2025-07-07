
import React from 'react';
import Header from '../components/Header';
import LottieAnimation from '../components/LottieAnimation';

const Index = () => {
  // Todas las imágenes del portfolio en un solo array
  const allPortfolioImages = [
    // Viñetas
    { src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=500', title: 'Viñeta 1', description: 'Una historia dibujada con gracia' },
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500', title: 'Viñeta 2', description: 'Momentos cotidianos con humor' },
    { src: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=500', title: 'Viñeta 3', description: 'Expresiones que hablan solas' },
    
    // Team Building
    { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500', title: 'Equipo 1', description: 'Dinámicas grupales ilustradas' },
    { src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500', title: 'Equipo 2', description: 'Colaboración visual' },
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500', title: 'Equipo 3', description: 'Unión en trazos' },
    
    // IA
    { src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500', title: 'IA 1', description: 'Robots con personalidad' },
    { src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500', title: 'IA 2', description: 'Futuro dibujado a mano' },
    { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500', title: 'IA 3', description: 'Tecnología humanizada' },
    
    // Firmas Personalizadas
    { src: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500', title: 'Firma 1', description: 'Identidad única en cada trazo' },
    { src: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500', title: 'Firma 2', description: 'Elegancia manuscrita' },
    { src: 'https://images.unsplash.com/photo-1542435503-956c469947f6?w=500', title: 'Firma 3', description: 'Personalidad sobre papel' },
    
    // Visual Thinking
    { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500', title: 'Visual 1', description: 'Ideas complejas, dibujos simples' },
    { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500', title: 'Visual 2', description: 'Conceptos visualizados' },
    { src: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500', title: 'Visual 3', description: 'Pensamiento en imágenes' },
    
    // Infantil
    { src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500', title: 'Infantil 1', description: 'Mundo de fantasía' },
    { src: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500', title: 'Infantil 2', description: 'Aventuras dibujadas' },
    { src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500', title: 'Infantil 3', description: 'Sonrisas garantizadas' },
    
    // Editorial
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500', title: 'Editorial 1', description: 'Narrativa visual' },
    { src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500', title: 'Editorial 2', description: 'Historias ilustradas' },
    { src: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500', title: 'Editorial 3', description: 'Páginas con alma' },
  ];

  // Mapeo de colores para cada imagen - usando el rojo de la banda para algunos
  const getColorForIndex = (index: number) => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-cyan-500', 'bg-pink-500', 'bg-indigo-500'];
    const redColor = 'bg-[#be1622]'; // El rojo de la banda
    
    // Usar el rojo de la banda para algunos índices específicos
    if (index % 4 === 0) return redColor;
    
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-white md:pr-64 pt-32 md:pt-0">
      <Header />

      {/* Hero Section */}
      <section id="portfolio" className="relative min-h-screen flex flex-col items-center justify-center bg-white pt-20 pb-12">
        {/* Lottie Animation */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-16 flex-shrink-0">
          <LottieAnimation className="w-full h-full" />
        </div>
        
        {/* Logo rojo debajo de la animación - más grande */}
        <div className="mb-16">
          <img 
            src="/lovable-uploads/8db84594-1fe6-42bc-94fe-55ac7bbea2ef.png" 
            alt="Mariatepinta" 
            className="h-10 md:h-12 lg:h-16"
          />
        </div>

        {/* Portfolio Images Grid - Cards más juntas */}
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {allPortfolioImages.map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-gray-100 aspect-square">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`${getColorForIndex(index)} p-4 max-w-xs text-center shadow-lg`}>
                      <h3 className="font-normal text-white mb-2">{image.title}</h3>
                      <p className="text-sm text-white/90">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
