import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="relative h-screen overflow-hidden -mt-16">
        <div
          className="absolute top-0 left-0 w-full h-full bg-fixed bg-cover bg-center z-[-1]"
          style={{ backgroundImage: `url(/banner.png)` }}
        ></div>
        <div className="h-screen flex items-center justify-center text-white text-5xl font-bold">
          Electrifying Your Future Ride
        </div>
      </div>
    </div>
  );
};

export default Banner;
