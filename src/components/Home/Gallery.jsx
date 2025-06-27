import React from "react";
import { motion } from "framer-motion";
import gallery1 from "../../assets/Gallery/gallery1.jpg";
import gallery2 from "../../assets/Gallery/gallery2.jpg";
import gallery3 from "../../assets/Gallery/gallery3.jpg";
import gallery4 from "../../assets/Gallery/gallery4.jpg";
import gallery5 from "../../assets/Gallery/gallery5.jpg";
import gallery6 from "../../assets/Gallery/gallery6.jpg";

const images = [
  {
    src: gallery1,
    title: "KineticGreen e-Scooter",
    subtitle: "Efficient. Sleek. Electric.",
  },
  {
    src: gallery2,
    title: "KineticGreen 3-Wheeler",
    subtitle: "Auto-style electric mobility",
  },
  {
    src: gallery3,
    title: "KineticGreen 3-Wheeler",
    subtitle: "Powerful. Practical. Green.",
  },
  {
    src: gallery4,
    title: "KineticGreen Mini Cart",
    subtitle: "Perfect for gated communities & resorts",
  },
  {
    src: gallery5,
    title: "KineticGreen e-Scooter",
    subtitle: "Zip through traffic, emission-free",
  },
  {
    src: gallery6,
    title: "Book Now",
    subtitle: "Prices starting at ₹69,990",
  },
];

const cardVariants = {
  hidden: { opacity: 0.1, scale: 1, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.08 ,
      duration: 0.4 ,
      ease: "easeOut",
    },
  }),
};

const Gallery = () => {
  return (
    <div className="p-6  mx-auto bg-white dark:bg-black">
      <div className="mx-auto w-[80%] mb-8">
        <h2 className="text-5xl font-bold mb-3">Sleek, Sharp</h2>
        <h2 className="text-5xl font">and packed with features</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map(({ src, title, subtitle }, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            custom={index}
            variants={cardVariants}
          >
            <img
              src={src}
              alt={title}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-80 transition duration-500 flex flex-col items-center justify-center text-center px-3">
              <h3 className="text-white text-lg font-bold drop-shadow">
                {title}
              </h3>
              <p className="text-white text-sm mt-1">{subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
