
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface LottieAnimationProps {
  className?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ className = "" }) => {
  const animationUrl = 'https://lottie.host/e85655a6-e3ca-42ca-81c7-9581e5b343e9/E5CaLHOHvE.json';

  return (
    <div className={`${className} flex items-center justify-center`}>
      <Player
        autoplay
        loop
        src={animationUrl}
        style={{ height: '100%', width: '100%', maxHeight: '300px', maxWidth: '300px' }}
        onEvent={(event) => {
          if (event === 'ready') {
            console.log('🎉 Lottie animation ready and playing!');
          }
        }}
      />
    </div>
  );
};

export default LottieAnimation;
