import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/frequentlyaskedquestions" },
    { name: "Privacy Policy", href: "/privacypolicy" },
    { name: "Terms & Conditions", href: "/terms&conditions" },
  ];

  const services = [
    { name: "NTN Certificate", href: "/ntncertificate" },
    { name: "SECP Certificate", href: "/secpcertificate" },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "https://facebook.com/bageljoon", label: "Facebook" },
    { icon: FaInstagram, href: "https://instagram.com/bageljoon", label: "Instagram" },
    { icon: FaTwitter, href: "https://twitter.com/bageljoon", label: "Twitter" },
    { icon: FaLinkedin, href: "https://linkedin.com/company/bageljoon", label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-[#1A1A37] text-[#F5EBDD] w-full overflow-hidden">
      
      {/* Amount Input Section */}
      <section className=" w-full bg-[#1A1A37] py-8 px-6 hidden md:flex justify-center items-center">
        <div
          className="bg-white rounded-full shadow-lg flex items-center max-w-3xl w-full p-2"
          data-aos="fade-up"
        >
          {/* Search Icon */}
          <span className="px-4 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
              />
            </svg>
          </span>

          {/* Input */}
          <input
            type="number"
            placeholder="Enter your amount..."
            className="flex-1 outline-none bg-transparent px-4 py-3 text-gray-700 text-base rounded-full"
          />

          {/* Button */}
          <button className="bg-[#FFBC3B] hover:bg-[#e6ad34] text-[#1A1A37] font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
            Calculate Profit
          </button>
        </div>
      </section>

      {/* Ambient background accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FFBC3B]/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFBC3B]/10 blur-3xl rounded-full"></div>
      </div>

      {/* Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Info */}
        <motion.div
          data-aos="fade-up"
          className="space-y-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <h1 className="text-white font-bold text-3xl transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              Almashriq<span className="text-[#FFBC3B]">Invest</span>
            </h1>
          </div>
          <p className="text-[#F5EBDD]/90 text-sm leading-relaxed max-w-xs">
            Block No.1, Karachi <br /> 
            <span className="font-semibold text-[#FFFFFF]">WhatsApp: 03370338499</span> <br />
            support@almashriqinvest.com
          </p>
          <div className="flex items-center space-x-2 text-[#B8C1A3] text-sm">
            <div className="w-2 h-2 bg-[#B8C1A3] rounded-full animate-pulse"></div>
            <span>We’re open to collaborations</span>
          </div>
        </motion.div>

        {/* Company Links */}
        <motion.div data-aos="fade-up" data-aos-delay="100" className="space-y-5">
          <h2 className="text-lg font-semibold uppercase tracking-wider border-b border-[#F5EBDD]/20 pb-2">
            Company
          </h2>
          <ul className="space-y-3">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="group text-[#F5EBDD]/80 hover:text-[#FFBC3B] transition-colors duration-300 flex items-center text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-[#F5EBDD]/40 rounded-full mr-3 group-hover:bg-[#FFBC3B] transition-colors"></span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div data-aos="fade-up" data-aos-delay="200" className="space-y-5">
          <h2 className="text-lg font-semibold uppercase tracking-wider border-b border-[#F5EBDD]/20 pb-2">
            Links
          </h2>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index}>
                <a
                  href={service.href}
                  className="group text-[#F5EBDD]/80 hover:text-[#FFBC3B] transition-colors duration-300 flex items-center text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-[#F5EBDD]/40 rounded-full mr-3 group-hover:bg-[#FFBC3B] transition-colors"></span>
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Support */}
        <motion.div data-aos="fade-up" data-aos-delay="300" className="space-y-5">
          <h2 className="text-lg font-semibold uppercase tracking-wider border-b border-[#F5EBDD]/20 pb-2">
            Support
          </h2>
          <div className="space-y-4">
            <a
              href="mailto:support@almashriqinvest.com"
              className="flex items-center space-x-3 text-[#F5EBDD]/80 hover:text-[#FFBC3B] transition-colors group"
            >
              <div className="p-2 bg-[#3A2E25]/30 rounded-lg group-hover:bg-[#FFBC3B]/30 transition-colors">
                <FaEnvelope className="text-sm" />
              </div>
              <span className="text-sm">Email Us</span>
            </a>

            <a
              href="tel:+923370338499"
              className="flex items-center space-x-3 text-[#F5EBDD]/80 hover:text-[#FFBC3B] transition-colors group"
            >
              <div className="p-2 bg-[#3A2E25]/30 rounded-lg group-hover:bg-[#FFBC3B]/30 transition-colors">
                <FaPhone className="text-sm" />
              </div>
              <span className="text-sm">WhatsApp</span>
            </a>

            <div className="flex items-start space-x-3 text-[#F5EBDD]/80">
              <div className="p-2 bg-[#3A2E25]/30 rounded-lg mt-1">
                <FaSignInAlt className="text-sm" />
              </div>
              <span className="text-sm leading-relaxed">Login</span>
            </div>

            <div className="flex items-start space-x-3 text-[#F5EBDD]/80">
              <div className="p-2 bg-[#3A2E25]/30 rounded-lg mt-1">
                <FaUserPlus className="text-sm" />
              </div>
              <span className="text-sm leading-relaxed">Create Account</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#F5EBDD]/20 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-5 md:space-y-0">
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#F5EBDD]/70 text-sm text-center md:text-left"
          >
            Copyright © {currentYear} <span className="font-semibold text-[#FFFFFF]">designed & developed by</span> Al-mashriq Invest
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex space-x-4"
          >
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#3A2E25]/30 hover:bg-[#FFBC3B]/30 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="text-lg text-[#F5EBDD]" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer