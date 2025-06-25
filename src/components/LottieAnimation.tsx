
import React, { useEffect, useRef } from 'react';

interface LottieAnimationProps {
  className?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = `
        <lottie-player 
          src="https://lottie.host/embed/e85655a6-e3ca-42ca-81c7-9581e5b343e9/E5CaLHOHvE.json"
          background="transparent"
          speed="1"
          style="width: 100%; height: 100%;"
          loop
          autoplay>
        </lottie-player>
      `;
    }
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`${className}`}
    />
  );
};

export default LottieAnimation;
