
import React from 'react';
import LottieAnimation from '../components/LottieAnimation';
import NavigationIcon from '../components/NavigationIcon';
import PortfolioSection from '../components/PortfolioSection';
import ContactForm from '../components/ContactForm';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationIcons = [
    { type: 'vinetas' as const, label: 'Viñetas', position: { x: 20, y: 30 }, id: 'vinetas' },
    { type: 'team' as const, label: 'Team Building', position: { x: 80, y: 25 }, id: 'team' },
    { type: 'ia' as const, label: 'IA', position: { x: 15, y: 70 }, id: 'ia' },
    { type: 'firmas' as const, label: 'Firmas', position: { x: 85, y: 75 }, id: 'firmas' },
    { type: 'visual' as const, label: 'Visual Thinking', position: { x: 30, y: 15 }, id: 'visual' },
    { type: 'infantil' as const, label: 'Infantil', position: { x: 70, y: 85 }, id: 'infantil' },
    { type: 'editorial' as const, label: 'Editorial', position: { x: 75, y: 15 }, id: 'editorial' },
  ];

  const portfolioSections = [
    {
      id: 'vinetas',
      title: 'Viñetas',
      type: 'vinetas' as const,
      images: [
        { src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=500', title: 'Viñeta 1', description: 'Una historia dibujada con gracia' },
        { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500', title: 'Viñeta 2', description: 'Momentos cotidianos con humor' },
        { src: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=500', title: 'Viñeta 3', description: 'Expresiones que hablan solas' },
      ]
    },
    {
      id: 'team',
      title: 'Team Building',
      type: 'team' as const,
      images: [
        { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500', title: 'Equipo 1', description: 'Dinámicas grupales ilustradas' },
        { src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500', title: 'Equipo 2', description: 'Colaboración visual' },
        { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500', title: 'Equipo 3', description: 'Unión en trazos' },
      ]
    },
    {
      id: 'ia',
      title: 'IA',
      type: 'ia' as const,
      images: [
        { src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500', title: 'IA 1', description: 'Robots con personalidad' },
        { src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500', title: 'IA 2', description: 'Futuro dibujado a mano' },
        { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500', title: 'IA 3', description: 'Tecnología humanizada' },
      ]
    },
    {
      id: 'firmas',
      title: 'Firmas Personalizadas',
      type: 'firmas' as const,
      images: [
        { src: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500', title: 'Firma 1', description: 'Identidad única en cada trazo' },
        { src: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500', title: 'Firma 2', description: 'Elegancia manuscrita' },
        { src: 'https://images.unsplash.com/photo-1542435503-956c469947f6?w=500', title: 'Firma 3', description: 'Personalidad sobre papel' },
      ]
    },
    {
      id: 'visual',
      title: 'Visual Thinking',
      type: 'visual' as const,
      images: [
        { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500', title: 'Visual 1', description: 'Ideas complejas, dibujos simples' },
        { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500', title: 'Visual 2', description: 'Conceptos visualizados' },
        { src: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500', title: 'Visual 3', description: 'Pensamiento en imágenes' },
      ]
    },
    {
      id: 'infantil',
      title: 'Infantil',
      type: 'infantil' as const,
      images: [
        { src: 'https://images.unsplash.com/photo-1530325553146-0b2a0f9a6b7c?w=500', title: 'Infantil 1', description: 'Mundo de fantasía' },
        { src: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500', title: 'Infantil 2', description: 'Aventuras dibujadas' },
        { src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500', title: 'Infantil 3', description: 'Sonrisas garantizadas' },
      ]
    },
    {
      id: 'editorial',
      title: 'Editorial',
      type: 'editorial' as const,
      images: [
        { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500', title: 'Editorial 1', description: 'Narrativa visual' },
        { src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500', title: 'Editorial 2', description: 'Historias ilustradas' },
        { src: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500', title: 'Editorial 3', description: 'Páginas con alma' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm py-4 px-4 md:px-8">
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/38261183-3067-4b9c-b722-fbf329309b63.png" 
            alt="Mariatepinta" 
            className="h-8 md:h-10"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white pt-20">
        <div className="text-center z-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 max-w-2xl mx-auto px-4">
            Ilustro cosas. A veces hasta con sentido.
          </h1>
          
          <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
            <LottieAnimation className="w-full h-full" />
            
            {/* Navigation Icons */}
            {navigationIcons.map((icon, index) => (
              <NavigationIcon
                key={index}
                type={icon.type}
                label={icon.label}
                position={icon.position}
                onClick={() => scrollToSection(icon.id)}
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
          type={section.type}
          images={section.images}
        />
      ))}

      {/* Contact Section */}
      <ContactForm />

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
