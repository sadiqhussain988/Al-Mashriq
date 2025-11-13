import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom"; // ✅ Import Link

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Packages", path: "/package" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];

  return (
    <nav className="fixed w-full z-50 shadow-lg">
      <div className="flex">
        {/* Left Section - Logo */}
        <div className="flex items-center gap-3 w-1/2 bg-[#1A1A37] px-6 h-20">
          <Link
            to="/"
            className="flex items-center gap-1 text-white font-bold text-3xl hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src="/logo.png"
              alt="Almashriq Invest Logo"
              className="w-13 h-13 object-contain"
            />
            <span className="hidden sm:inline">
              Almashriq<span className="text-[#FFBC3B]">Invest</span>
            </span>
          </Link>
        </div>

        {/* Right half - Desktop Menu */}
        <div className="w-1/2 bg-[#FFBC3B] flex items-center justify-end px-6 h-20">
          <div className="hidden md:flex space-x-8 text-white font-semibold text-xl">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative group px-2 py-1 uppercase hover:text-[#1A1A37] transition-colors duration-300"
              >
                {item.name}
                <span className="absolute left-1/2 bottom-0 w-0 h-1 bg-[#1A1A37] rounded-full transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-[#1A1A37]">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex font-semibold flex-col items-center bg-[#FFBC3B] text-[#1A1A37] text-xl shadow-md animate-slide-down">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)} // ✅ close menu after navigation
              className="w-full text-center py-8 hover:bg-[#FFD466] transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* Slide Down Animation */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-10%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-down {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
