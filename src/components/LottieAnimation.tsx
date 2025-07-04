
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface LottieAnimationProps {
  className?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ className = "" }) => {
  // URL específica proporcionada por el usuario
  const animationUrl = 'https://lottie.host/embed/e85655a6-e3ca-42ca-81c7-9581e5b343e9/E5CaLHOHvE.json';

  const handleError = (error: any) => {
    console.error('❌ Lottie animation error:', error);
  };

  const handleReady = () => {
    console.log('🎉 Lottie animation ready and playing!');
    console.log('✅ Successfully loaded URL:', animationUrl);
  };

  return (
    <div className={`${className} flex items-center justify-center`}>
      <Player
        autoplay
        loop
        src={animationUrl}
        style={{ height: '100%', width: '100%' }}
        onEvent={(event) => {
          if (event === 'ready') {
            handleReady();
          }
        }}
        onError={handleError}
      >
        {/* Fallback content */}
        <div className="flex items-center justify-center bg-gray-50 rounded-lg w-full h-full">
          <div className="text-center p-8">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400" 
              alt="Mariatepinta ilustradora"
              className="w-full h-full object-cover rounded-lg opacity-75"
            />
            <p className="text-sm text-gray-500 mt-4">Cargando animación...</p>
          </div>
        </div>
      </Player>
    </div>
  );
};

export default LottieAnimation;
