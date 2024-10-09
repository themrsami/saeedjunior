'use client'
import Homepage from "./components/Homepage";
import Aboutme from "./components/Aboutme";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";
import { useAppContext } from "./Context/AppContext";

export default function Home() {
    const {isLoading, setIsLoading} = useAppContext();

    return (
        <>
            <Homepage />
            <Aboutme />
            <SkillsSection />
            <Footer />
        </>
    );
}
