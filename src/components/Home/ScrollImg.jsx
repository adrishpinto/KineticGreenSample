import React from "react";
import scroll1 from "../../assets/scroll1.png";
import scroll2 from "../../assets/scroll2.png";
import scroll3 from "../../assets/scroll3.png";
import { useRef } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollImg = () => {
  const [header, setHeader] = useState("Instrument Cluster");
  const [p1, setP1] = useState(
    "View real-time speed, battery status, and ride stats in a clean, minimal display."
  );
  const [p2, setP2] = useState(
    "Customize what you see—switch between modes, trip data, and system alerts effortlessly."
  );
  const [p3, setP3] = useState(
    "Built for visibility in all lighting conditions, with a sleek modern interface."
  );

  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.5,
    once: false,
  });

  const isInView2 = useInView(ref2, {
    amount: 0.5,
    once: false,
  });

  const isInView3 = useInView(ref3, {
    amount: 0.5,
    once: false,
  });

  useEffect(() => {
    if (isInView2) {
      setHeader("Integrated Footrest, Smart and Safe");
      setP1(
        "Thoughtfully designed footrests provide added comfort for both rider and pillion."
      );
      setP2(
        "Flush-fit integration maintains a sleek profile while offering sturdy support."
      );
      setP3(
        "Enhanced grip texture and safety-focused positioning ensure stability at every stop."
      );
    } else if (isInView) {
      setHeader("Alloy Rim, Smart and Safe");
      setP1(
        "Precision-engineered alloy rims ensure a smoother, more stable ride across varied terrains."
      );
      setP2(
        "Designed for strength and durability while keeping the overall weight minimal for better performance."
      );
      setP3(
        "Integrated safety design with enhanced grip and brake responsiveness for confident riding."
      );
    } else {
      setHeader("Instrument Cluster");
      setP1(
        "View real-time speed, battery status, and ride stats in a clean, minimal display."
      );
      setP2(
        "Customize what you see—switch between modes, trip data, and system alerts effortlessly."
      );
      setP3(
        "Built for visibility in all lighting conditions, with a sleek modern interface."
      );
    }
  }, [isInView, isInView2]);

  return (
    <div className="">
      <div className="w-full bg-gradient-to-b from-white to-slate-200 h-[30vh] mt-[10vh]"></div>
      <div className=" h-[265vh] bg-slate-200">
        <div className="w-[93%] h-full flex mx-auto">
          <div className="w-[50%]">
            <div className="sticky bg-white rounded-l-3xl top-[14vh] h-[80vh] -mr-10 z-10 p-18  overflow-hidden mb-[6vh]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={header} // This makes sure animation triggers on content change
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <h1 className="text-[24px] font-[400] mb-4">{header}</h1>
                  <p className="text-slate-700 w-[80%] mb-4">{p1}</p>
                  <p className="text-slate-700 w-[80%] mb-4">{p2}</p>
                  <p className="text-slate-700 w-[80%]">{p3}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="top-[94vh] h-[6vh] bg-slate-200  sticky w-[150%] z-30"></div>
          </div>
          <div className="w-full">
            <img
              src={scroll1}
              className="w-[100%] h-[80vh] top-[14vh] sticky z-10 rounded-3xl object-cover mb-[6vh]"
            />
            <div className="top-[94vh]  bg-slate-200 h-[6vh] sticky w-[100%] z-30   "></div>
            <img
              ref={ref}
              src={scroll2}
              className="h-[80vh] w-[100%]  top-[14vh] sticky z-20 rounded-3xl mb-[6vh]"
            />
            <img
              ref={ref2}
              src={scroll3}
              className={`h-[80vh] w-[100%] top-[14vh] sticky z-20 rounded-3xl mb-[6vh]
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollImg;
