import React from 'react';

interface PortfolioCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, onClick }) => {
  // Mapeo de imágenes específicas para cada categoría
  const getImageForTitle = (title: string) => {
    const imageMap: Record<string, string> = {
      'Viñetas': 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=400',
      'Team Building': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
      'IA': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400',
      'Firmas': 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400',
      'Visual Thinking': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400',
      'Infantil': 'https://images.unsplash.com/photo-1530325553146-0b2a0f9a6b7c?w=400',
      'Editorial': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
    };
    return imageMap[title] || 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400';
  };

  return (
    <div 
      className="group cursor-pointer bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-red-500 hover:scale-105"
      onClick={onClick}
    >
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <img 
          src={getImageForTitle(title)}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-red-900/80 group-hover:via-red-800/40 transition-all duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3">
          <h3 className="text-xs md:text-sm font-bold text-white mb-1 drop-shadow-lg leading-tight group-hover:text-red-100 transition-colors duration-300">{title}</h3>
          <p className="text-xs text-white/90 drop-shadow-md leading-tight hidden sm:block group-hover:text-red-100/90 transition-colors duration-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
