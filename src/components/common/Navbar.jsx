import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.svg";
import zing from "../../assets/zing.svg";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const timeout = useRef();

  const showDropdown = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setIsHovered(true);
  };

  const hideDropdown = () => {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setIsHovered(false), 300);
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 h-16 bg-black/60 backdrop-blur-xs backdrop-brightness-100 text-white shadow-lg">
        <img src={logo} alt="Logo" className="h-12" />

        <div className="flex gap-8 text-[15px] font-[300] ml-10 uppercase relative">
          <div
            className="relative px-2 flex items-center justify-center cursor-pointer nav"
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
          >
            <div className="px-2 z-40 transition">Scooters</div>

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed left-0 top-[64px] w-screen bg-white text-black shadow-xl py-6 px-8 z-40"
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                >
                  <div className="mx-auto flex flex-col items-center text-center max-w-[600px] w-full bg-white/30 backdrop-blur-md rounded-xl p-4">
                    <h3 className="font-bold text-base mb-2">
                      Electric Scooters
                    </h3>
                    <p className="text-2xl font-semibold">Zing</p>
                    <p className="text-gray-500 mb-3">
                      Ex-Showroom @₹ 67,990 *
                    </p>
                    <img src={zing} alt="Zing" className="w-28 h-auto" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other Menu Items */}
          <div className="cursor-pointer nav px-2 z-40">Luna</div>
          <div className="cursor-pointer nav px-2 z-40">3 Wheelers</div>
          <div className="cursor-pointer nav px-2 z-40">Golf Cart</div>
          <div className="cursor-pointer nav px-2 z-40">About us</div>
        </div>

        {/* Buttons */}
        <div className="flex mr-10 tracking-tight font-semibold">
          <div className="border-2 px-6 py-1 rounded-3xl border-white text-black bg-white cursor-pointer hover:bg-black hover:text-white transition-all duration-500">
            Sign Up
          </div>
          <div className="border-2 px-5 py-1 rounded-3xl cursor-pointer ml-5 text-white border-white hover:bg-white hover:text-black transition-all duration-500">
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
