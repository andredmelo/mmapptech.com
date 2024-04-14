import { useState, useEffect } from 'react';

//This custom hook listens for resize events and updates the state with the current viewport dimensions without using window or document
export const useViewportSize = () => {
  const [size, setSize] = useState({ widthViewport: 0, heightViewport: 0 });

  useEffect(() => {
    const updateSize = () => {
      setSize({ widthViewport: window.innerWidth, heightViewport: window.innerHeight });
    };

    //window.addEventListener('resize', updateSize);
    updateSize(); // Initialize size

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
};