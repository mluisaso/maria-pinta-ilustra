
import React, { useEffect, useRef, useState } from 'react';

interface LottieAnimationProps {
  className?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);

  // Array de URLs para probar
  const animationUrls = [
    'https://lottie.host/e85655a6-e3ca-42ca-81c7-9581e5b343e9/E5CaLHOHvE.json',
    'https://lottie.host/dac6cfae-4b24-47ef-a4ec-137f0a5ead65/fUbwz02KWT.json',
    'https://lottie.host/embed/dac6cfae-4b24-47ef-a4ec-137f0a5ead65/fUbwz02KWT.json',
    'https://lottie.host/c0d8d67b-72a7-4481-a47e-cec4f2a5535f/WzrawLDU47.lottie',
    'https://lottie.host/embed/c0d8d67b-72a7-4481-a47e-cec4f2a5535f/WzrawLDU47.lottie'
  ];

  useEffect(() => {
    let isMounted = true;
    
    console.log('🎬 LottieAnimation: Starting to load animation...');
    console.log('🔗 Current URL index:', currentUrlIndex);
    console.log('🔗 Testing URL:', animationUrls[currentUrlIndex]);

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

    const tryNextUrl = () => {
      if (currentUrlIndex < animationUrls.length - 1) {
        console.log('🔄 Trying next URL...');
        setCurrentUrlIndex(prev => prev + 1);
        setHasError(false);
        setIsLoading(true);
      } else {
        console.log('❌ All URLs failed');
        setHasError(true);
        setIsLoading(false);
      }
    };

    const loadAnimation = async () => {
      try {
        await loadLottieScript();
        
        if (!isMounted || !containerRef.current) return;

        const currentUrl = animationUrls[currentUrlIndex];
        console.log('🔍 Testing animation URL:', currentUrl);
        
        // Test if the URL is accessible
        const response = await fetch(currentUrl);
        console.log('📡 Fetch response status:', response.status);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch animation: ${response.status}`);
        }

        // Check content type
        const contentType = response.headers.get('content-type');
        console.log('📄 Content type:', contentType);

        let animationData;
        if (currentUrl.endsWith('.lottie')) {
          // For .lottie files, we need to handle them differently
          console.log('🎯 Detected .lottie file format');
          animationData = await response.arrayBuffer();
        } else {
          // For JSON files
          animationData = await response.json();
          console.log('✅ Animation JSON loaded successfully:', Object.keys(animationData));
        }

        // Create the lottie-player element
        const lottiePlayer = document.createElement('lottie-player');
        lottiePlayer.setAttribute('src', currentUrl);
        lottiePlayer.setAttribute('background', 'transparent');
        lottiePlayer.setAttribute('speed', '1');
        lottiePlayer.setAttribute('style', 'width: 100%; height: 100%;');
        lottiePlayer.setAttribute('loop', '');
        lottiePlayer.setAttribute('autoplay', '');

        // Add error handling for the lottie-player
        lottiePlayer.addEventListener('error', (e) => {
          console.error('❌ Lottie player error:', e);
          if (isMounted) {
            tryNextUrl();
          }
        });

        lottiePlayer.addEventListener('ready', () => {
          console.log('🎉 Lottie animation ready and playing!');
          console.log('✅ Successfully loaded URL:', currentUrl);
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
          tryNextUrl();
        }
      }
    };

    loadAnimation();

    return () => {
      isMounted = false;
    };
  }, [currentUrlIndex]);

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
