// InfoSection.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const InfoSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="w-full bg-white py-14 md:py-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-6 gap-10 overflow-hidden">
                {/* Left Side: Text */}
                <div className="flex-1 space-y-6">
                    <h2
                        data-aos="fade-right"
                        className="text-4xl md:text-5xl font-bold text-[#1A1A37]"
                    >
                        About Company
                    </h2>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="text-gray-900 text-lg max-w-lg"
                    >
                        By investing with us or a managed portfolio offered by an investment company, you gain access to professional fund managers who make investment decisions on your behalf. This can be especially beneficial if you lack the time or expertise to manage your investments actively.
                    </p>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="text-gray-900 text-lg max-w-lg"
                    >
                        This can include thorough research, ongoing monitoring, and adjustments to the portfolio to respond to changing market conditions.
                    </p>
                    <button
                        data-aos="zoom-in"
                        data-aos-delay="400"
                        className="text-[#FFBC3B] hover:text-[#1A1A37] border border-[#FFBC3B] hover:bg-[#e6ad34] px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#FFBC3B]/40"
                    >
                        Start Now
                    </button>
                </div>

                {/* Right Side: Image */}
                <div
                    data-aos="fade-left"
                    data-aos-delay="500"
                    className="flex-1 overflow-hidden rounded-xl shadow-lg"
                >
                    <img
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=600"
                        alt="Investment Illustration"
                        className="w-full h-auto transform transition-transform duration-500 ease-in-out hover:scale-110 border border-[#1A1A37]"
                    />
                </div>
            </div>
        </section>
    );
};

export default InfoSection;