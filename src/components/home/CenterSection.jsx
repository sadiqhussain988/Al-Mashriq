import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const CenteredSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full bg-[#FFBC3B] text-white py-14 md:py-20 px-3 md:px-6 text-center">
      {/* Title */}
      <h2
        data-aos="fade-down"
        className="text-2xl md:text-4xl font-semibold mb-4 text-white"
      >
        Click to Join the Affiliate Program
      </h2>

      {/* Description */}
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="max-w-4xl mx-auto font-bold text-gray-200 text-3xl md:text-6xl leading-relaxed mb-10"
      >
   Referral Commission 10%
      </p>

      {/* Button */}
      <Link
        data-aos="zoom-in"
        data-aos-delay="400"
        to="/register"
        className="bg-white hover:bg-[#e6ad34] text-[#1A1A37] hover:text-white font-semibold 
                   px-8 py-3 rounded-full text-lg shadow-lg shadow-[#FFBC3B]/30 
                   transition-transform duration-300 hover:scale-105"
      >
        Join Now
      </Link>
    </section>
  );
};

export default CenteredSection;