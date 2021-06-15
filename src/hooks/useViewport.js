import { useState, useEffect } from 'react';

const useViewport = () => {
  const [size, setSize] = useState(
    {
      width: window ? window.innerWidth : null,
      height: window ? window.innerHeight : null,
    },
  );

  useEffect(() => {
    const handleWindowResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return size;
};

export default useViewport;
