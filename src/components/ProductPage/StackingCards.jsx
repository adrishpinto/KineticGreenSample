import React, { useState, useEffect, useRef } from "react";

const CARD_HEIGHT = "h-[140px]";

const Card = ({ top, title, content, cardRef, isActive, i, mb }) => (
  <div
    ref={cardRef}
    className={`sticky ${top} ${CARD_HEIGHT} w-[90%] mx-auto ${mb} p-6 rounded-2xl border
     transition-all duration-300 cursor-pointer ${
       isActive
         ? "border-blue-400 shadow-2xl bg-white/20 backdrop-blur-md"
         : "border-gray-300 shadow-lg bg-white/10 backdrop-blur-sm hover:shadow-xl hover:border-blue-300"
     }`}
  >
    <h2
      className={`text-xl font-semibold mb-2 ${
        isActive ? "text-blue-700" : "text-gray-800"
      }`}
    >
      {title}
    </h2>
    <p className={`${isActive ? "text-blue-600" : "text-gray-600"}`}>
      {content}
    </p>
  </div>
);

const MainCard = ({ activeCard }) => (
  <div
    className={`sticky top-[30%] ${CARD_HEIGHT} w-[90%] mx-auto mb-8 p-4 rounded-2xl border
     border-blue-400 shadow-2xl bg-white/20 backdrop-blur-md transition-all duration-500`}
  >
    <p className="text-blue-700 font-[300] text-2xl">
      {activeCard.description}
    </p>
    <div className="mt-3 text-lg tracking-tight text-gray-700">
      {activeCard.details}
    </div>
  </div>
);

const StickyStack = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const cardRefs = useRef([]);

  const cards = [
    {
      mb: "mb-14",
      title: "100 Kms*",
      content: "Range",
      description: "Extended Range Performance",
      details:
        "Perfect for daily commutes and weekend adventures. Range may vary based on riding conditions.",
    },
    {
      mb: "mb-12",
      title: "25 km/hr*",
      content: "Top Speed",
      description: "Optimal Speed Control",
      details:
        "Balanced speed for safety and efficiency. Complies with local e-bike regulations.",
    },
    {
      mb: "mb-10",
      title: "1.7 kWh",
      content: "Battery Capacity",
      description: "High-Capacity Lithium Battery",
      details:
        "Long-lasting power with advanced battery management system for optimal performance.",
    },
    {
      mb: "mb-8",
      title: "3 hours*",
      content: "Charging Time",
      description: "Fast Charging Technology",
      details:
        "Quick turnaround time. Charge overnight or during work hours for continuous use.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const cardElements = cardRefs.current.filter((ref) => ref !== null);
      const viewportCenter = window.innerHeight / 2;

      let closestCard = 0;
      let closestDistance = Infinity;

      cardElements.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const distance = Math.abs(cardCenter - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestCard = index;
          }
        }
      });

      setActiveCardIndex(closestCard);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topOffsets = ["top-[30%]", "top-[33%]", "top-[36%]", "top-[39%]"];

  return (
    <div className="relative h-[1000px] py-32 bg-gradient-to-b from-white to-gray-50 flex">
      {/* Left - Main Card */}
      <div className="w-[50%] flex items-start justify-center">
        <MainCard activeCard={cards[activeCardIndex]} />
      </div>

      {/* Right - Stacked Cards */}
      <div className="h-full w-[50%]">
        {cards.map((card, index) => (
          <Card
            key={index}
            mb={card.mb}
            cardRef={(el) => (cardRefs.current[index] = el)}
            top={topOffsets[index]}
            title={card.title}
            content={card.content}
            isActive={activeCardIndex === index}
          />
        ))}
      </div>
    </div>
  );
};

export default StickyStack;
