import { useState, useEffect } from 'react';
import loadingGif from '../assets/decor/loading.gif';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time - in production, this would be based on actual loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-pure-black">
      <div className="flex flex-col items-center justify-center">
        <img 
          src={loadingGif} 
          alt="Loading..." 
          className="w-32 h-32 object-contain"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;