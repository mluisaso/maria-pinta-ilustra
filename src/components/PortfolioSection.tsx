
import React from 'react';

interface PortfolioSectionProps {
  id: string;
  title: string;
  images: { src: string; title: string; description: string }[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ id, title, images }) => {
  // Mapeo de colores para cada sección
  const getColorForSection = (sectionTitle: string) => {
    const colorMap: Record<string, string> = {
      'Viñetas': 'bg-red-500',
      'Team Building': 'bg-blue-500',
      'IA': 'bg-green-500',
      'Firmas Personalizadas': 'bg-orange-500',
      'Visual Thinking': 'bg-cyan-500',
      'Infantil': 'bg-pink-500',
      'Editorial': 'bg-indigo-500'
    };
    return colorMap[sectionTitle] || 'bg-red-500';
  };

  return (
    <section id={id} className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square">
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`${getColorForSection(title)} rounded-lg p-4 max-w-xs text-center shadow-lg`}>
                  <h3 className="font-bold text-white mb-2">{image.title}</h3>
                  <p className="text-sm text-white/90">{image.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
