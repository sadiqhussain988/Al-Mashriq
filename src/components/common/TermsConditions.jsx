import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const TermsConditions = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      title: "Acceptance of Terms",
      content: `By using the investment site almashriqinvest.com and any services provided on the Site, 
      you agree to comply with and be bound by the following terms and conditions ("Terms"). 
      If you do not agree to these Terms, please do not use the Site.`,
    },
    {
      title: "Eligibility",
      content: `You must be of legal age and capacity to enter into a binding contract in your jurisdiction to use this Site. 
      If you are accessing the Site on behalf of an entity, you represent and warrant that you have the authority to bind that entity to these Terms.`,
    },
    {
      title: "Investment Risks",
      content: `Investments on this Site involve inherent risks. You should carefully consider your financial situation and investment goals before using the Site. 
      The Site owner does not provide financial advice, and all investments are made at your own risk.`,
    },
    {
      title: "Registration and Account",
      content: `To use certain features of the Site, you may be required to register and create an account. 
      You are responsible for maintaining the confidentiality of your account information, and you are liable for any activities that occur under your account.`,
    },
    {
      title: "User Content",
      content: `You are solely responsible for any content you post on the Site, including comments, reviews, or other user-generated content. 
      You agree not to post any false, misleading, or malicious information.`,
    },
    {
      title: "Site Content",
      content: `All content on the Site, including text, images, and information, is protected by copyright and intellectual property laws. 
      You may not use, reproduce, or distribute any content from the Site without explicit permission.`,
    },
    {
      title: "Investment Decisions",
      content: `Any investment decisions you make based on information obtained from the Site are your responsibility. 
      The Site owner does not guarantee the accuracy, completeness, or reliability of any information or data provided.`,
    },
    {
      title: "Third-Party Links",
      content: `The Site may contain links to third-party websites or services. These links are provided for your convenience, 
      and the Site owner is not responsible for the content, accuracy, or security of these third-party sites.`,
    },
    {
      title: "Termination",
      content: `The Site owner reserves the right to terminate, suspend, or restrict your access to the Site at any time for any reason, without notice.`,
    },
    {
      title: "Privacy",
      content: `Your use of the Site is also governed by our Privacy Policy, which is incorporated into these Terms by reference. 
      Please review our Privacy Policy to understand how we collect, use, and disclose your personal information.`,
    },
    {
      title: "Limitation of Liability",
      content: `To the fullest extent permitted by law, the Site owner is not liable for any direct, indirect, incidental, consequential, or special damages arising out of your use of the Site.`,
    },
    {
      title: "Changes to Terms",
      content: `The Site owner reserves the right to modify, amend, or update these Terms at any time. Any changes will be posted on the Site, 
      and it is your responsibility to review these Terms periodically.`,
    },
    {
      title: "Governing Law",
      content: `These Terms are governed by and construed in accordance with the laws of the Government.`,
    },
    {
      title: "Contact Information",
      content: `If you have any questions or concerns about these Terms and Conditions, you can contact us at 
      support@almashriqinvest.com.`,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-96">
        <img
          src="https://almashriqinvest.com/images/backgrounds/page-title.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/85"></div>
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-20">
          <h1 className="text-2xl md:text-4xl font-bold flex items-center space-x-2 text-white">
            <Link to="/" className="text-[#FFBC3B] hover:underline">Home</Link>
            <span className="font-light">{">"}</span>
            <span className="font-light text-2xl md:text-3xl">Terms & Conditions</span>
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[#1A1A37] min-h-screen py-12">
        <div className="container mx-auto max-w-5xl px-3 md:px-6">
          <div className="bg-[#252565] rounded-lg shadow-xl p-4 md:p-8 border-t border-b border-[#FFBC3B]">
            {/* Header */}
            <h1 className="text-4xl font-extrabold text-[#FFBC3B] text-center mb-5" data-aos="fade-down">Terms & Conditions</h1>

            {/* Sections */}
            {sections.map((section, idx) => (
              <section key={idx} className="mb-8">
                {/* Title with animation */}
                <h2 
                  className="text-2xl font-bold text-[#FFBC3B] mb-4 flex items-center"
                  data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                >
                  <span className="bg-[#FFBC3B] text-[#1A1A37] w-8 h-8 flex justify-center items-center rounded-full mr-3">
                    {idx + 1}
                  </span>
                  {section.title}
                </h2>
                {/* Content with different animation */}
                <p 
                  className="text-gray-200 leading-relaxed" 
                  data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
                >
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
