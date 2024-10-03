'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PageLoader = (props) => {
    const targetRef = useRef(null);

    useEffect(() => {
        gsap.to(targetRef.current, {
            duration: 1.2,
            ease: "power3.inOut",
            y: '-100%', // Move the loader out of view
            onComplete: () => {
                // You can add logic here to show the main content of the app
                // For example, setting a state that toggles visibility of other components
            }
        });
    }, []);

    return (
        <div
            ref={targetRef}
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
                fontSize: '8rem',
                textAlign: 'center',
                zIndex: 9999 // Ensure it covers everything else
            }}
        >
            {props.title}
        </div>
    );
};

export default PageLoader;
