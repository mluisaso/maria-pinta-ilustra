
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface LottieAnimationProps {
  className?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ className = "" }) => {
  const animationUrl = 'https://lottie.host/8d1c71a2-7d0b-4383-b1e2-fd8f12a416a3/Co9ewEeXFk.json';

  return (
    <div className={`${className} flex items-center justify-center`}>
      <Player
        autoplay
        loop
        src={animationUrl}
        style={{ width: '100%', height: 'auto', maxWidth: '400px' }}
      />
    </div>
  );
};

export default LottieAnimation;
