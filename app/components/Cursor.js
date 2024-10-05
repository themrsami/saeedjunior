'use client'
import { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const updateMousePosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  // Styles for the solid dot (small)
  const dotStyle1 = {
    position: 'fixed',
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: '4px',
    height: '4px',
    backgroundColor: 'white',
    borderRadius: '50%', // Solid dot
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)', // Center the dot on the cursor
    transition: 'transform 0.7s ease', // Smooth transition for movement
    zIndex: 9999,
  };

  // Styles for the hollow dot (large)
  const dotStyle2 = {
    position: 'fixed',
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: hovering ? '80px' : '50px', // Expand radius on hover
    height: hovering ? '80px' : '50px',
    border: '1px solid white', // Hollow effect
    opacity: 0.3, // Transparent effect
    borderRadius: '50%', // Circle shape
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)', // Center the dot on the cursor
    transition: 'width 0.5s ease, height 0.5s ease', // Smooth transition for size change
    zIndex: 9998, // Lower z-index for the larger dot
  };

  // Add event listeners to links for hover effect
  useEffect(() => {
    const links = document.querySelectorAll('a'); // Select all links

    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div style={dotStyle1} />
      <div style={dotStyle2} />
    </>
  );
};

export default Cursor;
