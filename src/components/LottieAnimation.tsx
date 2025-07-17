
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface LottieAnimationProps {
  className?: string;
  src?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ className = "", src }) => {
  // Use useEffect and useState to handle responsive behavior properly
  const [isMobile, setIsMobile] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    
    // Add a small delay to prevent flashing
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  const defaultMobileUrl = 'https://lottie.host/8a1eab2a-9091-455e-8129-1554b0db64de/g6WFBmQhgJ.json';
  const defaultDesktopUrl = 'https://lottie.host/77aae8ec-e054-4caa-864a-127a0f8f9b03/qWP2cfR7A0.json';
  
  const animationUrl = src || (isMobile ? defaultMobileUrl : defaultDesktopUrl);

  if (!isLoaded) {
    return <div className={`${className} flex items-center justify-center`} style={{ height: '400px' }} />;
  }

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
