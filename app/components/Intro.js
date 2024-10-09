'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Circle from './Circle';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Intro = () => {
    const { ref, inView } = useInView({
        threshold: 0.1, // Adjust this value to change when the animation triggers
        triggerOnce: true, // Animation triggers only once when it comes into view
    });

    // Define animation variants
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 w-full max-w-full px-16">
                <div className="col-span-1 flex justify-center items-center">
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={variants}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src="/SaeedProfile.png"
                            alt="Profile Picture"
                            width={400}
                            height={400}
                            className="rounded-full"
                        />
                    </motion.div>
                </div>
                <div className="col-span-2 flex flex-col justify-center items-start text-left">
                    <motion.h1
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={variants}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl md:text-6xl mb-4 px-4 mini-text md:pr-20"
                    >
                        I craft digital experiences <br />
                        combining <strong>design</strong>, <strong>motion</strong> & <strong>development</strong>
                    </motion.h1>
                    <motion.p
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={variants}
                        transition={{ duration: 0.5 }}
                        className="text-xl sm:text-2xl md:text-3xl py-16 px-4 mb-4 mini-text md:pr-20"
                    >
                        Hi, I'm John Doe, a passionate web developer with a flair for motion design, VFX, and 3D animation. My expertise in crafting dynamic visuals enhances user experiences, making applications not only functional but also visually engaging. I specialize in JavaScript, React, and Next.js, combining technical skills with artistic vision.
                    </motion.p>
                    <Link href='/Saeed_CV.pdf' target="_blank" className='flex flex-row items-center px-4 space-x-2 group'>
                        <Circle />
                        <div className='aboutme-text tracking-normal leading-tight text-lg sm:text-xl md:text-2xl tracking-wider transition ease-in-out delay-75 hover:glow home-link'>
                            <span className="home-link-text text-white">Download CV</span>
                            <span className="home-link-hover-text-logo">Download CV</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Intro;
