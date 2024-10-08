'use client'
import React, { useState } from "react";
import PageLoader from "../components/PageLoader";
import Skillshero from "../components/Skillshero";

export default function Work() {
    const [loading, setLoading] = useState(true);

    const handleLoaderComplete = () => {
        setLoading(false); // Hide loader and show Homepage
    };

    return (
        <>
            {loading && <PageLoader title='Work' onComplete={handleLoaderComplete} />}
            {!loading && <Skillshero/>}
        </>
    );
}
