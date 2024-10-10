'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Homepage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initially hide the container and animate it
    gsap.set(containerRef.current, { visibility: 'hidden' }); // Initially set to hidden

    gsap.fromTo(
      containerRef.current,
      { y: 200, opacity: 0, visibility: 'visible' }, // Start hidden and from below
      {
        duration: 1.2, // Smooth transition time
        y: 0, // End at normal position
        opacity: 1, // Fade in smoothly
        ease: 'power2.out', // Smooth ease effect for fluid motion
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="px-4 flex flex-col md:flex-row justify-center items-center h-screen text-white text-center whitespace-nowrap"
    >
      {/* Left Side (Text Section) */}
      <div className="flex flex-col justify-center -space-y-2">
        <h1 className="text-7xl md:text-7xl lg:text-clamp text-center md:text-right">Saeed Ijaz</h1>
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
      <div className="relative flex items-center justify-center p-6 m-4 border-2 border-[#FB4F66] rounded-full">
        <div className="gradient-circle max-w-[650px] max-h-[650px] flex items-center justify-center">
          <img
            src="/Skull.png"
            alt="Profile"
            className="h-full w-full object-cover rounded-full -mb-12 mt-12"
          />
        </div>
      </div>

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
