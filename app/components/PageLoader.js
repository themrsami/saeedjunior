'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PageLoader = ({ title, onComplete }) => {
    const targetRef = useRef(null);

    useEffect(() => {
        // Animate loader into view
        gsap.fromTo(targetRef.current, 
            {
                y: '100%', // Start below the viewport
                borderRadius: '0%', // Start with sharp corners
            }, 
            {
                duration: 0.6, // Faster appearance
                ease: "power3.inOut",
                y: '0%', // Move to its original position
            }
        );

        // Slide out the loader after a delay (you can adjust the timing)
        const slideOutTimeout = setTimeout(() => {
            gsap.to(targetRef.current, {
                duration: 0.6, // Faster disappearance
                ease: "power3.inOut",
                y: '-100%', // Move the loader out of view
                onComplete: () => {
                    // Call the onComplete function when the animation is done
                    if (onComplete) onComplete();
                }
            });
        }, 800); // Adjust delay as needed

        return () => clearTimeout(slideOutTimeout); // Cleanup timeout on unmount
    }, [onComplete]);

    return (
        <div
            ref={targetRef}
            className='font-semibold'
            style={{
                backgroundColor: '#FB4566',
                width: '100vw',
                height: '100vh',
                position: 'fixed', // Use fixed positioning
                top: 0,
                left: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '12rem',
                textAlign: 'center',
                zIndex: 10 // Ensure it covers everything else
            }}
        >
            {title}
        </div>
    );
};

export default PageLoader;
