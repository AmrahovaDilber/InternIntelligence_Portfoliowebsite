"use client";

import { SparklesCore } from "./sparkles";

interface SparklesProps{
    children:string
}


export const SparklesPreview:React.FC<SparklesProps>=({children})=>{
  return (
    <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
    <h1 className="mt-16 text-center text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500 relative z-20 animate-gradient shadow-lg custom-text-shadow">
  {children}
</h1>

      <div className="w-[40rem] h-5 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

      </div>
    </div>
  );
}
