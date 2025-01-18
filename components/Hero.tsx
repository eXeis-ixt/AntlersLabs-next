import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { HeroSection } from "./hero-section";

interface HeroProps {
  title?: string;
  desc?: string;
  regular?: string;
  gradient?: string;
}

const Hero = ({ title, desc, regular = "", gradient = "" }: HeroProps) => {
  return (
    <div>
      <HeroSection
        title={`Welcome to ${title}`}
        subtitle={{
          regular: regular,
          gradient: gradient,
        }}
        description={desc}
        ctaText="Get Started"
        ctaHref="/signup"
        bottomImage={{
          light: "https://www.launchuicomponents.com/app-light.png",
          dark: "https://www.launchuicomponents.com/app-dark.png",
        }}
        gridOptions={{
          angle: 65,
          opacity: 0.4,
          cellSize: 50,
          lightLineColor: "#4a4a4a",
          darkLineColor: "#2a2a2a",
        }}
      />
    </div>
  );
};

export default Hero;
