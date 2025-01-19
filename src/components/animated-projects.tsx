import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import {  useState } from "react";
import { SparklesPreview } from "./SparklesPreview";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  icons: string[]; 
  link: string; 
};

export const AnimatedTestimonials = ({
  testimonials,
  
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

 

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="max-w-7xl mx-auto antialiased font-sans px-6 lg:px-0 ">
      <SparklesPreview>Projects</SparklesPreview>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 mt-14">
        <div>
          <div className="relative h-[400px] w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.5,
                    scale: isActive(index) ? 1 : 0.9,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 999 : testimonials.length - index,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0"
                >
                  <div className="relative h-full w-full rounded-3xl overflow-hidden">
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={600}
                      height={600}
                      draggable={false}
                      className="h-full w-full object-cover object-center shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black opacity-10 rounded-3xl"></div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Testimonial Text */}
        <div className="flex flex-col justify-center space-y-8">
          <motion.div
            key={active}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              <a
                href={testimonials[active].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {testimonials[active].name}
              </a>
            </h3>
            <p className="text-lg text-gray-300 ">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg text-neutral-400 mt-6">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 10 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
            {/* Used Technologies */}
            <div className="flex gap-4 mt-6 items-center">
              <span className="text-lg font-medium text-gray-300">
                Used technologies:
              </span>
              <div className="flex gap-4">
                {testimonials[active].icons?.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`icon-${index}`}
                    className="h-8 w-8 rounded-full border-2 border-white shadow-lg hover:scale-110 transition-all duration-300"
                  />
                ))}
              </div>
            </div>

            {/* View Project Button */}
            <div className="mt-8">
              <a
                href={testimonials[active].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-600 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                View Project
              </a>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center shadow-md group/button"
            >
              <IconArrowLeft className="h-6 w-6 text-gray-700 dark:text-neutral-400 group-hover/button:scale-110 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center shadow-md group/button"
            >
              <IconArrowRight className="h-6 w-6 text-gray-700 dark:text-neutral-400 group-hover/button:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
