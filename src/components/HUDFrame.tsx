'use client';

import { type ReactNode } from 'react';
import ScrambleText from './ScrambleText';

interface FixedBorderProps {
  children?: ReactNode;
}

const SocialButtons = () => {
  const socialLinks = [
    { name: 'Twitter', url: 'https://x.com/OcularAI_COIN_' },
    { name: 'Telegram', url: 'https://t.me/OcularAI' },
    { name: 'Dextools', url: '' },
    { name: 'Dexscreener', url: '' }
  ];

  return (
    <div className="relative w-[80%] max-lg:w-[90%] max-md:w-[95%] flex justify-between gap-4 py-0 pointer-events-auto">
      {socialLinks.map((social) => {
        const hasLink = social.url && social.url.trim() !== '';
        
        return (
          <button
            key={social.name}
            className="px-1 py-1 text-base max-lg:text-sm max-md:text-xs font-medium text-sky-300 text-shadow-md font-mono uppercase border-t-2 hover:text-sky-400 transition-colors cursor-pointer"
            onClick={hasLink ? () => window.open(social.url, '_blank') : undefined}
            data-cursor-style={hasLink ? "social-button" : undefined}
          >
            <ScrambleText text={social.name} className="text-shadow-md" />
          </button>
        );
      })}
    </div>
  );
};

export default function FixedBorder({ children }: FixedBorderProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none p-6 max-lg:p-4 max-md:p-2 z-[60]">
      <div className="relative w-full h-full border border-gray-600 flex justify-center items-start">
        <SocialButtons />
        {/* Top left corner */}
        <div className="absolute -top-[2px] -left-[2px] w-[30px] h-[30px] max-lg:w-[24px] max-lg:h-[24px] max-md:w-[20px] max-md:h-[20px] border-t-4 max-lg:border-t-3 max-md:border-t-2 border-l-4 max-lg:border-l-3 max-md:border-l-2 border-sky-300" />
        {/* Top right corner */}
        <div className="absolute -top-[2px] -right-[2px] w-[30px] h-[30px] max-lg:w-[24px] max-lg:h-[24px] max-md:w-[20px] max-md:h-[20px] border-t-4 max-lg:border-t-3 max-md:border-t-2 border-r-4 max-lg:border-r-3 max-md:border-r-2 border-sky-300" />
        {/* Bottom left corner */}
        <div className="absolute -bottom-[2px] -left-[2px] w-[30px] h-[30px] max-lg:w-[24px] max-lg:h-[24px] max-md:w-[20px] max-md:h-[20px] border-b-4 max-lg:border-b-3 max-md:border-b-2 border-l-4 max-lg:border-l-3 max-md:border-l-2 border-sky-300" />
        {/* Bottom right corner */}
        <div className="absolute -bottom-[2px] -right-[2px] w-[30px] h-[30px] max-lg:w-[24px] max-lg:h-[24px] max-md:w-[20px] max-md:h-[20px] border-b-4 max-lg:border-b-3 max-md:border-b-2 border-r-4 max-lg:border-r-3 max-md:border-r-2 border-sky-300" />
        {/* Left vertical border 
        <div className="absolute top-[5%] left-10 max-lg:left-8 max-md:left-4 w-[10px] max-lg:w-[8px] max-md:w-[6px] h-[90%] border-t-2 max-lg:border-t-[1.5px] max-md:border-t border-b-2 max-lg:border-b-[1.5px] max-md:border-b border-l-2 max-lg:border-l-[1.5px] max-md:border-l border-sky-300" />
        {/* Right vertical border 
        <div className="absolute top-[5%] right-10 max-lg:right-8 max-md:right-4 w-[10px] max-lg:w-[8px] max-md:w-[6px] h-[90%] border-t-2 max-lg:border-t-[1.5px] max-md:border-t border-b-2 max-lg:border-b-[1.5px] max-md:border-b border-r-2 max-lg:border-r-[1.5px] max-md:border-r border-sky-300" />
        Short left vertical border */}
        <div className="absolute top-[40%] -left-2 max-lg:-left-[1.5px] max-md:-left-1 w-[16px] max-lg:w-[12px] max-md:w-[10px] h-[20%] border-t-2 max-lg:border-t-[1.5px] max-md:border-t border-b-2 max-lg:border-b-[1.5px] max-md:border-b border-sky-300" />
        {/* Short right vertical border */}
        <div className="absolute top-[40%] -right-2 max-lg:-right-[1.5px] max-md:-right-1 w-[16px] max-lg:w-[12px] max-md:w-[10px] h-[20%] border-t-2 max-lg:border-t-[1.5px] max-md:border-t border-b-2 max-lg:border-b-[1.5px] max-md:border-b border-sky-300" />
        {/* Short top horizontal border */}
        <div className="absolute -top-2 max-lg:-top-[1.5px] max-md:-top-1 left-[45%] w-[10%] max-lg:w-[12%] max-md:w-[15%] h-[16px] max-lg:h-[12px] max-md:h-[10px] border-l-2 max-lg:border-l-[1.5px] max-md:border-l border-r-2 max-lg:border-r-[1.5px] max-md:border-r border-sky-300" />
        {/* Short bottom horizontal border */}
        <div className="absolute -bottom-2 max-lg:-bottom-[1.5px] max-md:-bottom-1 left-[45%] w-[10%] max-lg:w-[12%] max-md:w-[15%] h-[16px] max-lg:h-[12px] max-md:h-[10px] border-l-2 max-lg:border-l-[1.5px] max-md:border-l border-r-2 max-lg:border-r-[1.5px] max-md:border-r border-sky-300" />
      </div>
    </div>
  );
} 