import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  const slides = [
    <h1 className="text-5xl font-bold text-lime-600 tracking-tight">
      50+ <span className="text-black">Years of Operation</span>
    </h1>,
    <h1 className="text-5xl font-bold text-lime-600 tracking-tight">
      100,000+ <span className="text-black">Relationships Nurtured</span>
    </h1>,
    <h1 className="text-5xl font-bold text-lime-600 tracking-tight">
      550+ <span className="text-black">Dealers Pan India</span>
    </h1>,
    <h1 className="text-5xl font-bold text-lime-600 tracking-tight">
      32000+{" "}
      <span className="text-black">Tonnes of Carbon Footprint Saved</span>
    </h1>,
  ];

  const startTimer = () => {
    timer.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timer.current);
  }, []);

  const dotClick = (i) => {
    clearInterval(timer.current);
    setIndex(i);
    startTimer();
  };

  return (
    <motion.div
      className="w-full mx-auto"
      initial={{ opacity: 0, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    >
      <div className="relative overflow-hidden  h-64 bg-gradient-to-b from-indigo-100 to-white flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-indigo-700 absolute text-center px-4"
          >
            {slides[index]}
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => dotClick(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-indigo-600 scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Carousel;
