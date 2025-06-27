import React from "react";
import { motion } from "framer-motion";
import bike from "../../assets/bike1.png";

const Products = () => {
  return (
    <div className="bg-white h-64 w-[90%] mx-auto mt-20">
      
      <div className="flex gap-4 overflow-scroll mt-10 scrollbar-hide">
        <Card
          image={bike}
          model="Zing"
          variant="m1"
          range="100Km"
          speed="25 km/hr"
          battery="1.7 kWh"
          emi="₹ 3,299/month"
          price="₹ 75,990"
        />
        <Card
          image={bike}
          model="Zoom"
          variant="LX"
          range="125Km"
          speed="45 km/hr"
          battery="2.1 kWh"
          emi="₹ 3,899/month"
          price="₹ 82,990"
        />
        <Card
          image={bike}
          model="Zing"
          variant="X2"
          range="90Km"
          speed="25 km/hr"
          battery="1.5 kWh"
          emi="₹ 2,999/month"
          price="₹ 69,990"
        />
        <Card
          image={bike}
          model="Flex"
          variant="GT"
          range="110Km"
          speed="40 km/hr"
          battery="2.0 kWh"
          emi="₹ 3,499/month"
          price="₹ 79,500"
        />
        <Card
          image={bike}
          model="Zoom"
          variant="XR"
          range="135Km"
          speed="50 km/hr"
          battery="2.5 kWh"
          emi="₹ 4,199/month"
          price="₹ 88,900"
        />
      </div>
    </div>
  );
};

const Card = ({ image, model, variant, range, speed, battery, emi, price }) => {
  return (
    <div className="min-w-[29%] w-[29%] flex flex-col rounded-xl group overflow-hidden">
      <motion.img
        src={image}
        alt="Bike"
        className="w-full h-[100%] object-cover rounded-t-xl group-hover:rounded-none"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
      <div className="w-full h-[100%] bg-gradient-to-b from-[#dcf0fd] to-indigo-50 px-4 pb-8 py-2 z-40">
        <h1 className="text-4xl font-[200]">
          Kinetic Green{" "}
          <span className="font-[500]">
            {model} <span className="text-lg">{variant}</span>
          </span>
        </h1>
        <h2 className="mt-2 text-slate-500">
          {range} Range <span>| {speed} |</span> {battery} battery
        </h2>
        <div className="w-full h-[1px] bg-slate-300 my-10"></div>
        <div className="flex flex-col space-y-2">
          <p className="text-slate-400 text-lg tracking-tight">Starting at</p>
          <p className="text-2xl font-semibold tracking-wider">{emi}</p>
          <p>
            <span className="text-slate-400">or</span> {price}
          </p>
        </div>
        <div className="mt-6 exp-button bg-black w-full cursor-pointer text-white font-semibold tracking-tighter flex items-center justify-center py-2">
          Explore more<div className="arrow"></div>
        </div>

        <div className="mt-6 cursor-pointer hover:bg-lime-700  bg-lime-600 w-full text-white font-semibold tracking-tighter flex items-center justify-center py-2">
          Book now
        </div>
      </div>
    </div>
  );
};

export default Products;
