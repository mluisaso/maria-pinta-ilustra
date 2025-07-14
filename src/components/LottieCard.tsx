import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface LottieCardProps {
  src: string;
  title: string;
  description: string;
}

const LottieCard: React.FC<LottieCardProps> = ({ src, title, description }) => {
  return (
    <div className="group cursor-pointer bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[200px] md:min-w-[300px] flex-shrink-0">
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <Player
          autoplay
          loop
          src={src}
          style={{ width: '100%', height: '100%' }}
        />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="relative p-2 md:p-3">
            <div className="bg-[#be1622] rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xs md:text-sm font-bold text-white mb-1 drop-shadow-lg leading-tight">{title}</h3>
              <p className="text-xs text-white/90 drop-shadow-md leading-tight hidden sm:block">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LottieCard;