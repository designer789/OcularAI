'use client';

/**
 * ProductHighlights Component
 * A scrollable section that displays product features with animated cards and smooth scrolling
 * Uses Lenis for smooth scroll behavior and Framer Motion for animations
 */

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  CubeTransparentIcon, 
  BoltIcon, 
  ViewfinderCircleIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

// TypewriterText component for typing animation
interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
  delay?: number;
  isVisible?: boolean;
}

function TypewriterText({ text, speed = 30, className = '', delay = 0, isVisible = false }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shouldStart, setShouldStart] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      setDisplayedText('');
      setCurrentIndex(0);
      setShouldStart(false);
      return;
    }

    const timer = setTimeout(() => {
      setShouldStart(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, isVisible]);

  useEffect(() => {
    if (!shouldStart) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, shouldStart]);

  return (
    <span className={className}>
      {displayedText}
      {shouldStart && currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}

// Type definitions for the highlight items
interface HighlightItem {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
}

// Product highlight data with corresponding icons
const highlights: HighlightItem[] = [
  {
    title: "AI-Powered Smart Glasses as DePIN Nodes",
    description: "OcularAI glasses act as lightweight, low-power DePIN nodes, collecting real-world data such as geolocation, visuals, and ambient metrics to power decentralized applications.",
    icon: CubeTransparentIcon // Represents distributed network nodes
  },
  {
    title: "AI-Driven Web3 Companion",
    description: "Built-in AI agents assist with crypto transactions, cross-chain actions, and identity management through intuitive voice and gesture commands.",
    icon: BoltIcon // Represents fast, AI-powered actions
  },
  {
    title: "Immersive AR Blockchain Interface",
    description: "Real-time AR display overlays wallet data, NFTs, and protocol status directly into your field of view, enabling seamless dApp interaction on the go.",
    icon: ViewfinderCircleIcon // Represents AR view/interface
  },
  {
    title: "Incentivized Data Contribution",
    description: "Users earn rewards by contributing and validating data, helping build decentralized maps, environmental monitoring tools, and real-time event networks.",
    icon: ChartBarIcon // Represents data analytics and rewards
  },
  {
    title: "Mobile-Assisted Hardware Design",
    description: "Optimized for low-power operation, OcularAI glasses offload heavy tasks to a paired smartphone, balancing performance with long-lasting usability.",
    icon: DevicePhoneMobileIcon // Represents mobile device integration
  }
];

// Props interface for individual card components
interface CardProps {
  i: number; // Index for positioning
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
}

/**
 * Card Component
 * Renders individual highlight cards with staggered positioning and scroll animations
 */
const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  icon: Icon,
}) => {
  // Ref for scroll tracking
  const container = useRef(null);

  // Use useInView to trigger typing animation when card is visible
  const isInView = useInView(container, { 
    once: true, // Only trigger once

  });

  // State for responsive dimensions
  const [dimensions, setDimensions] = useState({
    width: 'min(500px, 90%)',
    height: 'clamp(400px, 50vh, 450px)',
    topOffset: -15,
    leftOffset: 15,
    horizontalStagger: 10
  });

  // Update dimensions based on screen size
  useEffect(() => {
    const updateDimensions = () => {
      // XL screens (1280px and above)
      if (window.matchMedia('(min-width: 1280px)').matches) {
        setDimensions({
          width: 'min(500px, 90%)',
          height: 'clamp(400px, 50vh, 450px)',
          topOffset: -15,
          leftOffset: 15,
          horizontalStagger: 10
        });
      } 
      // Large screens (1024px - 1279px)
      else if (window.matchMedia('(min-width: 1024px)').matches) {
        setDimensions({
          width: 'min(450px, 85%)',
          height: 'clamp(350px, 45vh, 400px)',
          topOffset: -12,
          leftOffset: 12,
          horizontalStagger: 8
        });
      }
      // Medium screens (768px - 1023px)
      else if (window.matchMedia('(min-width: 768px)').matches) {
        setDimensions({
          width: 'min(400px, 80%)',
          height: 'clamp(300px, 40vh, 350px)',
          topOffset: -10,
          leftOffset: 10,
          horizontalStagger: 6
        });
      }
      // Small screens (below 768px)
      else {
        setDimensions({
          width: 'min(350px, 75%)',
          height: 'clamp(250px, 35vh, 300px)',
          topOffset: -8,
          leftOffset: 8,
          horizontalStagger: 5
        });
      }
    };

    // Initial call
    updateDimensions();

    // Add event listener
    window.addEventListener('resize', updateDimensions);

    // Cleanup
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-start sticky top-0 px-8 max-md:hidden"
    >
      <motion.div
        style={{
          top: `calc(${dimensions.topOffset}vh + ${i * 100}px)`, // Vertical stagger with responsive offset
          left: `calc(${dimensions.leftOffset}% + ${i * dimensions.horizontalStagger}%)`, // Horizontal stagger with responsive values
          width: dimensions.width, // Responsive width
          height: dimensions.height, // Responsive height
        }}
        className="flex flex-col relative p-12 lg:p-12 md:p-8 sm:p-6 origin-top justify-between bg-gray-800/60 border border-gray-700 hover:border-sky-300 transition-colors backdrop-blur-lg group"
      >
        {/* Card content */}
        
          <Icon className="w-12 h-12 text-sky-300 lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8" />
        
        <div>
          <h3 className="text-2xl lg:text-2xl md:text-xl sm:text-lg font-semibold text-sky-300 mb-6 md:mb-4 sm:mb-3 leading-none tracking-tighter">
            {title}
          </h3>
          <div className="text-gray-300 text-sm lg:text-sm md:text-xs sm:text-xs leading-relaxed uppercase-mono tracking-tight">
            <TypewriterText 
              text={description}
              speed={15}
              delay={0}
              isVisible={isInView}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/**
 * Mobile Card Component
 * Renders individual highlight cards for mobile view with typing animation
 */
interface MobileCardProps {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  index: number;
}

const MobileCard: React.FC<MobileCardProps> = ({ title, description, icon: Icon, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { 
    once: true,
    margin: "-10%"
  });

  return (
    <div 
      ref={cardRef}
      className="bg-gray-800/60 border border-gray-700 p-6"
    >
      <Icon className="w-10 h-10 text-sky-300 mb-4" />
      <h3 className="text-xl font-semibold text-sky-300 mb-3 leading-none tracking-tighter">
        {title}
      </h3>
      <div className="text-gray-300 text-sm leading-relaxed uppercase-mono tracking-tight">
        <TypewriterText 
          text={description}
          speed={15}
          delay={index * 500 + 200}
          isVisible={isInView}
        />
      </div>
    </div>
  );
};

/**
 * Tablet Card Component
 * Renders individual highlight cards for tablet view with typing animation
 */
interface TabletCardProps {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  index: number;
}

const TabletCard: React.FC<TabletCardProps> = ({ title, description, icon: Icon, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { 
    once: true,
    margin: "-15%"
  });

  return (
    <div 
      ref={cardRef}
      className="bg-gray-800/90 border border-gray-700 p-8 hover:border-sky-300 transition-colors"
    >
      <Icon className="w-10 h-10 text-sky-300 mb-4" />
      <h3 className="text-xl font-semibold text-sky-300 mb-3 leading-none tracking-tighter">
        {title}
      </h3>
      <div className="text-gray-300 text-sm leading-relaxed uppercase-mono tracking-tight">
        <TypewriterText 
          text={description}
          speed={15}
          delay={Math.floor(index / 2) * 800 + (index % 2) * 400 + 200}
          isVisible={isInView}
        />
      </div>
    </div>
  );
};

/**
 * Main ProductHighlights Component
 * Manages smooth scrolling and renders the highlight cards
 */
export default function ProductHighlights() {
  const container = useRef(null);

  // Lenis smooth scrolling is now handled by the global SmoothScrollProvider

  return (
    <section className="relative w-full" ref={container}>
      {/* Section header */}
      <div className="absolute h-full top-0 right-[10vw] max-lg:hidden max-md:hidden">
        <h2 className="sticky top-[10vh] h-screen text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold text-right tracking-tighter leading-none text-white">
          Product<br/>Highlights
        </h2>
      </div>

      {/* Mobile view (only shows on smaller screens) */}
      <div className="hidden max-md:block py-16 px-6">
        <h2 className="text-4xl font-semibold text-center tracking-tighter leading-none text-white mb-12">
          Product Highlights
        </h2>
        <div className="space-y-8">
          {highlights.map((highlight, i) => {
            const Icon = highlight.icon;
            return (
              <MobileCard
                key={`mobile_highlight_${i}`}
                title={highlight.title}
                description={highlight.description}
                icon={Icon}
                index={i}
              />
            );
          })}
        </div>
      </div>

      {/* Tablet view (only shows on iPad) */}
      <div className="hidden max-md:hidden max-lg:block py-20 px-8">
        <h2 className="text-5xl font-semibold text-center tracking-tighter leading-none text-sky-300 mb-16">
          Product Highlights
        </h2>
        <div className="grid grid-cols-2 gap-6">
          {highlights.map((highlight, i) => {
            return (
              <TabletCard
                key={`tablet_highlight_${i}`}
                title={highlight.title}
                description={highlight.description}
                icon={highlight.icon}
                index={i}
              />
            );
          })}
        </div>
      </div>

      {/* Cards container - desktop only */}
      <div className="relative max-w-8xl mx-auto max-lg:hidden">
        {highlights.map((highlight, i) => {
          return (
            <Card
              key={`highlight_${i}`}
              i={i}
              title={highlight.title}
              description={highlight.description}
              icon={highlight.icon}
            />
          );
        })}
      </div>
    </section>
  );
} 