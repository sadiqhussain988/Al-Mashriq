// FeaturesSection.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaRocket, FaShieldAlt, FaChartLine, FaUsers } from "react-icons/fa";

const featureImage =
    "https://plus.unsplash.com/premium_photo-1661414432619-290cff769e15?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGl0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500";

const FeaturesSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const features = [
        {
            icon: <FaRocket className="text-3xl text-[#FFBC3B]" />,
            title: "Fully Secured Company",
            description: "We are using fully secured DDOS protected hosting.",
            aos: "fade-right",
        },
        {
            icon: <FaShieldAlt className="text-3xl text-[#FFBC3B]" />,
            title: "Affiliate Network",
            description: "Refer & earn massive commission from our referral program.",
            aos: "fade-left",
        },
        {
            icon: <FaChartLine className="text-3xl text-[#FFBC3B]" />,
            title: "Quick Income",
            description: "All investment plans offer secure high returns to all investors.",
            aos: "fade-up",
        },
        {
            icon: <FaUsers className="text-3xl text-[#FFBC3B]" />,
            title: "24/7 Support Service",
            description: "Our dedicated support team is available 24/7.",
            aos: "fade-down",
        },
    ];

    return (
        <section className="w-full bg-[#1A1A37] text-white py-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-6 gap-10">
                {/* Left Side: Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            data-aos={feature.aos}
                            data-aos-delay={index * 150}
                            className="group relative bg-[#2A2A55] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2"
                        >
                            {/* Top line */}
                            <span className="absolute top-0 left-0 w-0 h-0.5 bg-[#FFBC3B] transition-all duration-300 group-hover:w-full"></span>
                            {/* Bottom line */}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFBC3B] transition-all duration-300 group-hover:w-full"></span>

                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-300 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
                {/* Right Side: Image */}
                <div
                    data-aos="zoom-in"
                    data-aos-delay={600}
                    className="flex-1"
                >
                    <img
                        src={featureImage}
                        alt="Feature Illustration"
                        className="w-full h-auto rounded-xl shadow-lg border border-[#FFBC3B]"
                    />
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;