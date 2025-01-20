import React from "react";
import { motion } from "framer-motion";
import { educationData } from "../constant/data";
import { SparklesPreview } from "./SparklesPreview";

const Education: React.FC = () => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <SparklesPreview>Education</SparklesPreview>
      </motion.div>

      <div id="education" className="relative mt-6 sm:mt-14">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-300 transform -translate-x-1/2"></div>

        {educationData.map((event, index) => (
          <motion.div
            key={index}
            className={`flex items-start mb-12 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Date */}
            <div
              className={`w-1/2 ${
                index % 2 === 0 ? "text-right pr-4 sm:pr-8" : "text-left pl-4 sm:pl-8"
              }`}
            >
              <div className="inline-block bg-white text-gray-800 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-md ">
                {event.date}
              </div>
            </div>

            {/* Timeline Point */}
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
              <motion.div
                className="absolute left-1/2 top-0 transform -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-indigo-500 to-purple-600 border-4 border-white rounded-full"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </div>

            {/* Event Content */}
            <div
              className={`w-1/2 ${
                index % 2 === 0 ? "pl-4 sm:pl-8" : "pr-4 sm:pr-8"
              } transform transition duration-300 hover:scale-105`}
            >
              <motion.div
                className="bg-[rgb(23,11,42)] shadow-lg rounded-lg p-4 sm:p-6"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-sm sm:text-lg font-bold text-white">{event.title}</h3>
                <p className="text-gray-300 text-xs sm:text-base mt-2 sm:mt-3">
                  {event.text}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
