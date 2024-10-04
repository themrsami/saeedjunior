import React from 'react';

const Homepage = () => {
  return (
    <div className="px-4 flex flex-col md:flex-row justify-center items-center h-screen text-white text-center whitespace-nowrap">
      {/* Left Side (Text Section) */}
      <div className="flex flex-col justify-center -space-y-2">
        <h1 className="text-7xl md:text-7xl lg:text-clamp text-center md:text-right">Saeed Junior</h1>
        <div className='text-center md:text-right'>
          <h2 className="text-lg md:text-xl mini-text">Based in Dubai</h2>
          <p className='text-lg md:text-xl flex gap-2 justify-center items-center mini-text'>
            <span className='w-4 h-4 rounded-full bg-[#94F77C] animate-pulse'></span>Available for a full-time position</p>
        </div>
      </div>

      {/* Middle Section (Image with Animated Gradient Circle) */}
      <div className="relative flex items-center justify-center p-12">
        <div className="gradient-circle max-w-[800px] max-h-[800px] flex items-center justify-center">
          <img
            src="/profile.png"
            alt="Profile"
            className="rounded-full w-[95%] h-[95%] object-cover"
          />
        </div>
      </div>


      {/* Right Side (Text Section) */}
      <div className="flex flex-col justify-center items-center mt-4 md:mt-0 text-center md:text-left">
        <p className="text-5xl md:text-5xl lg:text-clamp md:flex md:flex-col">
          <span>Graphics Designer </span>
          <span>& VFX Artist</span>
        </p>
      </div>
    </div>
  );
};

export default Homepage;
