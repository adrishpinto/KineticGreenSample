import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Heart,
  ShoppingCart,
} from "lucide-react";
import blue_bike from "../../assets/bike_blue2.png";
import red_bike from "../../assets/bike_red.png";
import white_bike from "../../assets/bike_white.png";
import { motion } from "framer-motion";
const ProductShow = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const bikes = [
    {
      id: 1,
      name: "Romantic Red",
      price: "₹75,990",
      rating: 4.8,
      reviews: 124,
      color: "Red",
      colorClass: "bg-red-500",
      gradient: "from-red-50 via-red-100 to-red-200",
      shadowColor: "shadow-red-200/50",
      image: red_bike,
      features: ["Carbon Frame", "21-Speed", "Disc Brakes"],
    },
    {
      id: 2,
      name: "Royal White",
      price: "₹75,990",
      rating: 4.9,
      reviews: 87,
      color: "White",
      colorClass: "bg-gradient-to-b from-white via-sky-50 to-sky-100",
      gradient: "from-gray-100 via-sky-50 to-blue-100",
      shadowColor: "shadow-sky-100/60",
      image: white_bike,
      features: ["Aluminum Frame", "18-Speed", "Hydraulic Brakes"],
    },
    {
      id: 3,
      name: "Magic Blue",
      price: "₹75,990",
      rating: 4.7,
      reviews: 156,
      color: "Blue",
      colorClass: "bg-blue-500",
      gradient: "from-blue-50 via-blue-100 to-blue-200",
      shadowColor: "shadow-blue-200/50",
      image: blue_bike,
      features: ["Steel Frame", "21-Speed", "Sapphire Coated Chain"],
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev + 1) % bikes.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev - 1 + bikes.length) % bikes.length);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== activeIndex) {
      setIsAnimating(true);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const currentBike = bikes[activeIndex];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      {/* Header */}
      <div className=" ">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Premium Bike Collection
          </h1>
        </div>
      </div>

      {/* Color/Model Selectors */}
      <div className="shadow-s">
        <div className="max-w-7xl mx-auto px-4 py-2 pb-4">
          <div className="flex justify-center items-center gap-6">
            {bikes.map((bike, index) => (
              <button
                key={bike.id}
                onClick={() => goToSlide(index)}
                className={`group flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-gray-900 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                }`}
              >
                <div
                  className={`w-4 h-4  ring-2 ring-black rounded-full ${
                    bike.colorClass
                  } ${activeIndex === index ? "ring-2 ring-white" : ""}`}
                />
                <span className="font-medium">{bike.color}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Product Display */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              {/* Product Image */}
              <div
                className={`relative bg-gradient-to-br ${currentBike.gradient} rounded-2xl p-8 flex items-center justify-center ${currentBike.shadowColor} shadow-2xl`}
              >
                <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
                <motion.img
                  key={currentBike.id}
                  src={currentBike.image}
                  alt={currentBike.name}
                  initial={{
                    scale: currentBike.name === "Magic Blue" ? 1.2 : 1.3,
                    opacity: 1,
                  }}
                  animate={{
                    scale: currentBike.name === "Magic Blue" ? 1.3 : 1.5,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative z-10 w-full max-w-md h-auto object-contain"
                />

                {/* Floating elements */}
              </div>

              {/* Product Details */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h2
                    className={`text-4xl font-bold text-gray-900 mb-2 transition-all duration-500 ${
                      isAnimating
                        ? "translate-x-4 opacity-90"
                        : "translate-x-0 opacity-100"
                    }`}
                  >
                    {currentBike.name}
                  </h2>
                  <p className="text-2xl font-semibold text-gray-600">
                    {currentBike.price}
                  </p>
                </div>

                {/* Rating */}
                {/* <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(currentBike.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">
                    {currentBike.rating} ({currentBike.reviews} reviews)
                  </span>
                </div> */}

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {currentBike.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 shadow-xl rounded-full ${currentBike.colorClass}`}
                        />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 pb-6">
              {bikes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? `w-8 ${bikes[activeIndex].colorClass}`
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShow;
