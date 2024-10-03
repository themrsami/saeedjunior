'use client'

import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 1 : 100));
      }, 20);

      // GSAP animation for the progress bar
      gsap.to(".progress-bar", {
        width: `${progress}%`,
        duration: 0.1,
        ease: "power1.out",
      });

      return () => clearInterval(interval);
    } else {
      // Hide the loader after completion
      setTimeout(() => setIsLoading(false), 500); // Add delay for smoother transition
    }
  }, [progress]);

  // Conditionally render the loader only if loading is true
  if (!isLoading) return null;

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#FB4566]">
      <div className="text-white text-[200px]">{progress}</div>
      <div className="w-60 h-[3px] bg-white mt-6 rounded-full overflow-hidden">
        <div className="progress-bar h-full bg-gray-800 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
