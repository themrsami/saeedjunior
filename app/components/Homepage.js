'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const Homepage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initially hide the container and set it below the viewport
    gsap.set(containerRef.current, { opacity: 0, y: 200, visibility: 'hidden' });

    // Animate content from bottom to its original position
    const timeline = gsap.timeline({
      delay: 0.2, // Delay before starting the animation (optional)
    });

    timeline.to(containerRef.current, {
      y: 0,         // Move to original position
      opacity: 1,   // Fade in
      visibility: 'visible', // Make visible during animation
      duration: 1.2, // Duration of the animation
      ease: 'power2.out', // Easing for smooth animation
    });

    return () => {
      timeline.kill(); // Cleanup animation on unmount
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="px-4 flex flex-col md:flex-row justify-center items-center h-screen text-white text-center whitespace-nowrap"
    >
      {/* Left Side (Text Section) */}
      <div className="flex flex-col justify-center -space-y-2">
        <h1 className="text-7xl md:text-7xl lg:text-headingclamp text-center md:text-right">Saeed Ijaz</h1>
        <div className='text-center md:text-right'>
          <h2 className="text-lg md:text-xl mini-text">Based in Dubai</h2>
          <div className='mini-text text-center md:text-right justify-center items-center'>
            <span className="split-wrap line">
              <span
                className="split-inner"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate3d(0px, 0px, 0px)"
                }}
              >
                <i className="available" />
              </span>
            </span> Available for a full-time position
          </div>
        </div>
      </div>

      {/* Middle Section (Image with Animated Gradient Circle) */}
      <Image
        src="/skull.png"
        alt="Profile"
        width={500}
        height={500}
        className="rounded-full m-12"
      />

      {/* Right Side (Text Section) */}
      <div className="flex flex-col justify-center items-center mt-4 md:mt-0 text-center md:text-left">
        <p className="text-5xl md:text-5xl lg:text-clamp md:flex md:flex-col">
          <span>Digital Designer </span>
          <span>& Content Producer</span>
        </p>
      </div>
    </div>
  );
};

export default Homepage;
