
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface LottieAnimationProps {
  className?: string;
  src?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ className = "", src }) => {
  // Use useEffect and useState to handle responsive behavior properly
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const defaultMobileUrl = 'https://lottie.host/98c19398-6e01-46db-b0e1-553966cc3640/2xNMFHPUIP.json';
  const defaultDesktopUrl = 'https://lottie.host/957340c6-76c6-4058-9d0b-3d5529dc779f/VJhR8RxEg0.json';
  
  const animationUrl = src || (isMobile ? defaultMobileUrl : defaultDesktopUrl);

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
