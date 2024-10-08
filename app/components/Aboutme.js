'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Circle from './Circle';

const Aboutme = () => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const words = paragraphRef.current.querySelectorAll('span'); // Select all span elements
    
    // GSAP Timeline for scroll animation
    gsap.timeline({
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: 'top 80%', // Trigger when the top of the element reaches 80% of the viewport height
        end: 'bottom 20%',
        scrub: 1, // Smooth scrubbing
      }
    }).to(words, {
      opacity: 1,
      duration: 1,
      stagger: 0.2, // Delay each word reveal by 0.2 seconds
      ease: 'power2.out',
    });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center py-4 px-4">
      <div className="w-full md:w-[65%]"> {/* Set width to 70% and center it */}
        <p
          ref={paragraphRef}
          className="aboutme-text text-left text-3xl sm:text-4xl lg:text-5xl leading-tight space-y-4 text-white"
        >
          <span className="opacity-10 sm:pl-40">I&apos;m</span> <span className="opacity-10">a</span>{' '}
          <span className="opacity-10">Dubai-based</span> <span className="opacity-10 font-bold">graphic designer</span>{' '}
          <span className="opacity-10">and</span> <span className="opacity-10 font-bold">VFX artist,</span>{' '}
          <span className="opacity-10">with</span> <span className="opacity-10">expertise in</span>{' '}
          <span className="opacity-10 font-bold">3D animation</span> <span className="opacity-10">and</span>{' '}
          <span className="opacity-10 font-bold">motion graphics.</span>{' '}
          <span className="opacity-10">I</span> <span className="opacity-10">help</span>{' '}
          <span className="opacity-10">bring</span> <span className="opacity-10 font-bold">creative visions</span>{' '}
          <span className="opacity-10">to</span> <span className="opacity-10 font-bold">life</span>{' '}
          <span className="opacity-10">through</span> <span className="opacity-10">cutting-edge technology.</span>{' '}
          <span className="opacity-10">Available for</span> <span className="opacity-10 font-bold">freelance</span>{' '}
          <span className="opacity-10">and</span> <span className="opacity-10 font-bold">full-time positions.</span>
        </p>
      </div>
      <Link href='/about' className='flex flex-row items-center space-x-2 group py-16'>
        <Circle />
        <div className='aboutme-text tracking-normal leading-tight text-lg sm:text-xl md:text-2xl tracking-wider transition ease-in-out delay-75 hover:glow home-link'>
          <span className="home-link-text text-white"> Learn more</span>
          <span className="home-link-hover-text-logo"> Learn more</span>
        </div>
      </Link>
    </section>
  );
};

export default Aboutme;
