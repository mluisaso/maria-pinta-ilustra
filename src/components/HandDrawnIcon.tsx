
import React from 'react';

interface HandDrawnIconProps {
  type: 'vinetas' | 'team' | 'ia' | 'firmas' | 'visual' | 'infantil' | 'editorial';
  className?: string;
  isHovered?: boolean;
}

const HandDrawnIcon: React.FC<HandDrawnIconProps> = ({ type, className = "", isHovered = false }) => {
  const getIconPath = () => {
    switch (type) {
      case 'vinetas':
        return (
          <svg viewBox="0 0 100 100" className={`${className} transition-all duration-300`}>
            <path 
              d="M20 20 L80 20 L80 80 L20 80 Z M30 35 L70 35 M30 50 L70 50 M30 65 L70 65" 
              stroke={isHovered ? "#ff6b47" : "#000"} 
              strokeWidth="2" 
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        );
      case 'team':
        return (
          <svg viewBox="0 0 100 100" className={`${className} transition-all duration-300`}>
            <circle cx="30" cy="35" r="8" stroke={isHovered ? "#ff6b47" : "#000"} strokeWidth="2" fill="none"/>
            <circle cx="70" cy="35" r="8" stroke={isHovered ? "#ff6b47" : "#000"} strokeWidth="2" fill="none"/>
            <path d="M22 55 Q30 50 38 55 M62 55 Q70 50 78 55" stroke={isHovered ? "#ff6b47" : "#000"} strokeWidth="2" fill="none"/>
          </svg>
        );
      case 'ia':
        return (
          <svg viewBox="0 0 100 100" className={`${className} transition-all duration-300`}>
            <circle cx="50" cy="50" r="25" stroke={isHovered ? "#ff6b47" : "#000"} strokeWidth="2" fill="none"/>
            <circle cx="40" cy="45" r="3" stroke={isHovered ? "#ff6b47" : "#000"} strokeWidth="2" fill="none"/>
            <circle cx="60" cy="45" r="3" stroke={isHovered ? "#ff6b47" : "#000"} strokeWidth="2" fill="none"/>
            <path d="M40 60 Q50 65 60 60" stroke={isHovered ? "#ff6b47" : "#000"} strokeWidth="2" fill="none"/>
          </svg>
        );
      case 'firmas':
        return (
          <svg viewBox="0 0 100 100" className={`${className} transition-all duration-300`}>
            <path 
              d="M20 40 Q30 30 40 40 Q50 50 60 40 Q70 30 80 40" 
              stroke={isHovered ? "#ff6b47" : "#000"} 
              strokeWidth="2" 
              fill="none"
              strokeLinecap="round"
            />
            <path d="M25 60 L75 60" stroke={isHovered ? "#ff6b47" : "#000"} strokeWidth="1" fill="none"/>
          </svg>
        );
      case 'visual':
        return (
          <svg viewBox="0 0 100 100" className={`${className} transition-all duration-300`}>
            <circle cx="50" cy="50" r="20" stroke={isHovered ? "#ff6b47" : "#000"} strokeWidth="2" fill="none"/>
            <circle cx="50" cy="50" r="5" stroke={isHovered ? "#ff6b47" : "#000"} strokeWidth="2" fill="none"/>
            <path d="M30 30 L70 70 M70 30 L30 70" stroke={isHovered ? "#ff6b47" : "#000"} strokeWidth="2" fill="none"/>
          </svg>
        );
      case 'infantil':
        return (
          <svg viewBox="0 0 100 100" className={`${className} transition-all duration-300`}>
            <circle cx="50" cy="40" r="15" stroke={isHovered ? "#ff6b47" : "#000"} strokeWidth="2" fill="none"/>
            <circle cx="45" cy="37" r="2" stroke={isHovered ? "#ff6b47" : "#000"} strokeWidth="2" fill="none"/>
            <circle cx="55" cy="37" r="2" stroke={isHovered ? "#ff6b47" : "#000"} strokeWidth="2" fill="none"/>
            <path d="M45 45 Q50 48 55 45" stroke={isHovered ? "#ff6b47" : "#000"} strokeWidth="2" fill="none"/>
            <path d="M50 55 L50 75 M40 65 L50 70 L60 65" stroke={isHovered ? "#ff6b47" : "#000"} strokeWidth="2" fill="none"/>
          </svg>
        );
      case 'editorial':
        return (
          <svg viewBox="0 0 100 100" className={`${className} transition-all duration-300`}>
            <path d="M25 20 L75 20 L75 80 L25 80 Z" stroke={isHovered ? "#ff6b47" : "#000"} strokeWidth="2" fill="none"/>
            <path d="M35 35 L65 35 M35 45 L65 45 M35 55 L55 55" stroke={isHovered ? "#ff6b47" : "#000"} strokeWidth="2" fill="none"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return getIconPath();
};

export default HandDrawnIcon;
