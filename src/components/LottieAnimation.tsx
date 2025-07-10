
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface LottieAnimationProps {
  className?: string;
  src?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ className = "", src }) => {
  const animationUrl = src || 'https://lottie.host/957340c6-76c6-4058-9d0b-3d5529dc779f/VJhR8RxEg0.json';

  return (
    <div className={`${className} flex items-center justify-center`}>
      <Player
        autoplay
        loop
        src={animationUrl}
        style={{ width: '100%', height: 'auto', maxWidth: '800px' }}
      />
    </div>
  );
};

export default LottieAnimation;
