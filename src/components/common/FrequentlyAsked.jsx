import React, { useEffect, useState } from "react";
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
        "To buy shares, you must first become a member of Al-Mashriq Invest. Once you are signed up, you can buy your first share. All shares must be made through the Members Area. You can login using the member username and password you receive when signup.",
    },
    {
      question: "How do I open my Al-Mashriq Invest Account?",
      answer:
        "It's quite easy and convenient. Just click the Signup button, fill in the registration form and then press Register.",
    },
    {
      question: "Which currencies do you accept?",
      answer:
        "We accept payments via: Bank Transfers, JazzCash, EasyPaisa & USDT Wallet.",
    },
    {
      question: "Transparency?",
      answer:
        "We believe in complete transparency. You will always know where your money is invested, and we provide regular, detailed reports on your investment portfolio's performance.",
    },
    {
      question: "How can I withdraw funds?",
      answer:
        "Login to your account using your username and password and check the Withdraw section.",
    },
    {
      question: "How long does it take for my deposit to be added to my account?",
      answer: "Your account will be updated as fast as you deposit.",
    },
    {
      question: "How can I change my e-mail address or password?",
      answer:
        "Log into your Al-Mashriq Invest account and click on the Account Information. You can change your e-mail address and password there.",
    },
    {
      question: "What if I can't log into my account because I forgot my password?",
      answer:
        "Click forgot password link, type your username or e-mail and you'll receive your account information.",
    },
    {
      question: "Does daily profit paid directly to my currency account?",
      answer:
        "No, profits are gathered on your Al-Mashriq Invest account and you can withdraw them anytime.",
    },
    {
      question: "How do you calculate the interest on my account?",
      answer:
        "Depending on each plan. Interest on your Al-Mashriq Invest account is acquired Daily/hourly and credited to your available balance at the end of each day.",
    },
    {
      question: "Can I do a direct deposit from my account balance?",
      answer: "No, you don't deposit directly from your account balance.",
    },
    {
      question:
        "Can I make an additional deposit to Al-Mashriq Invest account once it has been opened?",
      answer: "Yes, you can, but all transactions are handled separately.",
    },
    {
      question:
        "After I make a withdrawal request, when will the funds be available on my ecurrency account?",
      answer: "We process all withdrawals within 24 hours.",
    },
    {
      question: "How can I change my password?",
      answer:
        "You can change your password directly from your members area by editing it in your personal profile.",
    },
    {
      question: "Can I lose money?",
      answer:
        "There is a risk involved with investing in all high yield investment programs. However, there are ways to minimize risk by aligning your investments with your financial goals and diversifying your portfolio.",
    },
    {
      question: "How can I check my account balances?",
      answer:
        "You can access the account information 24/7 via our online member area.",
    },
    {
      question: "Who manages the funds?",
      answer:
        "These funds are managed by a team of Al-Mashriq Invest investment experts.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Split FAQs into two halves
  const midpoint = Math.ceil(faqs.length / 2);
  const leftFAQs = faqs.slice(0, midpoint);
  const rightFAQs = faqs.slice(midpoint);

  return (
    <section className="w-full bg-white text-[#1A1A37] py-14 md:py-20 px-3 md:px-6">
      {/* Heading */}
      <div className="text-center mb-14" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A37]">
          Frequently Asked <span className="text-[#FFBC3B]">Questions?</span>
        </h2>
      </div>

      {/* Two Columns FAQ Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div data-aos="fade-right">
          {leftFAQs.map((faq, index) => (
            <div
              key={index}
              className="mb-5 bg-[#F8F9FB] rounded-xl shadow-md overflow-hidden border border-gray-200"
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
                <div className="px-4 md:px-6 pb-4 text-gray-700 text-base leading-relaxed">
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
              className="mb-5 bg-[#F8F9FB] rounded-xl shadow-md overflow-hidden border border-gray-200"
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
                <div className="px-4 md:px-6 pb-4 text-gray-700 text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAsked;
