'use client'
import React, { useState } from "react";
import PageLoader from "../components/PageLoader";

export default function About() {
    const [loading, setLoading] = useState(true);

    const handleLoaderComplete = () => {
        setLoading(false); // Hide loader and show Homepage
    };

    return (
        <>
            {loading && <PageLoader title='About' onComplete={handleLoaderComplete} />}
            {!loading && <div className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex justify-center items-center h-[90vh]'>Motion Designer & VFX Editor</div>}
        </>
    );
}
