import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import forest from "../../assets/Gallery/forest.png";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
const StayConnected = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax transform: moves image slightly slower
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={containerRef} className="relative h-[50vh] overflow-hidden mt-40">
      <motion.img
        src={forest}
        alt="Forest"
        style={{ y }}
        className="absolute top-[-10%] left-0 w-full h-[120%] object-cover"
      />
      <div className="relative z-10 flex items-center justify-center gap-4 h-full bg-black/30 text-white text-4xl font-[400]">
        Stay Connected
        <span className="transition duration-300 hover:text-[#1877F2] hover:scale-110 cursor-pointer">
          <CiFacebook />
        </span>
        <span className="transition duration-300 hover:text-[#1DA1F2] hover:scale-110 cursor-pointer">
          <CiTwitter />
        </span>
        <span className="transition duration-300 hover:text-[#C13584] hover:scale-110 cursor-pointer">
          <CiInstagram />
        </span>
      </div>
    </div>
  );
};

export default StayConnected;
