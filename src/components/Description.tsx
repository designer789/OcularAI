'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
  delay?: number;
}

function TypewriterText({ text, speed = 50, className = '', delay = 0 }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, isVisible]);

  return (
    <span className={className}>
      {displayedText}
    </span>
  );
}

export default function Description() {
  return (
    <section className="relative w-full lg:min-h-screen py-16 sm:py-24 md:py-32 lg:py-40 xl:py-48 z-20">
      <div className="container max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
          <div className="lg:w-2/3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tighter text-white leading-tight">
              ABOUT OCULARAI
            </h2>
          </div>
          <div className="lg:w-1/3 mt-4 sm:mt-6 lg:mt-0">
            <div className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed sm:leading-relaxed lg:leading-loose font-mono tracking-wide uppercase">
              <TypewriterText 
                text="OcularAI is a DePIN project that turns AI-powered smart glasses into decentralized data nodes. By capturing real-world visual and environmental data, users contribute to a distributed network while interacting with Web3 through an intuitive AR interface."
                speed={20}
                delay={0}
              />
              <br className="hidden sm:block" /> 
              <br className="hidden sm:block" />
              <TypewriterText 
                text="OcularAI bridges the gap between physical experience and on-chain utility, enabling a more seamless and user-owned digital future."
                speed={20}
                delay={4000}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 