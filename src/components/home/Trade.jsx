import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Trade = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat text-white py-14 md:py-20 px-6 flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1600')",
      }}
    >
      {/* Overlay for dark readability */}
      <div className="absolute inset-0 bg-[#1A1A37]/70"></div>

      {/* Content Box */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex justify-end">
        <div
          className="w-full md:w-1/2 bg-white/95 backdrop-blur-sm text-left space-y-6 p-6 md:p-12 rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-[#FFBC3B]/30"
          data-aos="fade-left"
        >
          {/* Title */}
          <h2
            data-aos="fade-right"
            className="text-4xl md:text-5xl font-bold text-[#1A1A37]"
          >
            Almashriq Trade
          </h2>

          {/* First Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-700 text-lg leading-relaxed"
          >
            <span className="text-[#5C5C77] font-bold">Almashriq Trade's</span>{" "}
            commitment to innovation and sustainability sets it apart,
            employing energy-efficient solutions to minimize environmental
            impact. With a stellar track record of reliability and security,{" "}
            <span className="text-[#5C5C77] font-bold">Almashriq Trade's</span>{" "}
            continues to shape the landscape of the crypto market, providing
            clients with a secure and lucrative platform for participating in
            the dynamic world of digital assets. As a leader in the field,{" "}
            <span className="text-[#5C5C77] font-bold">Almashriq Trade's</span>{" "}
            remains at the forefront of crypto farming excellence.
          </p>

          {/* Second Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-gray-700 text-lg leading-relaxed"
          >
            This can include thorough research, ongoing monitoring, and
            adjustments to the portfolio to respond to changing market
            conditions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trade;