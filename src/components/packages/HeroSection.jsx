import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="relative w-full h-96">
      {/* Background Image */}
      <img
        src="https://almashriqinvest.com/images/backgrounds/page-title.jpg"
        alt="Hero"
        className="w-full h-full object-cover"
      />

      {/* Overlay with decreased opacity */}
      <div className="absolute inset-0 bg-black/85"></div>

      {/* Text / Breadcrumb */}
      <div className="absolute inset-0 flex items-center justify-start px-6 md:px-20">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold flex items-center space-x-2">
          <Link to="/" className="text-[#FFBC3B] hover:underline">
            Home
          </Link>
          <span className="text-white font-light">{">"}</span> {/* Separator */}
          <span className="text-white font-light">Packages</span>
        </h1>
      </div>
    </div>
  );
}
