import React, { useEffect } from "react";
import { FaRocket, FaEye } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamStarted = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      icon: <FaRocket className="text-5xl text-[#FFBC3B]" />,
      title: "Our Team",
      description:
        "Meet our team of dedicated professionals, including financial analysts, portfolio managers, and customer support staff, who work tirelessly to provide you with the best possible investment experience. We are passionate about helping you achieve your financial dreams.",
      aos: "fade-down",
    },
    {
      icon: <FaEye className="text-5xl text-[#FFBC3B]" />,
      title: "Get Started",
      description:
        "Whether you are a seasoned investor or just beginning your investment journey, SoneriTrade is here to assist you every step of the way. We invite you to explore our website, learn more about our services, and get in touch with us to discover how we can help you grow your wealth and secure your financial future. Invest with confidence. Invest with SoneriTrade.",
      aos: "fade-up",
    },
  ];

  return (
    <section className="w-full bg-[#1A1A37] text-white py-20 px-6">
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-bold text-[#FFBC3B]"
        >
          Our Team <span className="text-white">&</span> Get Started
        </h2>
      </div>

      {/* Cards Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos={feature.aos}
            data-aos-delay={index * 150}
            className="relative bg-[#2A2A55] p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 overflow-hidden group"
          >
            {/* TOP Lines - start center, expand left/right */}
            <span className="absolute top-0 left-1/2 w-0 h-[2px] bg-[#FFBC3B] group-hover:w-1/2 transition-all duration-500 origin-left"></span>
            <span className="absolute top-0 right-1/2 w-0 h-[2px] bg-[#FFBC3B] group-hover:w-1/2 transition-all duration-500 origin-right"></span>

            {/* BOTTOM Lines - start center, expand left/right */}
            <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#FFBC3B] group-hover:w-1/2 transition-all duration-500 origin-left delay-100"></span>
            <span className="absolute bottom-0 right-1/2 w-0 h-[2px] bg-[#FFBC3B] group-hover:w-1/2 transition-all duration-500 origin-right delay-100"></span>

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

export default TeamStarted;
