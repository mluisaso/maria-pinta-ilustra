
import React from 'react';

interface PortfolioCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, onClick }) => {
  return (
    <div 
      className="group cursor-pointer bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
      onClick={onClick}
    >
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400" 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-bold text-white mb-1 drop-shadow-lg">{title}</h3>
          <p className="text-sm text-white/90 drop-shadow-md">{description}</p>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 border-2 border-transparent group-hover:border-magenta-500 transition-colors duration-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default PortfolioCard;
