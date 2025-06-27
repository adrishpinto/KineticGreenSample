import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="h-20 bg-gray-950"></div>
      <div className="flex flex-wrap justify-center bg-gray-950 p-8 space-x-12 text-slate-200 text-sm">
        {/* Column 1 - Company */}
        <div className="flex flex-col space-y-2 min-w-[150px]">
          <h2 className="text-lg font-semibold mb-2">Company</h2>
          <a href="#">About Us</a>
          <a href="#">Life at KG</a>
          <a href="#">News & Event</a>
          <a href="#">Refund Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
          <a href="#">Career</a>
          <a href="#">Investors & Policies</a>
          <a href="#">Caution Notice</a>
          <a href="#">Sitemap</a>
        </div>
        {/* Column 2 - Scooters */}
        <div className="flex flex-col space-y-2 min-w-[150px]">
          <h2 className="text-lg font-semibold mb-2">Scooters</h2>
          <a href="#">E-Zulu</a>
          <a href="#">Zing</a>
          <a href="#">Golf Carts</a>
        </div>
        {/* Column 3 - 3 Wheelers */}
        <div className="flex flex-col space-y-2 min-w-[150px]">
          <h2 className="text-lg font-semibold mb-2">3 Wheelers</h2>
          <a href="#">Safar Smart</a>
          <a href="#">Super DXX</a>
          <a href="#">Safar Shakti</a>
          <a href="#">Safar Jumbo Ranger</a>
        </div>
        {/* Column 4 - Others */}
        <div className="flex flex-col space-y-2 min-w-[150px]">
          <h2 className="text-lg font-semibold mb-2">Others</h2>
          <a href="#">Find a dealer</a>
          <a href="#">Become a dealer</a>
          <a href="#">Test Ride</a>
          <a href="#">Booking Cancellation</a>
          <a href="#">EMI Calculator</a>
          <a href="#">Creative Gallery</a>
          <a href="#">Bulk Enquiry</a>
        </div>
        {/* Column 5 - Contact */}
        <div className="flex flex-col space-y-2 min-w-[200px]">
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <p>
            Kinetic Green Energy & Power Solutions Ltd. <br />
            D-1 Block, Plot No.18/2, Chinchwad, Pune - 411019,
            <br />
            Maharashtra, INDIA
          </p>
          <p>1800-120-4242</p>
          <p>hello@kineticgreen.com</p>
        </div>
      </div>
      <div className="h-20 bg-gray-950"></div>
    </div>
  );
};

export default Footer;
