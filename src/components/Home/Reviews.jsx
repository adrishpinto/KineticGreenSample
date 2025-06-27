import React from "react";
import Marquee from "react-fast-marquee";

const Card = ({ username, review }) => (
  <div className="w-64 h-64 mr-6 flex-shrink-0 cursor-pointer bg-gradient-to-br from-white hover:ring-2 hover:ring-blue-200 to-slate-100 border border-gray-200 shadow-sm rounded-2xl p-4 flex flex-col justify-between">
    <div>
      <h1 className="text-xl font-bold text-gray-800 mb-2">{username}</h1>
      <p className="text-gray-600 text-sm line-clamp-5">{review}</p>
    </div>
    <div className="mt-4 text-sm text-slate-500 italic">— Verified User</div>
  </div>
);

const reviews = [
  {
    username: "Aarav Sharma",
    review:
      "The scooter is super smooth and stylish. Battery life is excellent, and I love the digital display!",
  },
  {
    username: "Meera Iyer",
    review: "Lightweight and easy to maneuver. Perfect for my daily commute.",
  },
  {
    username: "Rohan Verma",
    review:
      "Build quality feels premium. Ride is very comfortable even on rough roads.",
  },
  {
    username: "Sana Sheikh",
    review:
      "Customer service was prompt and helpful. Got my scooter delivered on time!",
  },
  {
    username: "Dev Patel",
    review:
      "I love the sleek design. The dashboard interface is very intuitive.",
  },
  {
    username: "Kiara D’Souza",
    review: "Display is crisp and responsive. Easy to read even in sunlight!",
  },
  {
    username: "Arjun Bhatia",
    review: "Handles speed and corners like a pro. Best EV scooter I've owned.",
  },
];

const Reviews = () => {
  return (
    <div className="bg-white pt-30 overflow-hidden">
      <h1 className="ml-20 mb-10 text-5xl font-light">
        Our <span className="text-lime-600 font-semibold">green</span> community
      </h1>
      <Marquee
        pauseOnHover
        gradient={false}
        speed={150}
        className="w-full py-2"
      >
        {reviews.map((r, i) => (
          <Card key={i} username={r.username} review={r.review} />
        ))}
      </Marquee>
    </div>
  );
};

export default Reviews;
