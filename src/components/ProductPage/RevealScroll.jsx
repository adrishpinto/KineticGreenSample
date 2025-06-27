import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Zing from "../../assets/banner.png";

const SafetyLayer = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    amount: 0.7,
    once: false,
  });

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 h-screen w-full bg-indigo-100 z-[4]"
    >
      <motion.p
        animate={{ color: isInView ? "#000000" : "#3b82f6" }}
        transition={{ duration: 0.3 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-light"
      >
        Safety for All
      </motion.p>
    </div>
  );
};

const RevealScrollCard = () => {
  return (
    <div className="h-[410vh] relative">
      {/* c2 - Alloy Rim */}
      <div className="h-[300vh] top-0 absolute w-full">
        <div className="sticky top-0 h-screen w-full z-[2] flex items-center justify-center bg-indigo-100">
          <div className="w-[90%] flex items-center justify-center px-4 bg-indigo-100">
            <div className="w-[50%] h-[50vh] bg-indigo-100 flex items-center justify-center flex-col rounded-2xl p-8">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Alloy Rim
              </h1>
              <p className="text-lg text-gray-600">
                Designed to enhance both style and performance, our alloy rims
                are lightweight, durable, and give your ride a modern edge.
              </p>
            </div>
            <div className="w-[50%] h-[80vh]">
              <img
                src={Zing}
                alt="Zing"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* c1 - Instrument Cluster */}
      <div className="h-[200vh] top-0 absolute w-full">
        <div className="sticky top-0 h-screen w-full z-[3] flex items-center justify-center bg-indigo-100">
          <div className="w-[90%] flex items-center justify-center px-4 bg-indigo-100">
            <div className="w-[50%] h-[80vh]">
              <img
                src={Zing}
                alt="Zing"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="w-[50%] h-[50vh] bg-indigo-100 flex items-center justify-center flex-col rounded-r-2xl p-8">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Instrument Cluster
              </h1>
              <p className="text-lg text-gray-600">
                Get real-time updates on speed, battery, and trip data — all
                clearly displayed in a sleek digital format.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* c3 - Integrated Footrest */}
      <div className="h-[400vh] top-0 absolute w-full">
        <div className="sticky top-0 h-screen w-full z-[1] flex items-center justify-center bg-indigo-100">
          <div className="w-[90%] flex items-center justify-center px-4 bg-indigo-100">
            <div className="w-[50%] h-[80vh]">
              <img
                src={Zing}
                alt="Zing"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="w-[50%] h-[50vh] bg-indigo-100 flex items-center justify-center flex-col rounded-r-2xl p-8">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Integrated Footrest
              </h1>
              <p className="text-lg text-gray-600">
                Built-in footrests offer improved riding comfort and a cleaner,
                more integrated look to your vehicle’s design.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Text Layer */}
      <SafetyLayer />
    </div>
  );
};

const RevealScroll = () => {
  return (
    <div>
      <RevealScrollCard />
    </div>
  );
};

export default RevealScroll;
