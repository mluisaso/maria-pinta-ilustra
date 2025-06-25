
import React from 'react';

interface PortfolioCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, onClick }) => {
  return (
    <div 
      className="group cursor-pointer bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-orange-400 transition-all duration-300 hover:shadow-lg"
      onClick={onClick}
    >
      <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400" 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default PortfolioCard;
