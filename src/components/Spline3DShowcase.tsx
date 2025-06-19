'use client';

import SplineScene from './SplineScene';

export default function Spline3DShowcase() {
  return (
    <section className="w-full">
      {/* 3D Scene Container - Hidden on tablet and mobile, visible on desktop only */}
      <div 
        className="absolute top-0 left-0 w-full cursor-none z-10 hidden lg:block"
        style={{ height: 'calc(100vh + 1000px)' }}
      >
        <div className="w-full h-screen sticky top-0">
        <SplineScene 
          className="w-full h-screen sticky top-0"
          fallback={
            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900/50 border border-gray-700/50 rounded-xl shadow-2xl">
              <div className="text-sky-300 uppercase-mono text-lg sm:text-xl font-semibold mb-4 animate-pulse">
                Loading 3D Experience...
              </div>
              <div className="text-gray-400 uppercase-mono text-xs sm:text-sm text-center max-w-md">
                Preparing interactive OcularAI smart glasses model
              </div>
              {/* Loading animation */}
              <div className="mt-6 flex gap-2">
                <div className="w-2 h-2 bg-sky-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-sky-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-sky-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          }
        />
        </div>
      </div>
    </section>
  );
} 