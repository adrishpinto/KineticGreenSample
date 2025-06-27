import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Zing from "../../assets/product-banner.png";

const ZingBanner = () => {
  const textRef = useRef(null);
  const triggerRef = useRef(null);

  // Get scroll progress from trigger element
  const { scrollYProgress } = useScroll({
    target: triggerRef,
    offset: ["start end", "end start"],
  });

  // Change color from white to black as it scrolls into white section
  const textColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#ffffff", "#000000"]
  );

  return (
    <div className="relative h-[100vh] -mt-16">
      {/* Parallax Section */}
      <div
        className="h-[100vh] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${Zing})` }}
      >
        <div className="h-[100vh] pt-[60vh] z-30 relative" ref={triggerRef}>
          <motion.div className="text-5xl font-semibold text-center  transition-colors duration-300 text-white">
            Introducing <span className="font-thin">Zing Big B</span>
            <p className="text-2xl font-[300] mt-2">
              Ex-Showroom Price ₹ 75,990*
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scrollable Content */}
    </div>
  );
};

export default ZingBanner;
