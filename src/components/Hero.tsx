import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center py-8 sm:py-12 lg:py-0 z-20">
      <div className="container max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
          {/* Left side content */}
          <div className="w-full lg:mb-48 lg:w-1/2 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold leading-tight sm:leading-none tracking-tighter text-white">
                True Crypto World Starts with Your Eyes
              </h1>
            </div>
            <div className="pt-4 sm:pt-6 lg:pt-8">
              <div className="relative inline-block group">
                <a href="https://docs.ocular.xyz" target="_blank" rel="noopener noreferrer">
                <button className="bg-sky-300 hover:bg-sky-400 text-gray-900 font-bold py-2.5 px-6 sm:py-3 sm:px-8 lg:py-4 lg:px-10 text-sm sm:text-base lg:text-lg uppercase-mono transition-all duration-300 [clip-path:polygon(8px_0%,100%_0,100%_calc(100%_-_8px),calc(100%_-_8px)_100%,0_100%,0%_8px)] sm:[clip-path:polygon(10px_0%,100%_0,100%_calc(100%_-_10px),calc(100%_-_10px)_100%,0_100%,0%_10px)] group-hover:scale-105 sm:group-hover:scale-108">
                  Documentation
                </button>
                </a>
                {/* Top right corner */}
                <div className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] border-t-2 border-r-2 border-gray-900 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 sm:group-hover:translate-x-2 sm:group-hover:-translate-y-1" />
                {/* Bottom left corner */}
                <div className="absolute bottom-0.5 left-0.5 sm:bottom-1 sm:left-1 w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] border-b-2 border-l-2 border-gray-900 transition-all duration-300 group-hover:-translate-x-1 group-hover:translate-y-0.5 sm:group-hover:-translate-x-2 sm:group-hover:translate-y-1" />
              </div>
            </div>
          </div>
          
          {/* Right side image - only visible on tablet and mobile */}
          <div className="w-full lg:w-1/2 lg:hidden flex justify-center items-center">
            <div className="relative w-full max-w-md md:max-w-lg">
              <Image
                src="/p1.png"
                alt="OcularAI Smart Glasses"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 