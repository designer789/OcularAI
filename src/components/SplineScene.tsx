'use client';

import Spline from '@splinetool/react-spline';
import { Suspense } from 'react';

interface SplineSceneProps {
  sceneUrl?: string;
  className?: string;
  fallback?: React.ReactNode;
}

export default function SplineScene({ 
  sceneUrl = "https://prod.spline.design/b1jgy41hUVvjSvi5/scene.splinecode",
  className = "w-full h-full",
  fallback
}: SplineSceneProps) {
  return (
    <div className={className}>
      <Suspense 
        fallback={
          fallback || (
            <div className="w-full h-full flex items-center justify-center bg-gray-800/50 border border-gray-700 rounded-lg">
              <div className="text-gray-400 uppercase-mono text-sm animate-pulse">
                Loading 3D Scene...
              </div>
            </div>
          )
        }
      >
        <Spline 
          scene={sceneUrl}
          style={{ width: '100%', height: '100%' }}
        />
      </Suspense>
    </div>
  );
} 