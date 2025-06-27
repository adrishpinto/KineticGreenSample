import React, { useRef, useEffect } from "react";
import review1 from "../../assets/Reviews/review1.png";
import review3 from "../../assets/Reviews/review3.png";
import review4 from "../../assets/Reviews/review4.png";

const ReviewCard = ({ name, comment, img }) => {
  return (
    <div className="flex-shrink-0 w-[70vw] flex flex-col justify-center items-center px-4 snap-start">
      <div className="w-24 h-24 rounded-full border z-20 relative overflow-hidden">
        <img src={img} alt={name} className="object-contain w-full h-full" />
      </div>
      <h2 className="text-2xl font-semibold text-lime-800 mb-2">{name}</h2>
      <p className="text-gray-600 text-center w-[60%]">{comment}</p>
    </div>
  );
};

const ReviewV2 = () => {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const isScrollingRef = useRef(false);
  const delay = 5000; // 5 seconds

  const scrollNext = () => {
    if (isScrollingRef.current) return;
    isScrollingRef.current = true;

    scrollRef.current?.scrollBy({
      left: 0.7 * window.innerWidth,
      behavior: "smooth",
    });

    resetTimer();

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 600);
  };

  const scrollPrev = () => {
    if (isScrollingRef.current) return;
    isScrollingRef.current = true;

    scrollRef.current?.scrollBy({
      left: -0.7 * window.innerWidth,
      behavior: "smooth",
    });

    resetTimer();

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 600);
  };

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      scrollNext();
    }, delay);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <h1 className="ml-20 mb-10 text-5xl font-light mt-40 mx-auto text-center">
        Our <span className="text-lime-600 font-semibold">green</span> community
      </h1>

      <div className="w-[70%] mx-auto h-[50vh] relative flex items-center">
        {/* Opening Quote SVG */}
        <svg
          className="w-12 h-10 absolute text-lime-700 top-6 left-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 37"
          fill="currentColor"
        >
          <path d="M37,37c6.07,0,11-4.93,11-11s-4.93-11-11-11c-.32,0-.63.02-.94.05c.54-4.81,2.18-9.43,4.79-13.52c.19-.31,.2-.7,.03-1.01c-.18-.32-.51-.52-.88-.52h-2c-.27,0-.54.11-.73.31-5.14,5.41-11.27,14.26-11.27,25.69,0,6.07,4.93,10.99,11,11h0Zm-26,0c6.07,0,11-4.93,11-11s-4.93-11-11-11c-.32,0-.63.02-.94.05c.54-4.81,2.18-9.43,4.79-13.52c.19-.31,.2-.7,.03-1.01c-.18-.32-.51-.52-.87-.52h-2c-.27,0-.54.11-.73.31C6.13,5.72,0,14.57,0,26c0,6.07,4.93,10.99,11,11h0Z" />
        </svg>

        {/* SCROLL AREA */}
        <div
          className="w-full overflow-x-auto scrollbar-hide px-4 snap-x snap-mandatory"
          ref={scrollRef}
          onWheel={(e) => e.preventDefault()}
        >
          <div className="flex">
            <ReviewCard
              name="Aarushi Mehta"
              comment="Zing’s electric scooter completely changed my daily commute. It's fast, efficient, and super eco-friendly. I’ve been using it for 6 months now and I can’t imagine going back to petrol. Totally worth it!"
              img={review1}
            />
            <ReviewCard
              name="Riya Sharma"
              comment="Absolutely love the smooth ride and minimal charging time. The scooter is reliable, stylish, and I get compliments all the time. Thank you Zing!"
              img={review3}
            />
            <ReviewCard
              name="Neha Kapoor"
              comment="Switching to Zing was the best decision. I'm saving so much on fuel and doing my bit for the planet."
              img={review4}
            />
          </div>
        </div>

        {/* ARROWS */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 cursor-pointer top-1/2 -translate-y-1/2 h-12 w-12 text-2xl bg-lime-700 text-white rounded-full shadow"
        >
          ‹
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 cursor-pointer top-1/2 -translate-y-1/2 h-12 w-12 text-2xl bg-lime-700 text-white rounded-full shadow"
        >
          ›
        </button>

        {/* Closing Quote SVG */}
        <svg
          className="w-12 h-10 text-lime-700 -scale-x-100 -scale-y-100 absolute bottom-6 right-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 37"
          fill="currentColor"
        >
          <path d="M37,37c6.07,0,11-4.93,11-11s-4.93-11-11-11c-.32,0-.63.02-.94.05c.54-4.81,2.18-9.43,4.79-13.52c.19-.31,.2-.7,.03-1.01c-.18-.32-.51-.52-.88-.52h-2c-.27,0-.54.11-.73.31-5.14,5.41-11.27,14.26-11.27,25.69,0,6.07,4.93,10.99,11,11h0Zm-26,0c6.07,0,11-4.93,11-11s-4.93-11-11-11c-.32,0-.63.02-.94.05c.54-4.81,2.18-9.43,4.79-13.52c.19-.31,.2-.7,.03-1.01c-.18-.32-.51-.52-.87-.52h-2c-.27,0-.54.11-.73.31C6.13,5.72,0,14.57,0,26c0,6.07,4.93,10.99,11,11h0Z" />
        </svg>
      </div>
    </div>
  );
};

export default ReviewV2;
