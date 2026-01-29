import React from "react";
import ScrollScene from "../../components/ScrollScene";
import HeroSection from "../../components/HeroSection";

const HeroScene: React.FC = () => {
  const isArabic = false; // Set based on your language detection logic
  const kicker = ""; // Set your kicker text here
  return (
    <ScrollScene
      id="hero"
      backgroundElement={
        <div className="h-full w-full multiverse-grid-overlay">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0,rgba(129,140,248,0.22),transparent_55%),radial-gradient(circle_at_80%_100%,rgba(236,72,153,0.22),transparent_55%)]" />
          <span
            className={`text-[11px] font-medium tracking-[0.28em] text-cyan-100/85 ${
              isArabic ? "" : "uppercase"
            } font-body`}
          >
            {kicker}
          </span>
        </div>
      }
      // ...rest of props
    >
      <HeroSection />
    </ScrollScene>
  );
};

export default HeroScene;
