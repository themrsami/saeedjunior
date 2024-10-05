'use client';

import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 1 : 100));
      }, 5);

      // GSAP animation for the progress bar
      gsap.to(".progress-bar", {
        width: `${progress}%`,
        duration: 0.2,
        ease: "power1.out",
      });

      return () => clearInterval(interval);
    } else {
      // Slide up the loader once the progress reaches 100%
      setTimeout(() => {
      gsap.to(".loader-container", {
        y: '-100%', // Move upward
        duration: 1, // Animation duration
        ease: "power1.out",
      }); // Add delay for smoother transition
      },500); // Hide the loader after the slide-up animation

      // Hide the loader after the slide-up animation
      setTimeout(() => setIsLoading(false), 500); // Add delay for smoother transition
    }
  }, [progress]);

  // Conditionally render the loader only if loading is true
  if (!isLoading) return null;

  return (
    <div className="loader-container flex flex-col justify-center items-center h-screen fixed z-50 w-screen bg-[#FB4566]">
      <div className="text-white text-[200px] font-semibold">{progress}</div>
      <div className="w-32 -mt-16 h-[1px] bg-gray-400 mt-6 rounded-full overflow-hidden">
        <div className="progress-bar h-full bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
