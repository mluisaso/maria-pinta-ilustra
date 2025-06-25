
import React, { useState } from 'react';
import HandDrawnIcon from './HandDrawnIcon';

interface NavigationIconProps {
  type: 'vinetas' | 'team' | 'ia' | 'firmas' | 'visual' | 'infantil' | 'editorial';
  label: string;
  position: { x: number; y: number };
  onClick: () => void;
}

const NavigationIcon: React.FC<NavigationIconProps> = ({ type, label, position, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="absolute cursor-pointer group"
      style={{ 
        left: `${position.x}%`, 
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 hover:scale-110">
        <HandDrawnIcon type={type} className="w-full h-full" isHovered={isHovered} />
      </div>
      
      {/* Tooltip */}
      <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full 
                     bg-white border-2 border-gray-800 rounded-lg px-3 py-1 text-sm font-medium
                     transition-all duration-300 whitespace-nowrap z-10
                     ${isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {label}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 
                       border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  );
};

export default NavigationIcon;
