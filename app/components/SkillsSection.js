import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import Skillsheading from "./Skillsheading";
import SkillsSectionHeading from "./SkillsSectionHeading";
import Link from "next/link";

export default function ScrollBasedVelocity() {
  return (
    <div className="py-4 px-2">
      <Skillsheading/>

      {/* Graphic Designer */}
      <Link href="/graphics" className="group relative">
        <VelocityScroll
          text="Graphic Designer"
          direction="ltr"
          default_velocity={0.5}
          textGap={120}
          scrollVelocityFactor={3}
          element={
            <span className="w-8 h-8 rounded-full bg-[#F04462] inline-block transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
          }
          className="font-display text-center skillset-text mx-8 text-white drop-shadow-sm md:text-[150px] leading-[10rem] sm:leading-[15rem] md:leading-[20rem] lg:leading-[25rem] opacity-50 group-hover:opacity-100 transition-opacity duration-300"
        />
        {/* Video element */}
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <video className="w-3/4 h-3/4" src="/video1.webm" autoPlay loop muted />
        </div>
      </Link>

      <SkillsSectionHeading />

      {/* VFX Artist */}
      <Link href="/vfx" className="group relative">
        <VelocityScroll
          text="VFX Artist"
          direction="rtl"
          default_velocity={0.5}
          scrollVelocityFactor={3}
          textGap={120}
          element={
            <span className="w-8 h-8 rounded-full bg-[#F04462] inline-block transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
          }
          className="font-display text-center mx-8 skillset-text text-white drop-shadow-sm md:text-[150px] leading-[10rem] sm:leading-[15rem] md:leading-[20rem] lg:leading-[25rem] opacity-50 group-hover:opacity-100 transition-opacity duration-300"
        />
        {/* Video element */}
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <video className="w-3/4 h-3/4" src="/video2.webm" autoPlay loop muted />
        </div>
      </Link>

      <SkillsSectionHeading />

      {/* Motion Graphics */}
      <Link href="/motion" className="group relative">
        <VelocityScroll
          text="Motion Graphics"
          direction="ltr"
          default_velocity={0.5}
          scrollVelocityFactor={3}
          textGap={120}
          element={
            <span className="w-8 h-8 rounded-full bg-[#F04462] inline-block transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
          }
          className="font-display text-center mx-8 skillset-text text-white drop-shadow-sm md:text-[150px] leading-[10rem] sm:leading-[15rem] md:leading-[20rem] lg:leading-[25rem] opacity-50 group-hover:opacity-100 transition-opacity duration-300"
        />
        {/* Video element */}
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <video className="w-3/4 h-3/4" src="/video3.webm" autoPlay loop muted />
        </div>
      </Link>

      <SkillsSectionHeading />

      {/* 3D Animation */}
      <Link href="/3danimation" className="group relative">
        <VelocityScroll
          text="3D Animation"
          direction="rtl"
          default_velocity={0.5}
          scrollVelocityFactor={3}
          textGap={120}
          element={
            <span className="w-8 h-8 rounded-full bg-[#F04462] inline-block transition-all duration-300 group-hover:w-4 group-hover:h-4"></span>
          }
          className="font-display text-center mx-8 skillset-text text-white drop-shadow-sm md:text-[150px] leading-[10rem] sm:leading-[15rem] md:leading-[20rem] lg:leading-[25rem] opacity-50 group-hover:opacity-100 transition-opacity duration-300"
        />
        {/* Video element */}
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <video className="w-3/4 h-3/4" src="/video4.webm" autoPlay loop muted />
        </div>
      </Link>
    </div>
  );
}
