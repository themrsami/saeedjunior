'use client';

import { useEffect, useRef } from 'react';

const SkillsSection = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;

    // Default speed and scroll direction for the marquee
    let speed = 1;
    let scrollDirection = 1;

    // Function to update the scroll speed and direction based on mouse wheel
    const handleScroll = (event) => {
      const delta = Math.sign(event.deltaY); // Positive for down, negative for up

      if (delta > 0) {
        speed = 4; // Increase speed when scrolling down
        scrollDirection = -1; // Scroll left on downward scroll
      } else {
        speed = 4; // Increase speed when scrolling up
        scrollDirection = 1; // Scroll right on upward scroll
      }

      // Reset the speed back to normal after 0.5 seconds
      setTimeout(() => {
        speed = 1;
      }, 500);

      // Update marquee speed and direction
      marqueeElement.style.animationDuration = `${10 / speed}s`; // Adjust the speed of the animation
      marqueeElement.style.animationDirection = scrollDirection > 0 ? 'normal' : 'reverse'; // Adjust direction
    };

    // Start animation
    const startMarquee = () => {
      marqueeElement.style.animationDuration = `${10 / speed}s`;
      marqueeElement.style.animationDirection = scrollDirection > 0 ? 'normal' : 'reverse';
    };

    // Attach event listener to the window, not just the section
    window.addEventListener('wheel', handleScroll);
    marqueeElement.addEventListener('animationiteration', startMarquee);

    return () => {
      // Clean up event listeners
      window.removeEventListener('wheel', handleScroll);
      marqueeElement.removeEventListener('animationiteration', startMarquee);
    };
  }, []);

  return (
    <section className="relative w-full h-[50vh] flex flex-col items-center justify-center py-24">
      {/* Horizontal line above the skills */}
      <div className="relative w-full mb-8">
        <hr className="border-gray-400" />
      </div>

      {/* Skills Section */}
      <div className="w-full overflow-hidden">
        <div
          ref={marqueeRef}
          className="marquee flex items-center justify-start space-x-16 whitespace-nowrap"
          style={{
            animation: 'scroll 15s linear infinite',
          }}
        >
          {/* Repeated skills for infinite scrolling */}
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <p
                key={index}
                className="text-7xl sm:text-8xl md:text-9xl flex items-center"
              >
                <span className="text-white">Graphic Design</span>
                <span className="mx-8 w-8 h-8 bg-[#FB4666] rounded-full inline-block"></span>
              </p>
            ))}
        </div>
      </div>

      {/* Horizontal line below the skills */}
      <div className="relative w-full mt-8">
        <hr className="border-gray-400" />
      </div>
    </section>
  );
};

export default SkillsSection;
