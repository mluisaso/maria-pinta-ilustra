
import { useEffect } from 'react';

interface RedirectComponentProps {
  to: string;
}

const RedirectComponent: React.FC<RedirectComponentProps> = ({ to }) => {
  useEffect(() => {
    // Use replace instead of assign for better SEO (acts more like a 301)
    window.location.replace(to);
  }, [to]);

  // Show a brief loading message while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <p className="text-gray-600">Redirigiendo...</p>
      </div>
    </div>
  );
};

export default RedirectComponent;
