import React, { useState } from "react";
import { Link } from "react-router-dom";


const investments = [{ id: 1, name: "INVEST 01", price: 499, daily: 160, monthly: 4800, popular: false, features: ["24/7 Support", "Basic Analytics", "Email Reports"] },
{ id: 2, name: "INVEST 02", price: 1099, daily: 360, monthly: 10800, popular: true, features: ["Priority Support", "Advanced Analytics", "Daily Reports", "Risk Management"] },
{ id: 3, name: "INVEST 03", price: 2899, daily: 960, monthly: 28800, popular: false, features: ["24/7 VIP Support", "Premium Analytics", "Real-time Reports", "Risk Management", "Personal Advisor"] },
{ id: 4, name: "INVEST 04", price: 499, daily: 160, monthly: 4800, popular: false, features: ["24/7 Support", "Basic Analytics", "Email Reports"] },
{ id: 5, name: "INVEST 05", price: 1099, daily: 360, monthly: 10800, popular: true, features: ["Priority Support", "Advanced Analytics", "Daily Reports", "Risk Management"] },
{ id: 6, name: "INVEST 06", price: 2899, daily: 960, monthly: 28800, popular: false, features: ["24/7 VIP Support", "Premium Analytics", "Real-time Reports", "Risk Management", "Personal Advisor"] },
{ id: 7, name: "INVEST 07", price: 499, daily: 160, monthly: 4800, popular: false, features: ["24/7 Support", "Basic Analytics", "Email Reports"] },
{ id: 8, name: "INVEST 08", price: 1099, daily: 360, monthly: 10800, popular: true, features: ["Priority Support", "Advanced Analytics", "Daily Reports", "Risk Management"] },
{ id: 9, name: "INVEST 09", price: 2899, daily: 960, monthly: 28800, popular: false, features: ["24/7 VIP Support", "Premium Analytics", "Real-time Reports", "Risk Management", "Personal Advisor"] },
{ id: 10, name: "INVEST 10", price: 499, daily: 160, monthly: 4800, popular: false, features: ["24/7 Support", "Basic Analytics", "Email Reports"] },
{ id: 11, name: "INVEST 11", price: 1099, daily: 360, monthly: 10800, popular: false, features: ["Priority Support", "Advanced Analytics", "Daily Reports", "Risk Management"] },
{ id: 12, name: "INVEST 12", price: 2899, daily: 960, monthly: 28800, popular: true, features: ["24/7 VIP Support", "Premium Analytics", "Real-time Reports", "Risk Management", "Personal Advisor"] },];

export default function InvestmentCards() {
  const [selectedCard, setSelectedCard] = useState(null);

  const calculateROI = (price, monthly) => ((monthly * 3 - price) / price * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 py-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#006A4E] mb-4">
            Investment Plans
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose from our carefully crafted investment plans designed to maximize your returns with secure and reliable profit generation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {investments.map((inv) => (
            <div
              key={inv.id}
              className={`relative group cursor-pointer transition-transform duration-500 ${selectedCard === inv.id ? "scale-105" : "hover:scale-105"
                }`}
              onMouseEnter={() => setSelectedCard(inv.id)}
              onMouseLeave={() => setSelectedCard(null)}
            >
              {/* Popular Badge */}
              {inv.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-[#006A4E] text-white px-5 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-white h-[520px] flex flex-col justify-between`}>
                {/* Header */}
                <div className="bg-[#006A4E] text-white py-6 px-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{inv.name}</h3>
                  <div className="flex items-center justify-center gap-2 text-gray-200">
                    <span className="text-sm">90 DAYS</span>
                  </div>
                </div>

                {/* Price & ROI */}
                <div className="py-4 px-6 text-center border-b border-gray-100">
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-lg text-gray-100">PKR</span>
                    <span className="text-3xl font-bold text-white">{inv.price}</span>
                  </div>
                  <div className="mt-2">
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                      ROI: {calculateROI(inv.price, inv.monthly)}%
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="py-4 px-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-700">
                      <span>Daily Profit</span>
                      <span className="font-semibold">PKR {inv.daily}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Monthly Profit</span>
                      <span className="font-semibold">PKR {inv.monthly}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Withdrawal</span>
                      <span className="font-semibold text-green-600">Daily</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Commission</span>
                      <span className="font-semibold text-amber-600">19% Daily</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">FEATURES INCLUDED</h4>
                    <ul className="space-y-1">
                      {inv.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                          <span className="text-[#006A4E] font-bold">•</span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <Link to="/register" className="w-full bg-[#006A4E] hover:bg-[#00563C] text-white font-semibold py-3 rounded-xl shadow transition-all duration-300 hover:scale-105">
                    BUY NOW
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            All investments are secured with our 256-bit SSL encryption and protected by our money-back guarantee.
          </p>
        </div>
      </div>
    </div>
  );
}
