import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#101826] to-[#0d1322] p-4">
      <div
        className="relative bg-[#101826] p-5 md:p-7 mt-20 rounded-3xl shadow-2xl w-full max-w-md border border-gray-700 overflow-hidden"
        data-aos="fade-up"
      >
        {/* Decorative Badge */}
        <div
          className="absolute -top-2 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-[#00E5FF] to-[#0bd9f9] rounded-xl text-[#FF6612] font-bold shadow-lg text-center text-nowrap"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Al-Mashriq <span className="text-white">Invest</span>
        </div>

        {/* Header */}
        <h1
          className="text-4xl font-extrabold text-center mb-10 mt-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] to-[#0bd9f9]"
          data-aos="fade-down"
        >
          Welcome Back
        </h1>

        {/* Form */}
        <form className="flex flex-col gap-6" data-aos="fade-up" data-aos-delay="300">
          {/* Email */}
          <div className="flex flex-col">
            <label className="text-[#00E5FF] mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-xl border border-gray-700 bg-[#101826] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0bd9f9] shadow-inner transition-shadow duration-300"
              data-aos="fade-right"
              data-aos-delay="400"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col relative">
            <label className="text-[#00E5FF] mb-2 font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="p-3 rounded-xl border border-gray-700 bg-[#101826] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0bd9f9] shadow-inner pr-12 transition-shadow duration-300"
              data-aos="fade-left"
              data-aos-delay="500"
            />
            <div
              className="absolute right-3 top-[50px] cursor-pointer text-gray-400 hover:text-[#0bd9f9] transition-colors duration-300"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-[#00E5FF] to-[#0bd9f9] text-white font-bold py-3 rounded-xl hover:scale-105 transform transition-all shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p
          className="text-gray-400 text-sm text-center mt-6"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          Don't have an account?{" "}
          <Link to="/register" className="text-[#00E5FF] cursor-pointer hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
