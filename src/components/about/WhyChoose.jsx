import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronDown } from "react-icons/fa";

const WhyChoose = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const faqs = [
    {
      question: "Expertise?",
      answer:
        "Our team of seasoned financial experts brings a wealth of knowledge and experience to guide you through your investment journey.",
    },
    {
      question: "Diverse Investment Options?",
      answer:
        "We offer a wide range of investment products, from traditional options like stocks and bonds to alternative investments and innovative financial tools.",
    },
    {
      question: "Personalized Solutions?",
      answer:
        "We understand that each client has unique financial goals and risk tolerance. Our personalized approach ensures that your investments align with your specific needs and objectives.",
    },
    {
      question: "Transparency?",
      answer:
        "We believe in complete transparency. You will always know where your money is invested, and we provide regular, detailed reports on your investment portfolio's performance.",
    },
    {
      question: "Risk Management?",
      answer:
        "We prioritize risk management and aim to create well-balanced portfolios that minimize risk while maximizing returns.",
    },
    {
      question: "Continuous Support?",
      answer:
        "Our commitment to your success doesn't end after you invest. We provide ongoing support, advice, and updates to keep your investments on track.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-[#1A1A37] py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-14" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A37]">
          Why Choose <span className="text-[#FFBC3B]">SoneriTrade?</span>
        </h2>
      </div>

      {/* FAQ + Image Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - FAQ */}
        <div data-aos="fade-right">
          {faqs.map((faq, index) => (
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
                <div className="px-6 pb-4 text-gray-700 text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side - Image */}
        <div
          data-aos="fade-left"
          className="flex justify-center items-center"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1678216285963-253d94232eb7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFxfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
            alt="FAQ Illustration"
            className="w-full max-w-md rounded-2xl shadow-xl object-cover h-72 md:h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
