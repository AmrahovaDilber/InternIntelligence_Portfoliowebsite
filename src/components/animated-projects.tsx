import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SparklesPreview } from "./SparklesPreview";

type Testimonial = {
  quote: string;
  name: string;
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
    <div
      className="max-w-7xl mx-auto antialiased font-sans px-6 lg:px-0 "
      id="projects"
    >
      <SparklesPreview>Projects</SparklesPreview>
      <div className="relative grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-16 mt-14">
        <div>
          <div className="relative h-[240px]  md:h-[400px] w-full">
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
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              <a
                href={testimonials[active].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {testimonials[active].name}
              </a>
            </h3>

            <motion.p className="text-sm sm:text-base lg:text-lg text-neutral-300 mt-4 sm:mt-6">
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
     
            <div className="flex gap-2 sm:gap-4  items-center mt-4 sm:mt-6"> 
              <span className="text-sm sm:text-lg font-medium text-gray-300">
                Used technologies:
              </span>
              <div className="flex gap-2 sm:gap-4">
                {testimonials[active].icons?.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`icon-${index}`}
                    className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 border-white shadow-lg hover:scale-110 transition-all duration-300"
                  />
                ))}
              </div>
            </div>

            <div  className="mt-5">
              <a
                href={testimonials[active].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 sm:px-5 py-2 text-sm sm:text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-600 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                View Project
              </a>
            </div>


       
          </motion.div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 sm:gap-6 ">
              <button
                onClick={handlePrev}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-300 dark:bg-neutral-800 flex items-center justify-center shadow-lg hover:bg-gray-400 dark:hover:bg-neutral-700 transition-all duration-200 group"
              >
                <IconArrowLeft className="h-5 w-5 sm:h-7 sm:w-7 text-gray-800 dark:text-neutral-300 group-hover:scale-105 transition-transform duration-200" />
              </button>

              <button
                onClick={handleNext}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-300 dark:bg-neutral-800 flex items-center justify-center shadow-lg hover:bg-gray-400 dark:hover:bg-neutral-700 transition-all duration-200 group"
              >
                <IconArrowRight className="h-5 w-5 sm:h-7 sm:w-7 text-gray-800 dark:text-neutral-300 group-hover:scale-105 transition-transform duration-200" />
              </button>
            </div>
   
        </div>
      </div>
    </div>
  );
};
