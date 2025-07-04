
import React, { useEffect, useRef, useState } from 'react';

interface LottieAnimationProps {
  className?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // URL específica proporcionada por el usuario
  const animationUrl = 'https://lottie.host/embed/e85655a6-e3ca-42ca-81c7-9581e5b343e9/E5CaLHOHvE.json';

  useEffect(() => {
    let isMounted = true;
    
    console.log('🎬 LottieAnimation: Loading animation from:', animationUrl);

    const loadLottieScript = () => {
      return new Promise<void>((resolve, reject) => {
        if (document.querySelector('script[src*="lottie-player"]')) {
          console.log('✅ Lottie script already loaded');
          resolve();
          return;
        }

        console.log('📦 Loading Lottie script...');
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
        script.async = true;
        script.onload = () => {
          console.log('✅ Lottie script loaded successfully');
          resolve();
        };
        script.onerror = () => {
          console.error('❌ Failed to load Lottie script');
          reject(new Error('Failed to load Lottie script'));
        };
        document.head.appendChild(script);
      });
    };

    const loadAnimation = async () => {
      try {
        await loadLottieScript();
        
        if (!isMounted || !containerRef.current) return;

        console.log('🔍 Testing animation URL:', animationUrl);
        
        // Create the lottie-player element
        const lottiePlayer = document.createElement('lottie-player');
        lottiePlayer.setAttribute('src', animationUrl);
        lottiePlayer.setAttribute('background', 'transparent');
        lottiePlayer.setAttribute('speed', '1');
        lottiePlayer.setAttribute('style', 'width: 100%; height: 100%;');
        lottiePlayer.setAttribute('loop', '');
        lottiePlayer.setAttribute('autoplay', '');

        // Add error handling for the lottie-player
        lottiePlayer.addEventListener('error', (e) => {
          console.error('❌ Lottie player error:', e);
          if (isMounted) {
            setHasError(true);
            setIsLoading(false);
          }
        });

        lottiePlayer.addEventListener('ready', () => {
          console.log('🎉 Lottie animation ready and playing!');
          console.log('✅ Successfully loaded URL:', animationUrl);
          if (isMounted) {
            setIsLoading(false);
            setHasError(false);
          }
        });

        // Clear container and add the player
        if (containerRef.current) {
          containerRef.current.innerHTML = '';
          containerRef.current.appendChild(lottiePlayer);
          console.log('🎬 Lottie player added to DOM');
        }

      } catch (error) {
        console.error('❌ Error loading Lottie animation:', error);
        if (isMounted) {
          setHasError(true);
          setIsLoading(false);
        }
      }
    };

    loadAnimation();

    return () => {
      isMounted = false;
    };
  }, [animationUrl]);

  // Fallback content when animation fails to load
  if (hasError) {
    return (
      <div className={`${className} flex items-center justify-center bg-gray-50 rounded-lg`}>
        <div className="text-center p-8">
          <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400" 
            alt="Mariatepinta ilustradora"
            className="w-full h-full object-cover rounded-lg opacity-75"
          />
          <p className="text-sm text-gray-500 mt-4">Animación en proceso...</p>
        </div>
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <div className={`${className} flex items-center justify-center bg-gray-50 rounded-lg`}>
        <div className="text-center p-8">
          <div className="animate-pulse">
            <div className="bg-gray-200 rounded-lg w-full h-32 mb-4"></div>
            <p className="text-sm text-gray-400">Cargando animación...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className={`${className}`}
    />
  );
};

export default LottieAnimation;
