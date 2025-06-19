'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { useSmoothScroll } from './SmoothScrollProvider';

const sections = [
  { id: 'Hero', label: 'Home' },
  { id: 'Description', label: 'About' },
  { id: 'ProductHighlights', label: 'Features' },
  { id: 'OcularFeatures', label: 'OcularAI' },
  { id: 'Tokenomics', label: 'Tokenomics' },
  { id: 'Roadmap', label: 'Roadmap' },
  { id: 'FAQ', label: 'FAQ' }
] as const;

type SectionId = typeof sections[number]['id'];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState<SectionId>('Hero');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { scrollTo } = useSmoothScroll();

  // Throttled section update to prevent flickering
  const updateActiveSection = useCallback((sectionId: SectionId) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      setActiveSection(sectionId);
    }, 50); // Small delay to prevent rapid changes
  }, []);

  // Single intersection observer setup
  useEffect(() => {
    const visibleSections = new Map<string, number>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id as SectionId;
          
          if (entry.isIntersecting) {
            // Store intersection ratio for comparison
            visibleSections.set(sectionId, entry.intersectionRatio);
          } else {
            visibleSections.delete(sectionId);
          }
        });

        // Find the section with highest intersection ratio
        if (visibleSections.size > 0) {
          let mostVisible = '';
          let highestRatio = 0;
          
          visibleSections.forEach((ratio, sectionId) => {
            if (ratio > highestRatio) {
              highestRatio = ratio;
              mostVisible = sectionId;
            }
          });

          if (mostVisible) {
            updateActiveSection(mostVisible as SectionId);
          }
        }
      },
      { 
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    // Observe all sections
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [updateActiveSection]);

  const scrollToSection = useCallback((id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Small offset for better positioning
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      // Use global Lenis smooth scroll
      scrollTo(offsetPosition, {
        duration: 1.5,
        easing: (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
      });
    }
  }, [scrollTo]);

  return (
    <nav className="fixed right-12 top-1/2 -translate-y-1/2 z-[100] hidden lg:block pointer-events-none">
      <div className="relative pointer-events-auto">
        <div className="flex flex-col items-end gap-8">
          {sections.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`group relative flex items-center transition-all duration-300 cursor-pointer ${
                  isActive ? 'text-sky-300' : 'text-gray-500 hover:text-gray-300'
                }`}
                aria-current={isActive ? 'page' : undefined}
                data-cursor-style="nav-button"
              >
                {/* HUD frame for active state */}
                <div className={`absolute -right-2 top-1/2 -translate-y-1/2 w-32 h-8 border border-sky-300/30 transition-all duration-300 ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                  <div className="absolute -right-1 -top-1 w-2 h-2 border-t border-r border-sky-300" />
                  <div className="absolute -right-1 -bottom-1 w-2 h-2 border-b border-r border-sky-300" />
                  <div className="absolute -left-1 -top-1 w-2 h-2 border-t border-l border-sky-300" />
                  <div className="absolute -left-1 -bottom-1 w-2 h-2 border-b border-l border-sky-300" />
                </div>
                
                <span 
                  className={`text-sm font-mono uppercase tracking-tight transition-all duration-300 ${
                    isActive 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
                  }`}
                >
                  {label}
                </span>
                
                <div 
                  className={`ml-4 w-2 h-2 transition-all duration-300 ${
                    isActive 
                      ? 'bg-sky-300 scale-150' 
                      : 'bg-gray-500 group-hover:bg-gray-300'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
} 