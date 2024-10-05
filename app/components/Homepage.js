'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Homepage = () => {
  const headingRef = useRef(null);
  const locationRef = useRef(null);
  const profileImageRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    // Animate elements when the component mounts
    gsap.fromTo(
      headingRef.current,
      { y: -50, opacity: 0 }, // Starting position and opacity
      {
        duration: 0.6,
        y: 0,
        opacity: 1,
        ease: 'power3.out',
      }
    );

    gsap.fromTo(
      locationRef.current,
      { y: -50, opacity: 0 },
      {
        duration: 0.6,
        y: 0,
        opacity: 1,
        ease: 'power3.out',
        delay: 0.2, // Slight delay for a staggered effect
      }
    );

    gsap.fromTo(
      profileImageRef.current,
      { scale: 0.5, opacity: 0 },
      {
        duration: 0.8,
        scale: 1,
        opacity: 1,
        ease: 'power3.out',
        delay: 0.4, // Slight delay for a staggered effect
      }
    );

    gsap.fromTo(
      descriptionRef.current,
      { y: -50, opacity: 0 },
      {
        duration: 0.6,
        y: 0,
        opacity: 1,
        ease: 'power3.out',
        delay: 0.6, // Slight delay for a staggered effect
      }
    );
  }, []);

  return (
    <div className="px-4 flex flex-col md:flex-row justify-center items-center h-screen text-white text-center whitespace-nowrap">
      {/* Left Side (Text Section) */}
      <div className="flex flex-col justify-center -space-y-2">
        <h1 ref={headingRef} className="text-7xl md:text-7xl lg:text-clamp text-center md:text-right">Saeed Junior</h1>
        <div ref={locationRef} className='text-center md:text-right'>
          <h2 className="text-lg md:text-xl mini-text">Based in Dubai</h2>
          <div className='mini-text text-center md:text-right justify-center items-center'>
            <span className='animate-pulse'>🟢 </span> Available for a full-time position
          </div>
        </div>
      </div>

      {/* Middle Section (Image with Animated Gradient Circle) */}
      <div ref={profileImageRef} className="relative flex items-center justify-center p-12">
        <div className="gradient-circle max-w-[800px] max-h-[800px] flex items-center justify-center">
          <img
            src="/profile.png"
            alt="Profile"
            className="rounded-full w-[95%] h-[95%] object-cover"
          />
        </div>
      </div>

      {/* Right Side (Text Section) */}
      <div ref={descriptionRef} className="flex flex-col justify-center items-center mt-4 md:mt-0 text-center md:text-left">
        <p className="text-5xl md:text-5xl lg:text-clamp md:flex md:flex-col">
          <span>Graphics Designer </span>
          <span>& VFX Artist</span>
        </p>
      </div>
    </div>
  );
};

export default Homepage;
