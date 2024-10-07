'use client'
import React, { useState } from "react";
import PageLoader from "./components/PageLoader";
import Homepage from "./components/Homepage";
import Aboutme from "./components/Aboutme";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
    const [loading, setLoading] = useState(true);

    const handleLoaderComplete = () => {
        setLoading(false); // Hide loader and show Homepage
    };

    return (
        <>
            {loading && <PageLoader title='Home' onComplete={handleLoaderComplete} />}
            {!loading && <Homepage />}
            {!loading && <Aboutme />}
            {!loading && <SkillsSection />}
        </>
    );
}
