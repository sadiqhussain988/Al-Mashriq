import React, { useEffect } from "react";
import {
  FaRocket,
  FaEye,
} from "react-icons/fa"; // Changed icons to be more contextually related
import AOS from "aos";
import "aos/dist/aos.css";

const MissionVision = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      icon: <FaRocket className="text-5xl text-[#FFBC3B]" />,
      title: "Our Mission",
      description:
        "At SoneriTrade, our mission is to empower our clients with the knowledge, tools, and expertise they need to make informed investment decisions. We believe that everyone, regardless of their financial background, should have access to the opportunities and benefits that wise investments can offer.",
      aos: "fade-up",
    },
    {
      icon: <FaEye className="text-5xl text-[#FFBC3B]" />,
      title: "Our Vision",
      description:
        "Our vision is to become the go-to destination for investment solutions, fostering financial growth and stability for our clients. We aim to build lasting relationships based on trust, transparency, and performance, positioning ourselves as a reliable partner in the journey to financial success.",
      aos: "fade-up",
    },
  ];

  return (
    <section className="w-full bg-[#1A1A37] text-white py-14 md:py-20 px-3 md:px-6">
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-bold text-[#FFBC3B]"
        >
          Mission <span className="text-white">&</span> Vision
        </h2>
      </div>

      {/* Cards Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos={feature.aos}
            data-aos-delay={index * 150}
            className="relative bg-[#2A2A55] p-4 md:p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 overflow-hidden group"
          >
            {/* Left Line (Top → Bottom) */}
            <div className="absolute left-0 top-0 w-1 h-0 bg-[#FFBC3B] transition-all duration-500 group-hover:h-full"></div>

            {/* Right Line (Bottom → Top) */}
            <div className="absolute right-0 bottom-0 w-1 h-0 bg-[#FFBC3B] transition-all duration-500 group-hover:h-full"></div>

            {/* Icon */}
            <div className="flex justify-center mb-5">{feature.icon}</div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-3 text-[#FFBC3B]">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionVision;
