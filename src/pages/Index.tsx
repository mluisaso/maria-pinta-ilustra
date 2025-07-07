import React from 'react';
import Header from '../components/Header';
import LottieAnimation from '../components/LottieAnimation';
import PortfolioCard from '../components/PortfolioCard';
import PortfolioSection from '../components/PortfolioSection';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const portfolioCategories = [
    { title: 'Viñetas', description: 'Historias dibujadas con gracia', id: 'vinetas' },
    { title: 'Team Building', description: 'Dinámicas grupales ilustradas', id: 'team' },
    { title: 'IA', description: 'Robots con personalidad', id: 'ia' },
    { title: 'Firmas', description: 'Identidad única en cada trazo', id: 'firmas' },
    { title: 'Visual Thinking', description: 'Ideas complejas, dibujos simples', id: 'visual' },
    { title: 'Infantil', description: 'Mundo de fantasía', id: 'infantil' },
    { title: 'Editorial', description: 'Narrativa visual', id: 'editorial' },
  ];

  const portfolioSections = [
    {
      id: 'vinetas',
      title: 'Viñetas',
      images: [
        { src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=500', title: 'Viñeta 1', description: 'Una historia dibujada con gracia' },
        { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500', title: 'Viñeta 2', description: 'Momentos cotidianos con humor' },
        { src: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=500', title: 'Viñeta 3', description: 'Expresiones que hablan solas' },
      ]
    },
    {
      id: 'team',
      title: 'Team Building',
      images: [
        { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500', title: 'Equipo 1', description: 'Dinámicas grupales ilustradas' },
        { src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500', title: 'Equipo 2', description: 'Colaboración visual' },
        { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500', title: 'Equipo 3', description: 'Unión en trazos' },
      ]
    },
    {
      id: 'ia',
      title: 'IA',
      images: [
        { src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500', title: 'IA 1', description: 'Robots con personalidad' },
        { src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500', title: 'IA 2', description: 'Futuro dibujado a mano' },
        { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500', title: 'IA 3', description: 'Tecnología humanizada' },
      ]
    },
    {
      id: 'firmas',
      title: 'Firmas Personalizadas',
      images: [
        { src: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500', title: 'Firma 1', description: 'Identidad única en cada trazo' },
        { src: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500', title: 'Firma 2', description: 'Elegancia manuscrita' },
        { src: 'https://images.unsplash.com/photo-1542435503-956c469947f6?w=500', title: 'Firma 3', description: 'Personalidad sobre papel' },
      ]
    },
    {
      id: 'visual',
      title: 'Visual Thinking',
      images: [
        { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500', title: 'Visual 1', description: 'Ideas complejas, dibujos simples' },
        { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500', title: 'Visual 2', description: 'Conceptos visualizados' },
        { src: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500', title: 'Visual 3', description: 'Pensamiento en imágenes' },
      ]
    },
    {
      id: 'infantil',
      title: 'Infantil',
      images: [
        { src: 'https://images.unsplash.com/photo-1530325553146-0b2a0f9a6b7c?w=500', title: 'Infantil 1', description: 'Mundo de fantasía' },
        { src: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500', title: 'Infantil 2', description: 'Aventuras dibujadas' },
        { src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500', title: 'Infantil 3', description: 'Sonrisas garantizadas' },
      ]
    },
    {
      id: 'editorial',
      title: 'Editorial',
      images: [
        { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500', title: 'Editorial 1', description: 'Narrativa visual' },
        { src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500', title: 'Editorial 2', description: 'Historias ilustradas' },
        { src: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500', title: 'Editorial 3', description: 'Páginas con alma' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white md:pr-64 pt-24 md:pt-0">
      <Header />

      {/* Hero Section */}
      <section id="portfolio" className="relative min-h-screen flex flex-col items-center justify-center bg-white pt-12 pb-12">
        {/* Lottie Animation */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-8 flex-shrink-0">
          <LottieAnimation className="w-full h-full" />
        </div>
        
        {/* Logo rojo debajo de la animación - reducido de tamaño */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/8db84594-1fe6-42bc-94fe-55ac7bbea2ef.png" 
            alt="Mariatepinta" 
            className="h-12 md:h-14 lg:h-16"
          />
        </div>
        
        {/* Título debajo del logo */}
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 max-w-2xl mx-auto px-4">
            Dibujos a medida. Como los trajes, pero con lápices.
          </h1>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 md:gap-4">
            {portfolioCategories.map((category, index) => (
              <PortfolioCard
                key={index}
                title={category.title}
                description={category.description}
                onClick={() => scrollToSection(category.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Sections */}
      {portfolioSections.map((section, index) => (
        <PortfolioSection
          key={index}
          id={section.id}
          title={section.title}
          images={section.images}
        />
      ))}

      {/* Footer */}
      <footer className="bg-gray-50 py-8 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <span className="text-gray-600 mr-2">Hecho a boli</span>
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 Mariatepinta. Todos los derechos reservados (incluso los torcidos).
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
