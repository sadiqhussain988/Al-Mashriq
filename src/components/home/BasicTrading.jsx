import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BasicTrading = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cards = [
    {
      img: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=600",
      title: "Following the trand and development",
      description:
        "The main recommendation is not to go against the main trend. Transactions alongside with the market result a positive outcome",
      
    },
    {
      img: "https://media.istockphoto.com/id/2190756966/photo/arabic-male-and-female-professionals-engaged-in-business-meeting.webp?a=1&b=1&s=612x612&w=0&k=20&c=1MBepHvts_LNiOeH4tyo7lgGrZ6BkxGcK2M96sg_W0c=",
      title: "Scalping as special kind of intraday trading",
      description:
        "Scalping is a peculiar but quickly developing trading style which can be very interesting and quite stressful most of the time",
     
    },
    {
      img: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80&w=600",
      title: "Breakout trading is one of the most popular aproaches",
      description:
        "An important condition of this trading is a presence of a strong bull or bear trend and a relevant level of support or resistance",
    },
  ];

  return (
    <section className="w-full bg-[#1A1A37] text-white py-14 md:py-20">
      {/* Section Heading */}
      <h2
        data-aos="fade-down"
        className="text-3xl md:text-5xl font-bold text-center mb-14 text-[#FFBC3B]"
      >
        Basic Trading Strategies
      </h2>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {cards.map((card, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className="max-w-sm bg-[#2A2A55] rounded-xl overflow-hidden shadow-lg hover:shadow-[#FFBC3B]/40 
                       transition-all duration-500 transform hover:-translate-y-3"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-56 object-cover transform transition-transform duration-700 hover:scale-110"
              />
            </div>

            {/* Card Body */}
            <div className="px-6 py-5">
              <div className="font-bold text-xl mb-3 text-[#FFBC3B]">
                {card.title}
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BasicTrading;