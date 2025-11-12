import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      title: "Introduction",
      content: (
        <p className="text-gray-200 leading-relaxed">
          Welcome to <span className="font-semibold text-[#FFBC3B]">Al-Mashriq Invest</span> (the "almashriqinvest.com"). 
          At Al-Mashriq Invest, we are committed to protecting your privacy and ensuring the security of your personal information. 
          This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to safeguard your data. 
          By using our Site, you consent to the practices described in this Privacy Policy.
        </p>
      ),
    },
    {
      title: "Information We Collect",
      content: (
        <>
          <h3 className="text-[#FFBC3B] font-semibold mb-2">Personal Information:</h3>
          <ul className="list-disc list-inside text-gray-200 mb-4 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Address</li>
            <li>Financial information (e.g., account numbers)</li>
            <li>Social Security number or national ID (where required by law)</li>
            <li>Employment information</li>
          </ul>

          <h3 className="text-[#FFBC3B] font-semibold mb-2">Non-Personal Information:</h3>
          <ul className="list-disc list-inside text-gray-200 space-y-1">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>IP address</li>
            <li>Usage data</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </>
      ),
    },
    {
      title: "How We Use Your Information",
      content: (
        <>
          <h3 className="text-[#FFBC3B] font-semibold mb-2">Providing Services:</h3>
          <ul className="list-disc list-inside text-gray-200 mb-4 space-y-1">
            <li>To process and manage your investments</li>
            <li>To facilitate transactions</li>
            <li>To provide customer support</li>
            <li>To communicate with you about your account and our services</li>
          </ul>

          <h3 className="text-[#FFBC3B] font-semibold mb-2">Marketing and Communications:</h3>
          <ul className="list-disc list-inside text-gray-200 mb-4 space-y-1">
            <li>To send you promotional and informational content</li>
            <li>To inform you about updates and news</li>
            <li>To customize and improve your user experience</li>
          </ul>

          <h3 className="text-[#FFBC3B] font-semibold mb-2">Compliance and Legal Obligations:</h3>
          <ul className="list-disc list-inside text-gray-200 space-y-1">
            <li>To comply with legal and regulatory requirements</li>
            <li>To verify your identity</li>
            <li>To protect against fraudulent activities and unauthorized access</li>
          </ul>
        </>
      ),
    },
    {
      title: "Sharing Your Information",
      content: (
        <>
          <h3 className="text-[#FFBC3B] font-semibold mb-2">Service Providers:</h3>
          <p className="text-gray-200 mb-2">
            We may share your information with trusted third-party service providers who assist in delivering services and maintaining our Site.
          </p>
          <h3 className="text-[#FFBC3B] font-semibold mb-2">Legal Requirements:</h3>
          <p className="text-gray-200 mb-2">
            We may disclose information when required by law, to protect our rights, or comply with legal proceedings.
          </p>
          <h3 className="text-[#FFBC3B] font-semibold mb-2">Business Transfers:</h3>
          <p className="text-gray-200 mb-2">
            In the event of a merger, acquisition, or sale of our company, your information may be transferred to the acquiring entity.
          </p>
          <h3 className="text-[#FFBC3B] font-semibold mb-2">Consent:</h3>
          <p className="text-gray-200">
            We will obtain your consent before sharing information with third parties for marketing purposes.
          </p>
        </>
      ),
    },
    {
      title: "Security",
      content: (
        <p className="text-gray-200 leading-relaxed">
          We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. 
          However, no method of transmission over the internet or electronic storage is completely secure.
        </p>
      ),
    },
    {
      title: "Your Choices",
      content: (
        <ul className="list-disc list-inside text-gray-200 space-y-1">
          <li>Access your personal information</li>
          <li>Request correction of inaccuracies</li>
          <li>Request deletion (subject to legal requirements)</li>
          <li>Opt-out of marketing communications</li>
          <li>Request a copy of your data in structured format</li>
          <li>Contact us at <a href="mailto:support@almashriqinvest.com" className="text-[#FFBC3B] hover:underline">support@almashriqinvest.com</a></li>
        </ul>
      ),
    },
    {
      title: "Changes to this Privacy Policy",
      content: (
        <p className="text-gray-200 leading-relaxed">
          We may update this Privacy Policy from time to time. Significant changes will be notified through our Site or other means.
        </p>
      ),
    },
  ];

  const titleAnimations = ["fade-right", "fade-left", "zoom-in", "flip-left", "flip-up"];
  const contentAnimations = ["fade-left", "fade-right", "zoom-out", "flip-right", "flip-down"];

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
            <span className="font-light text-2xl md:text-3xl">Privacy Policy</span>
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[#1A1A37] min-h-screen py-12">
        <div className="container mx-auto max-w-5xl px-3 md:px-6">
          <div className="bg-[#252565] rounded-lg shadow-xl p-4 md:p-8 border-t border-b border-[#FFBC3B]">
            {/* Header */}
            <h1 className="text-4xl font-extrabold text-[#FFBC3B] text-center mb-5" data-aos="fade-down">Privacy Policy</h1>

            {/* Sections */}
            {sections.map((section, idx) => (
              <section key={idx} className="mb-8">
                <h2 
                  className="text-2xl font-bold text-[#FFBC3B] mb-4 flex items-center"
                  data-aos={titleAnimations[idx % titleAnimations.length]}
                >
                  <span className="bg-[#FFBC3B] text-[#1A1A37] w-8 h-8 flex justify-center items-center rounded-full mr-3">
                    {idx + 1}
                  </span>
                  {section.title}
                </h2>
                <div data-aos={contentAnimations[idx % contentAnimations.length]}>
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
