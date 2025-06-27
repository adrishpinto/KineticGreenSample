import React from "react";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

const Savings = () => {
  const [value, setValue] = useState(15);
  return (
    <div>
      <div className="gradient-to-b  bg-blue-50 h-32 w-full mt-40"></div>
      <div className="text-center bg-blue-50 ">
        <h1 className=" text-[40px] tracking-wider">
          More Savings. More Smiles.
        </h1>
        <div className="flex mt-20 w-[80%] mx-auto justify-between ">
          <div className="w-[40%]  flex flex-col">
            <div className="text-left">
              Tell us how far you ride every day. We’ll tell you how quickly
              you’ll recover the cost of a KineticGreen scooter, compared to
              petrol scooters.
            </div>
            <div className="w-[95%] mt-14 mx-auto">
              <PrettoSlider
                value={value}
                onChange={(e, newValue) => setValue(newValue)}
                min={15}
                max={150}
                step={1}
                valueLabelDisplay="on"
              />
            </div>
            <div className="mt-auto mb-[5%] w-[80%]">
              <h1 className="text-sm font-semibold text-left mb-5">
                Assumptions*
              </h1>
              <p className="mt-auto text-[12px] text-left">
                Calculation based on 25 days of usage in a month. Mileage of 40
                km/l and petrol cost of ₹ 100/litre for the petrol scooter.
                Electricity cost of ₹ 10/unit and distance of 35 km/unit with
                Kinetic Green.
              </p>
            </div>
          </div>

          <div className="w-[60%] flex items-center justify-center">
            <div className="bg-white w-[80%] py-6 px-10 rounded-2xl">
              <div>
                <p className="text-left text-gray-500">Petrol Scooter</p>
                <div className="flex justify-between mt-2 text-xl">
                  <p>Monthly petrol cost*</p>
                  <p>{(value * 62.185 + 47.225).toFixed(2)}</p>
                </div>
              </div>

              <div>
                <p className="text-left text-gray-500 mt-8">
                  KineticGreen Scooter
                </p>
                <div className="flex justify-between mt-2 text-xl">
                  <p>Monthly electricity cost*</p>
                  <p>{(value * 7.14).toFixed(2)}</p>
                </div>
              </div>

              <div className="h-[1px] w-full bg-gray-200 my-14"></div>

              <div>
                <p className="text-left text-gray-500 mt-8">
                  Your savings on Kinetic Green
                </p>
                <div className="flex justify-between mt-2 text-xl">
                  <p>Monthly Savings*</p>
                  <p>₹{(value * 62.185 + 47.225 - value * 7.14).toFixed(2)}</p>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xl text-green-600 bg-[#E6F4E7] px-3 py-2 rounded-xl mt-8 border w-[105%] ml-[-2.5%]">
                  <p>Annual Savings*</p>₹
                  {((value * 62.185 + 47.225 - value * 7.14) * 12).toFixed(2)}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mt-12 text-[16px] tracking-tight">
                  <p>Start Saving with Kinetic Green</p>
                  <p className="py-3 px-8 transition-all duration-500  text-sm border-black border  bg-black text-white rounded-4xl hover:bg-white hover:text-black cursor-pointer">
                    Book now
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 h-40">.</div>
    </div>
  );
};

export default Savings;

const PrettoSlider = styled(Slider)({
  color: "#52af77",

  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&::before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});
