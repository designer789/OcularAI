'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";

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
          <div className="lg:w-1/2">
            {/* Enhanced heading with decorative elements */}
            <div className="relative mb-12 sm:mb-16 lg:mb-20">
             
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tighter text-white leading-tight relative z-10">
                  ABOUT{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-sky-300">OCULARAI</span>
    
                  </span>
                </h2>
                
               
              </div>
            </div>
            
                         {/* Enhanced image container */}
             <div className="relative w-full group">
               {/* Background glow effect */}
               <div className="absolute inset-0 bg-gradient-to-br from-sky-300/10 via-transparent to-blue-400/10 blur-2xl scale-110 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
               
              
               
              
               
               <div className="relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500">
                 <Image
                   src="/p2.png"
                   alt="OcularAI Technology"
                   width={1600}
                   height={1000}
                   className="w-full h-auto object-contain drop-shadow-2xl"
                   priority
                 />
               </div>
              
              
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-4 sm:mt-6 lg:mt-0 lg:top-32 lg:self-start">
            {/* Enhanced text container */}
            <div className="relative">
              {/* Background panel */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm border border-gray-700/30" />
              
              {/* Content */}
              <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                
                
                <div className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed sm:leading-relaxed lg:leading-loose font-mono tracking-wide">
                  <div className="mb-6 sm:mb-8 relative relative pl-5">
                    <div className="absolute left-0 top-2 w-0.5 h-full bg-gradient-to-b from-sky-300/60 to-transparent" />
                    <TypewriterText 
                      text="OCULARAI IS A DEPIN PROJECT THAT TURNS AI-POWERED SMART GLASSES INTO DECENTRALIZED DATA NODES. BY CAPTURING REAL-WORLD VISUAL AND ENVIRONMENTAL DATA, USERS CONTRIBUTE TO A DISTRIBUTED NETWORK WHILE INTERACTING WITH WEB3 THROUGH AN INTUITIVE AR INTERFACE."
                      speed={15}
                      delay={500}
                      className="uppercase"
                    />
                  </div>
                  
                  <div className="relative pl-5">
                    <div className="absolute left-0 top-2 w-0.5 h-full bg-gradient-to-b from-sky-300/40 to-transparent" />
                    <TypewriterText 
                      text="OCULARAI BRIDGES THE GAP BETWEEN PHYSICAL EXPERIENCE AND ON-CHAIN UTILITY, ENABLING A MORE SEAMLESS AND USER-OWNED DIGITAL FUTURE."
                      speed={15}
                      delay={5000}
                      className="uppercase"
                    />
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 