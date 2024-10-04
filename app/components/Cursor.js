'use client'
import { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const cursorStyle = {
    position: 'fixed',
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: '30px', // Adjust size as needed
    height: '30px',
    pointerEvents: 'none', // So the cursor doesn't block clicks
    transform: 'translate(-50%, -50%)', // Centers the cursor image on the pointer
    zIndex: 9999, // Ensure it's always on top
  };

  return (
    <img
      src="/cursor.svg" // You can also use "/cursor.png" if using a PNG
      alt="Cursor"
      style={cursorStyle}
    />
  );
};

export default Cursor;
