import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center py-8 sm:py-12 lg:py-20 xl:py-24 z-20 overflow-hidden">
      {/* Background elements for desktop enhancement */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(125,211,252,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.03)_1px,transparent_1px)] bg-[size:50px_50px] lg:bg-[size:80px_80px] xl:bg-[size:100px_100px]" />
      </div>

      <div className="container max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
          {/* Left side content */}
          <div className="w-full  lg:w-1/2 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold leading-tight sm:leading-none tracking-tighter text-white">
                True Crypto World{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">Starts with</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-300/20 to-blue-400/20 blur-sm" />
                </span>{' '}
                Your Eyes
              </h1>
            </div>
            <div className="pt-4 sm:pt-6 lg:pt-8">
              <div className="relative inline-block group">
                <a href="https://docs.ocularai.xyz/" target="_blank" rel="noopener noreferrer">
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
          
          {/* Right side image - enhanced for desktop */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative">
            {/* Image container with enhanced effects */}
            <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-300/20 via-transparent to-blue-400/20 blur-2xl scale-110 opacity-60" />
              
              {/* HUD frame around image for desktop */}
              <div className="hidden lg:block absolute -inset-4 xl:-inset-8">
                <div className="absolute top-0 left-0 w-8 h-8 xl:w-12 xl:h-12 border-t-2 border-l-2 border-sky-300/50" />
                <div className="absolute top-0 right-0 w-8 h-8 xl:w-12 xl:h-12 border-t-2 border-r-2 border-sky-300/50" />
                <div className="absolute bottom-0 left-0 w-8 h-8 xl:w-12 xl:h-12 border-b-2 border-l-2 border-sky-300/50" />
                <div className="absolute bottom-0 right-0 w-8 h-8 xl:w-12 xl:h-12 border-b-2 border-r-2 border-sky-300/50" />
              </div>
              
              <div className="relative z-10">
                <Image
                  src="/p1.png"
                  alt="OcularAI Smart Glasses"
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>
              
              {/* Floating elements for desktop */}
              <div className="hidden lg:block absolute -top-4 -right-4 xl:-top-8 xl:-right-8 w-3 h-3 xl:w-4 xl:h-4 bg-sky-300 animate-pulse" />
              <div className="hidden lg:block absolute -bottom-4 -left-4 xl:-bottom-8 xl:-left-8 w-2 h-2 xl:w-3 xl:h-3 bg-sky-300 animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 