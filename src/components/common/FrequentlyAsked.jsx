import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronDown } from "react-icons/fa";

const FrequentlyAsked = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const faqs = [
    {
      question: "How can I buy share with Al-Mashriq Invest?",
      answer:
        "To buy shares, you must first become a member of Al-Mashriq Invest. Once you are signed up, you can buy your first share through the Members Area using your login credentials.",
    },
    {
      question: "How do I open my Al-Mashriq Invest Account?",
      answer:
        "Simply click the Signup button, fill out the registration form, and press Register. It’s that easy!",
    },
    {
      question: "Which currencies do you accept?",
      answer:
        "We accept payments via Bank Transfers, JazzCash, EasyPaisa, and USDT Wallet.",
    },
    {
      question: "Transparency?",
      answer:
        "We believe in complete transparency. You will always know where your money is invested and receive regular portfolio performance reports.",
    },
    {
      question: "How can I withdraw funds?",
      answer:
        "Log in using your username and password, then go to the Withdraw section to request your withdrawal.",
    },
    {
      question: "How long does it take for my deposit to be added to my account?",
      answer: "Your account will be updated as fast as your deposit is confirmed.",
    },
    {
      question: "How can I change my e-mail address or password?",
      answer:
        "Log in to your account and visit Account Information to update your email or password.",
    },
    {
      question: "What if I forgot my password?",
      answer:
        "Click the ‘Forgot Password’ link, enter your username or email, and you’ll receive your login details via email.",
    },
    {
      question: "Does daily profit get paid directly to my currency account?",
      answer:
        "No, profits accumulate in your Al-Mashriq Invest account. You can withdraw them anytime.",
    },
    {
      question: "How do you calculate interest on my account?",
      answer:
        "Interest depends on your plan. It is calculated daily/hourly and credited to your balance automatically.",
    },
    {
      question: "Can I deposit directly from my account balance?",
      answer: "No, deposits cannot be made directly from your account balance.",
    },
    {
      question:
        "Can I make an additional deposit after my account is opened?",
      answer:
        "Yes, you can! However, all transactions are handled separately for clarity and accuracy.",
    },
    {
      question:
        "After I make a withdrawal request, when will funds arrive?",
      answer: "We process all withdrawals within 24 hours.",
    },
    {
      question: "How can I change my password?",
      answer:
        "You can change it from your member area by editing your personal profile.",
    },
    {
      question: "Can I lose money?",
      answer:
        "All investments carry risk, but we manage portfolios carefully to minimize losses and align with your goals.",
    },
    {
      question: "How can I check my account balances?",
      answer: "You can access your account 24/7 via our secure online portal.",
    },
    {
      question: "Who manages the funds?",
      answer:
        "All funds are managed by our professional team of Al-Mashriq Invest experts.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Split into two halves for two-column layout
  const midpoint = Math.ceil(faqs.length / 2);
  const leftFAQs = faqs.slice(0, midpoint);
  const rightFAQs = faqs.slice(midpoint);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-96">
        <img
          src="https://almashriqinvest.com/images/backgrounds/page-title.jpg"
          alt="FAQ Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/85"></div>

        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-20">
          <h1 className="text-2xl md:text-4xl font-bold flex items-center space-x-2">
            <Link to="/" className="text-[#FFBC3B] hover:underline">
              Home
            </Link>
            <span className="text-white font-light">{">"}</span>
            <span className="text-white font-light text-xl md:text-3xl">
              Frequently Asked Questions
            </span>
          </h1>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="w-full bg-white text-[#1A1A37] py-14 md:py-20 px-3 md:px-6">
        <div className="text-center mb-14" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A37]">
            Frequently Asked <span className="text-[#FFBC3B]">Questions?</span>
          </h2>
        </div>

        {/* Two Column FAQ Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div data-aos="fade-right">
            {leftFAQs.map((faq, index) => (
              <div
                key={index}
                className="mb-5 bg-[#F8F9FB] rounded-xl shadow-md overflow-hidden border border-gray-200 transition-transform duration-300 hover:scale-[1.02]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left px-6 py-4 focus:outline-none hover:bg-[#FFF6E1] transition-colors"
                >
                  <span className="font-semibold text-lg text-[#1A1A37]">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-[#FFBC3B] transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeIndex === index && (
                  <div className="px-6 pb-4 text-gray-700 text-base leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div data-aos="fade-left">
            {rightFAQs.map((faq, index) => (
              <div
                key={index + midpoint}
                className="mb-5 bg-[#F8F9FB] rounded-xl shadow-md overflow-hidden border border-gray-200 transition-transform duration-300 hover:scale-[1.02]"
              >
                <button
                  onClick={() => toggleFAQ(index + midpoint)}
                  className="w-full flex justify-between items-center text-left px-6 py-4 focus:outline-none hover:bg-[#FFF6E1] transition-colors"
                >
                  <span className="font-semibold text-lg text-[#1A1A37]">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-[#FFBC3B] transition-transform duration-300 ${
                      activeIndex === index + midpoint ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeIndex === index + midpoint && (
                  <div className="px-6 pb-4 text-gray-700 text-base leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FrequentlyAsked;
