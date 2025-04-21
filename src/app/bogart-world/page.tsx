"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

export default function ScrollSnapPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);

  const sectionCount = 3;
  const isAnimatingRef = useRef(false);

  const scrollToSection = (index: number) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const targetY = window.innerHeight * index;

    gsap.to(window, {
      scrollTo: { y: targetY },
      duration: 1.2,
      ease: "power3.inOut",
      onComplete: () => {
        isAnimatingRef.current = false;
        setCurrentSection(index);
      },
    });
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isAnimatingRef.current) return;

      const delta = e.deltaY;

      if (delta > 0 && currentSection < sectionCount - 1) {
        scrollToSection(currentSection + 1);
      } else if (delta < 0 && currentSection > 0) {
        scrollToSection(currentSection - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentSection]);

  return (
    <div ref={containerRef}>
      <section className="h-screen bg-red-500 flex justify-center items-center text-white text-5xl font-bold">
        Section 1
      </section>
      <section className="h-screen bg-blue-500 flex justify-center items-center text-white text-5xl font-bold">
        Section 2
      </section>
      <section className="h-screen bg-green-500 flex justify-center items-center text-white text-5xl font-bold">
        Section 3
      </section>
    </div>
  );
}
