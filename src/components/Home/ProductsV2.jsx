import React from "react";
import bg from "../../assets/product-bg.png";
import bike_red from "../../assets/bike_red.png";
import bike_white from "../../assets/bike_white.png";
import { MdSpeed } from "react-icons/md";
import { IoIosBatteryFull } from "react-icons/io";
import { GiElectric } from "react-icons/gi";
import { TbRoad } from "react-icons/tb";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ bike_name }) => {
  const redBikeRef = useRef(null);
  const whiteBikeRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();
  const scrollTo = (ref) => {
    const element = ref.current;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  };

  return (
    <div className="sm:w-[45%] w-full min-w-[400px] flex flex-col  relative border border-slate-200 rounded-sm">
      <div className="relative w-full h-[300px] rounded-t-sm overflow-hidden">
        {/* Background */}
        <img
          src={bg}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          alt="Background"
        />

        {/* Scrollable Bike Section */}
        <div className="relative z-10 h-full overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="flex h-full items-center gap-4 w-max ">
            {/* Red Bike */}
            <div className="relative w-[100%] h-full flex items-center justify-center">
              <img
                src={bike_red}
                className="max-h-full object-contain   sm:w-[45vw]"
                alt="Red Bike"
                ref={redBikeRef}
              />
            </div>

            {/* White Bike */}
            <div className="relative w-[100%] h-full flex items-center justify-center">
              <img
                src={bike_white}
                className="max-h-full object-contain  sm:w-[45vw]"
                alt="White Bike"
                ref={whiteBikeRef}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Info */}

      <div className="px-6 py-4 border-t border-slate-200 bg-white">
        <div className="flex gap-2 ">
          <div
            className="bg-red-500 h-4 w-4 rounded-full ring ring-black"
            onClick={() => scrollTo(redBikeRef)}
          ></div>
          <div
            className="bg-white h-4 w-4 rounded-full ring ring-black"
            onClick={() => scrollTo(whiteBikeRef)}
          ></div>
        </div>
        <h1 className="font-[700] text-sm mb-1">
          Kinetic <span className="text-lime-600 mr-3">Green</span>
          {"   "}
          <span className="font-[300] text-2xl">{bike_name}</span>
        </h1>
        <h2 className="text-sm text-gray-500">From ₹ 67,990</h2>

        {/* Divider */}
        <div className="mt-6 mb-4 h-[1px] w-full bg-slate-200" />

        {/* Specs */}
        <div className="flex justify-between text-center text-[12px] text-gray-700 w-[80%]  mx-auto">
          <div className="flex flex-col items-center group  p-2 rounded-xl transition">
            <TbRoad className="text-2xl text-black group-hover:text-cyan-700 transition-colors" />
            <p className="font-bold group-hover:text-cyan-700">Range</p>
            <p className="text-gray-500">100 Kms*</p>
          </div>

          <div className="flex flex-col items-center group  p-2 rounded-xl transition">
            <MdSpeed className="text-2xl text-black group-hover:text-red-600 transition-colors" />
            <p className="font-bold group-hover:text-red-600">Top Speed</p>
            <p className="text-gray-500">25 km/hr*</p>
          </div>

          <div className="flex flex-col items-center group  p-2 rounded-xl transition">
            <IoIosBatteryFull className="text-2xl text-black group-hover:text-lime-600 transition-colors" />
            <p className="font-bold group-hover:text-lime-600">Battery</p>
            <p className="text-gray-500">1.7 kWh</p>
          </div>

          <div className="flex flex-col items-center group  p-2 rounded-xl transition">
            <GiElectric className="text-2xl text-black group-hover:text-yellow-500 transition-colors" />
            <p className="font-bold group-hover:text-yellow-500">Charging</p>
            <p className="text-gray-500">3 hours*</p>
          </div>
        </div>
        <div className="flex gap-4 mt-10">
          <div className="px-4 py-1 border-black border rounded-lg text-white bg-black w-fit hover:scale-105 transition-all duration-300 cursor-pointer">
            Book Now
          </div>
          <div
            className="px-4 py-1  rounded-lg  bg-white border-black border hover:scale-105 transition-all duration-300  w-fit cursor-pointer"
            onClick={() => navigate("/product-info-zing-model")}
          >
            Explore more
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsV2 = () => {
  return (
    <div className="">
      <div className="w-[90%] mt-20 mb-4 mx-auto ">
        <h1 className="text-5xl">
          Designed in India,{" "}
          <span className="font-bold text-lime-600">
            Created for the planet
          </span>
        </h1>
      </div>
      <div className="flex gap-4 gap-20 sm:gap-10 w-full flex-col lg:flex-row items-center justify-center">
        <Card bike_name="Zing" />
        <Card bike_name="Zulu" />
      </div>
    </div>
  );
};

export default ProductsV2;
