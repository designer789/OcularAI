'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  hoverToActivate?: boolean;
  speed?: number;
  randomChars?: string;
}

export default function ScrambleText({
  text,
  className = '',
  hoverToActivate = false,
  speed = 50,
  randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isScrambling, setIsScrambling] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const originalTextRef = useRef<string>(text);
  const prevHoverState = useRef<boolean>(hoverToActivate);
  
  const scrambleText = useCallback(() => {
    let iteration = 0;
    const maxIterations = 10;
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      setDisplayText(prevText => {
        return originalTextRef.current
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            
            if (index < iteration / (maxIterations / originalTextRef.current.length)) {
              return originalTextRef.current[index];
            }
            
            return randomChars.charAt(Math.floor(Math.random() * randomChars.length));
          })
          .join('');
      });
      
      if (iteration >= maxIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(originalTextRef.current);
        setIsScrambling(false);
      }
      
      iteration += 1;
    }, speed);
  }, [randomChars, speed]);
  
  useEffect(() => {
    originalTextRef.current = text;
    if (!isScrambling) {
      setDisplayText(text);
    }
  }, [text, isScrambling]);
  
  useEffect(() => {
    if (hoverToActivate && !prevHoverState.current && !isScrambling) {
      setIsScrambling(true);
      scrambleText();
    }
    
    prevHoverState.current = hoverToActivate;
  }, [hoverToActivate, isScrambling, scrambleText]);
  
  const handleMouseEnter = () => {
    if (!isScrambling) {
      setIsScrambling(true);
      scrambleText();
    }
  };
  
  return (
    <span 
      onMouseEnter={handleMouseEnter}
      className={className}
    >
      {displayText}
    </span>
  );
} 