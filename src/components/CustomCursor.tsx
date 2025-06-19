'use client';

import { useEffect, useState } from 'react';

interface CursorState {
  x: number;
  y: number;
  isVisible: boolean;
  isHovering: boolean;
  isClicking: boolean;
  isNavButton: boolean;
  isSocialButton: boolean;
}

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>({
    x: 0,
    y: 0,
    isVisible: false,
    isHovering: false,
    isClicking: false,
    isNavButton: false,
    isSocialButton: false,
  });

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Check if device supports touch
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouchDevice();
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorState(prev => ({
        ...prev,
        x: e.clientX,
        y: e.clientY,
        isVisible: true,
      }));
    };

    const handleMouseEnter = () => {
      setCursorState(prev => ({ ...prev, isVisible: true }));
    };

    const handleMouseLeave = () => {
      setCursorState(prev => ({ ...prev, isVisible: false }));
    };

    const handleMouseDown = () => {
      setCursorState(prev => ({ ...prev, isClicking: true }));
    };

    const handleMouseUp = () => {
      setCursorState(prev => ({ ...prev, isClicking: false }));
    };

    // Check for hoverable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = target.matches('button, a, [role="button"], input, textarea, select, .cursor-pointer, .group');
      const isNavButton = target.closest('[data-cursor-style="nav-button"]') !== null;
      const isSocialButton = target.closest('[data-cursor-style="social-button"]') !== null;
      setCursorState(prev => ({ 
        ...prev, 
        isHovering: isHoverable,
        isNavButton: isNavButton,
        isSocialButton: isSocialButton
      }));
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isTouchDevice]);

  // Don't render on touch devices or when not visible
  if (isTouchDevice || !cursorState.isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        transform: `translate3d(${cursorState.x - 12}px, ${cursorState.y - 12}px, 0)`,
      }}
    >
      {/* Simple dot cursor */}
      <div
        className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
          cursorState.isNavButton
            ? 'bg-sky-300/30 border-sky-300 scale-200 shadow-lg shadow-sky-300/25'
            : cursorState.isSocialButton
              ? 'bg-sky-300/25 border-sky-300 scale-175 shadow-md shadow-sky-300/20'
              : cursorState.isHovering 
                ? 'bg-sky-300/20 border-sky-300 scale-150' 
                : 'bg-white/10 border-white/50'
        } ${
          cursorState.isClicking ? 'scale-75' : ''
        }`}
      />
      
      {/* Center dot */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full transition-all duration-200 ${
          cursorState.isNavButton 
            ? 'bg-sky-300 scale-125' 
            : cursorState.isSocialButton 
              ? 'bg-sky-300 scale-110' 
              : cursorState.isHovering 
                ? 'bg-sky-300' 
                : 'bg-white'
        }`}
      />
      
      {/* Special effect for nav buttons */}
      {cursorState.isNavButton && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-sky-300/40 rounded-full animate-pulse" />
      )}
      
      {/* Special effect for social buttons */}
      {cursorState.isSocialButton && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 border border-sky-300/30 rounded-full animate-ping" />
      )}
    </div>
  );
} 