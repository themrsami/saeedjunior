'use client'; // Ensure this is a client-side component
import React from 'react';
import { motion } from 'framer-motion';
import SkillsSection from './SkillsSection';
import Footer from './Footer';

const Skillshero = () => {
  return (
    <>
      <motion.div
        className='text-white h-[70vh] text-[70px] sm:text-[100px] md:text-[160px] flex justify-center items-center -mb-48'
        initial={{ y: -100, opacity: 0 }} // Initial state
        animate={{ y: 0, opacity: 1 }} // Animate to this state
        transition={{ duration: 1, ease: 'easeOut' }} // Transition properties
      >
        Selected Work
      </motion.div>
      <SkillsSection />
      <Footer />
    </>
  );
};

export default Skillshero;
