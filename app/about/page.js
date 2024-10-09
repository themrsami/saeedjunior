'use client';

import { motion } from 'framer-motion';
import Intro from '../components/Intro';
import AboutSkills from '../components/AboutSkills';
import Toolbox from '../components/Toolbox';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
        <div className="relative h-[100vh] flex flex-col gap-20 justify-center items-center">
        <motion.div
            className='text-white z-10 flex justify-center items-center'
            style={{
            fontSize: 'clamp(50px, calc(100vw / 8), 450px)', // Font size settings
            }}
            initial={{ y: 50, opacity: 0 }} // Initial state
            animate={{ y: 0, opacity: 1 }} // Animate to this state
            transition={{ duration: 1, ease: 'easeOut' }} // Transition properties
        >
            Digital Designer & Content Creator
        </motion.div>
        <video
            className="absolute inset-0 w-full h-full opacity-50"
            autoPlay
            loop
            muted
            src="/video1.webm"
        />
        {/* Scroll Indicator */}
        <div className='-mb-40'>
            <div className="mouse">
                <div className="scrollWheel"></div>
            </div>
        </div>
        </div>
        <Intro />
        <AboutSkills />
        <Toolbox />
        <Experience />
        <Footer />
    </>
  );
}
