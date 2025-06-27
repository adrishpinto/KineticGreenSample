import bike from "../../assets/bike_red.png";
import React, { useRef, useState } from "react";
import { MdOutlineSpeed } from "react-icons/md";
import { GiPathDistance, GiElectric } from "react-icons/gi";
import { BiTime } from "react-icons/bi";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const BikeInfo = () => {
  const containerRef = useRef(null);
  const [hoverInfo, setHoverInfo] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <div className="min-h-screen mt-84" ref={containerRef}>
      <div className="relative mx-auto shadow-2xl">
        {/* ✅ Parallax Image */}
        <motion.img
          src={bike}
          alt=""
          className="relative mx-auto z-20"
          style={{ y: yImage }}
        />

        {/* ZING Title */}
        <p className="absolute top-[2%] left-[50%] translate-[-50%] z-10 text-transparent font-extrabold tracking-widest bg-clip-text bg-gradient-to-r from-red-600 text-[200px] border w-full text-center">
          ZING
        </p>

        <div className="w-full bg-gradient-to-b from-red-500/30 to-red-600/40 h-[100%] absolute top-[0%]"></div>

        {/* ✅ Left Info Block */}
        <div className="absolute left-[2%]  lg:left-[10%] top-2 text-red-800 z-40 space-y-1">
          {/* Top Speed */}
          <div
            className="border w-fit p-3 border-transparent rounded-2xl cursor-pointer border-dotted transition-all duration-300 ease-in-out hover:border-red-500 hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-md hover:scale-[1.02]"
            onMouseEnter={() =>
              setHoverInfo({
                description: "Optimal Speed Control",
                details:
                  "Balanced speed for safety and efficiency. Complies with local e-bike regulations.",
              })
            }
            onMouseLeave={() => setHoverInfo(null)}
          >
            <div className="text-xl font-[300] gap-2 flex items-center">
              <span className="text-2xl text-red-800">
                <MdOutlineSpeed />
              </span>
              <span className="text-red-800">Top Speed</span>
            </div>
            <p className="mt-1">25 km/hr*</p>
          </div>

          {/* Range */}
          <div
            className="border w-fit p-4 border-transparent rounded-2xl cursor-pointer border-dotted transition-all duration-300 ease-in-out hover:border-red-500 hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-md hover:scale-[1.02]"
            onMouseEnter={() =>
              setHoverInfo({
                description: "Extended Range Performance",
                details:
                  "Perfect for daily commutes and weekend adventures. Range may vary based on riding conditions.",
              })
            }
            onMouseLeave={() => setHoverInfo(null)}
          >
            <div className="text-xl font-[300] gap-2 flex items-center">
              <span className="text-2xl text-red-800">
                <GiPathDistance />
              </span>
              <span className="text-red-800">Range</span>
            </div>
            <p className="mt-1">100 Kms*</p>
          </div>

          {/* Battery Capacity */}
          <div
            className="border w-fit p-4 border-transparent rounded-2xl cursor-pointer border-dotted transition-all duration-300 ease-in-out hover:border-red-500 hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-md hover:scale-[1.02]"
            onMouseEnter={() =>
              setHoverInfo({
                description: "High-Capacity Lithium Battery",
                details:
                  "Long-lasting power with advanced battery management system for optimal performance.",
              })
            }
            onMouseLeave={() => setHoverInfo(null)}
          >
            <div className="text-xl font-[300] gap-2 flex items-center">
              <span className="text-2xl text-red-800">
                <GiElectric />
              </span>
              <span className="text-red-800">Battery Capacity</span>
            </div>
            <p className="mt-1">1.7 kWh</p>
          </div>

          {/* Charging Time */}
          <div
            className="border w-fit p-4 border-transparent rounded-2xl cursor-pointer border-dotted transition-all duration-300 ease-in-out hover:border-red-500 hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-md hover:scale-[1.02]"
            onMouseEnter={() =>
              setHoverInfo({
                description: "Fast Charging Technology",
                details:
                  "Quick turnaround time. Charge overnight or during work hours for continuous use.",
              })
            }
            onMouseLeave={() => setHoverInfo(null)}
          >
            <div className="text-xl font-[300] gap-2 flex items-center">
              <span className="text-2xl text-red-800">
                <BiTime />
              </span>
              <span className="text-red-800">Charging Time</span>
            </div>
            <p className="mt-1">3 hours*</p>
          </div>
        </div>

        {/* right info box*/}
        <AnimatePresence mode="wait">
          <motion.div
            key={hoverInfo ? "info-box" : "default-box"}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute right-10 top-[50%] translate-y-[-50%] border border-dotted border-red-500 rounded-2xl backdrop-blur-md bg-white/20 shadow-md w-[20%] px-6 py-4 flex flex-col items-center justify-center text-center text-red-800"
          >
            {hoverInfo ? (
              <>
                <h4 className="text-xl font-semibold text-red-600 mb-1">
                  {hoverInfo.description}
                </h4>
                <p className="text-sm text-black/80 leading-relaxed">
                  {hoverInfo.details}
                </p>
              </>
            ) : (
              <p className="text-base text-red-700 opacity-70">
                Hover on left to know more
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BikeInfo;
