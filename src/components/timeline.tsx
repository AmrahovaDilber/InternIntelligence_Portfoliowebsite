"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [offset, setOffset] = useState<[string, string]>(["start 10%", "end 60%"]);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOffset(["start 10%", "end 55%"]);
      } else if (window.innerWidth >= 824) {
        setOffset(["start 10%", "end 60%"]);
      } else {
        setOffset(["start 10%", "end 65%"]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset as [`${number}% ${number}%`, `${number}% ${number}%`],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-6" ref={containerRef}>
      <div className="text-center mt-14">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
          Work Experience
        </h1>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-12">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-30 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-16 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-gradient-to-t from-purple-500 via-blue-500 border border-neutral-300 p-2" />
              </div>
              <h3 className="bg-[rgb(23,11,42)] border p-2 rounded-lg hidden md:block text-lg md:text-2xl font-bold text-gray-300 md:pl-20">
                {item.title}
              </h3>
            </div>
            <div className="relative pl-16 ml-20 lg:ml-0 sm:pl-12 py-8 w-full backdrop-blur-lg bg-black bg-opacity-40 rounded-lg">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                {item.title}
              </h3>
              <div className="sm:pl-0 pr-4 w-full">{item.content}</div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[4px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-100 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[4px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
