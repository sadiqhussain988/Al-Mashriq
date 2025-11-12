import React from "react";

export default function HeroSection() {
  return (
    <div className="relative w-full h-80">
      {/* Background Image */}
      <img
        src="/Hero.jpg" // direct path from public folder
        alt="Hero"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2a2a4bc9] bg-opacity-70"></div>

      {/* Text / Breadcrumb */}
      <div className="absolute inset-0 flex items-center ml-20 mt-12">
        <h1 className="text-[#FFBC3B] text-xl sm:text-2xl md:text-4xl font-bold">
          Home <span className="text-white font-light"> Packages </span> 
        </h1>
      </div>
    </div>
  );
}