import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface LottieAnimationProps {
  className?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ className = "" }) => {
  const animationUrl = 'https://lottie.host/e85655a6-e3ca-42ca-81c7-9581e5b343e9/E5CaLHOHvE.json';

  return (
    <div className={`${className} relative w-full h-full overflow-hidden flex items-center justify-center`}>
      <Player
        autoplay
        loop
        src={animationUrl}
        style={{
          width: '100%',
          height: '100%',
        }}
        className="object-contain"
      />
    </div>
  );
};

export default LottieAnimation;
