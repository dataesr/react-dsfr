import { useState, useEffect } from 'react';

const useViewport = () => {
  const [size, setSize] = React.useState({width: null, height: null});

  useEffect(() => {
    const handleWindowResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleWindowResize(); // to initialize values on mount
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return size;
};

export default useViewport;
