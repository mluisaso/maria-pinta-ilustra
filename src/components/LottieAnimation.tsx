
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface LottieAnimationProps {
  className?: string;
  src?: string;
  onReady?: () => void;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ className = "", src, onReady }) => {
  // Use useEffect and useState to handle responsive behavior properly
  const [isMobile, setIsMobile] = React.useState<boolean | null>(null);
  
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    console.log('LottieAnimation mounted, isMobile:', window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const defaultMobileUrl = 'https://lottie.host/8a1eab2a-9091-455e-8129-1554b0db64de/g6WFBmQhgJ.json';
  const defaultDesktopUrl = 'https://lottie.host/77aae8ec-e054-4caa-864a-127a0f8f9b03/qWP2cfR7A0.json';
  
  // Don't render anything until we know the screen size
  if (isMobile === null) {
    return null;
  }
  
  const animationUrl = src || (isMobile ? defaultMobileUrl : defaultDesktopUrl);

  return (
    <div className={`${className} flex items-center justify-center`}>
      <Player
        autoplay
        loop
        src={animationUrl}
        style={{ width: '100%', height: 'auto', maxWidth: '800px' }}
        onEvent={(event) => {
          if (event === 'load' && onReady) {
            onReady();
          }
        }}
      />
    </div>
  );
};

export default LottieAnimation;
