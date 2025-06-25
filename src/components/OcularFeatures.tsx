'use client';

import { ArrowPathIcon, CurrencyDollarIcon, LightBulbIcon } from '@heroicons/react/24/outline';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<any>;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="flex flex-col items-start">
      <div className="bg-gray-800/60 p-2 sm:p-3 lg:p-4 mb-6 sm:mb-8 lg:mb-12 border border-gray-700">
        <Icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-sky-300" />
      </div>
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-sky-300 mb-4 sm:mb-6 lg:mb-8 tracking-tighter font-mono uppercase text-shadow-md leading-tight">{title}</h3>
      <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed uppercase-mono tracking-tight">{description}</p>
    </div>
  );
};

const features: FeatureProps[] = [
  {
    title: "Real-World Activity, Real On-Chain Impact",
    description: "Every step, scan, or signal captured by OcularAI smart glasses contributes to a decentralized data network that powers real applications, from mapping to city sensing.",
    icon: ArrowPathIcon
  },
  {
    title: "Crypto, Made Effortless",
    description: "With an embedded AI agent, OcularAI simplifies crypto interactions—managing wallets, DeFi actions, and digital identity through intuitive voice and gesture control.",
    icon: CurrencyDollarIcon
  },
  {
    title: "Designed for Daily Life",
    description: "Lightweight, energy-efficient, and mobile-synced, OcularAI is built for real-world usage—bringing Web3 and AI into your everyday routine without friction.",
    icon: LightBulbIcon
  }
];

export default function OcularFeatures() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 min-h-screen">
      <div className="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left side - Heading */}
          <div className="xl:w-1/2 xl:sticky xl:top-24 xl:self-start">
            <h2 className="w-[80%] text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-8 sm:mb-12 lg:mb-16 xl:mb-6 tracking-tighter leading-tight">
              OcularAI Brings The Revolutionary DEFAI
            </h2>
          </div>
          
          {/* Right side - Features */}
          <div className="xl:w-1/2 w-full">
            <div className="grid grid-cols-1 gap-16 sm:gap-20 md:gap-24 lg:gap-32 xl:gap-40">
              {features.map((feature, index) => (
                <Feature
                  key={`feature-${index}`}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 