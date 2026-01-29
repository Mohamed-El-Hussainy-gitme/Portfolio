"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import ScrollScene from "../../components/ScrollScene";
import OutroSection from "../../components/OutroSection";
import { useParallax } from "../../core/hooks/useParallax";

const OutroScene: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  const { parallaxY } = useParallax({
    ref: backgroundRef as unknown as React.RefObject<HTMLElement | null>,
    distance: 40,
  });

  return (
    <ScrollScene
      id="outro"
      backgroundElement={
        <motion.div
          ref={backgroundRef}
          className="h-full w-full"
          style={{ y: parallaxY }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0,rgba(94,234,212,0.28),transparent_60%),radial-gradient(circle_at_50%_100%,rgba(56,189,248,0.24),transparent_60%)]" />
        </motion.div>
      }
    >
      <OutroSection />
    </ScrollScene>
  );
};

export default OutroScene;
