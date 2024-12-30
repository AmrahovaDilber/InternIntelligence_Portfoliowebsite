import React from "react";
import { motion } from "framer-motion";
import Title from "./Title";
import { educationData } from "../constant/data";

const Education: React.FC = () => {
  return (
    <div className="flex flex-col  max-w-4xl mx-auto  px-5">
      <Title>Education</Title>
      <div id="education" className="relative ">
        <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-300 transform -translate-x-1/2"></div>

        {educationData.map((event, index) => (
          <motion.div
            key={index}
            className={`flex items-start mb-10 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
        
            <div className="w-1/2 text-right pr-5">
              <div className="inline-block bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-lg shadow">
                {event.date}
              </div>
            </div>

            <div className="relative w-10 h-10 flex-shrink-0">
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 border-4 border-white rounded-full"></div>
            </div>

       
            <div className="w-1/2 pl-5">
              <div className="bg-[rgb(23,11,42)] shadow-lg rounded-lg p-5">
                <h3 className="text-lg font-bold text-white">{event.title}</h3>
                <p className="text-gray-600 mt-2">{event.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
