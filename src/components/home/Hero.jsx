// HeroCarousel.jsx
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const slides = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1200",
      heading: "Your bright future is our mission",
      description:
        "Earnings from investments with minimal effort. Creating and managing passive income streams.",
      button: "Create Account",
      animations: { heading: "fade-down", description: "fade-up", button: "zoom-in" },
    },
    {
      id: 2,
      img: "https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1200",
      heading: "Better investment bright future",
      description:
        "This can include thorough research, ongoing monitoring, and adjustments to the portfolio to respond to changing market conditions.",
      button: "Create Account",
      animations: { heading: "fade-right", description: "fade-left", button: "flip-up" },
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1200",
      heading: "Advancing in your career for increased earnings",
      description:
        "We often have a team of experienced and knowledgeable financial professionals who analyze markets, trends, and individual securities. This expertise can be beneficial in making informed investment decisions.",
      button: "Create Account",
      animations: { heading: "fade-up", description: "fade-down", button: "zoom-in" },
    },
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden text-white">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center relative flex flex-col justify-center items-center text-center px-3 md:px-6"
              style={{ backgroundImage: `url(${slide.img})` }} // ✅ fixed
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1A1A37]/70"></div>

              <div className="relative flex flex-col justify-center items-center z-10">
                <h1
                  data-aos={slide.animations.heading}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg"
                >
                  {slide.heading}
                </h1>

                <p
                  data-aos={slide.animations.description}
                  data-aos-delay="200"
                  className="max-w-2xl text-lg md:text-xl mb-8 text-gray-200"
                >
                  {slide.description}
                </p>

                <button
                  data-aos={slide.animations.button}
                  data-aos-delay="400"
                  className="bg-[#FFBC3B] hover:bg-[#e6ad34] px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#FFBC3B]/40"
                >
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
