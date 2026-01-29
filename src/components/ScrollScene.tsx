"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollSceneProps {
  id: string;
  children: React.ReactNode;
  backgroundElement?: React.ReactNode;
}

const ScrollScene: React.FC<ScrollSceneProps> = ({
  id,
  children,
  backgroundElement,
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const section = sectionRef.current;
    const content = contentRef.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 40%",
            scrub: 1.1,
          },
        }
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="scroll-scene relative min-h-screen w-full overflow-hidden bg-slate-950"
    >
      {/* الخلفية السينمائية لكل سكشن */}
      {backgroundElement && (
        <div className="pointer-events-none absolute inset-0 z-0">
          {backgroundElement}
        </div>
      )}

      {/* بدون padding هنا – السكشن الداخلي هو اللي يتحكم في المسافات */}
      <motion.div ref={contentRef} className="relative z-10 w-full">
        {children}
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
    </section>
  );
};

export default ScrollScene;
