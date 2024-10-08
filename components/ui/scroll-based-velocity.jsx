"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

import { cn } from "@/lib/utils";

export const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function VelocityScroll({
  text,
  default_velocity = 5,
  scrollVelocityFactor = 1, // New prop for controlling scroll speed
  direction = "ltr", // New direction prop with default 'ltr'
  className,
  textGap = 20, // Gap between repeated text
  element = <span>-</span>, // New prop for separating text
}) {
  function ParallaxText({
    children,
    baseVelocity = 100,
    className,
    scrollVelocityFactor // Receive the scroll velocity factor prop
  }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });

    const [repetitions, setRepetitions] = useState(1);
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
      const calculateRepetitions = () => {
        if (containerRef.current && textRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          const textWidth = textRef.current.offsetWidth;
          const newRepetitions = Math.ceil(containerWidth / textWidth) + 2;
          setRepetitions(newRepetitions);
        }
      };

      calculateRepetitions();

      window.addEventListener("resize", calculateRepetitions);
      return () => window.removeEventListener("resize", calculateRepetitions);
    }, [children]);

    const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

    const directionFactor = React.useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      // Adjust moveBy based on the scrollVelocityFactor
      moveBy += directionFactor.current * moveBy * velocityFactor.get() * scrollVelocityFactor;

      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div className="w-full overflow-hidden whitespace-nowrap" ref={containerRef}>
        <motion.div className={cn("inline-block", className)} style={{ x }}>
          {Array.from({ length: repetitions }).map((_, i) => (
            <React.Fragment key={i}>
              <span
                ref={i === 0 ? textRef : null}
                style={{ marginRight: `${textGap}px` }} // Gap between text repetitions
              >
                {children}
              </span>
              {i < repetitions - 1 && (
                <span
                  style={{ marginRight: `${textGap}px` }}
                  className="inline-block align-middle" // Ensure the span is inline-block and vertically centered
                >
                  {element}
                </span>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    );
  }

  // Determine the base velocity based on the direction
  const baseVelocity = direction === "ltr" ? default_velocity : -default_velocity;

  return (
    <section className="relative w-full">
      <ParallaxText baseVelocity={baseVelocity} className={className} scrollVelocityFactor={scrollVelocityFactor}>
        {text}
      </ParallaxText>
    </section>
  );
}