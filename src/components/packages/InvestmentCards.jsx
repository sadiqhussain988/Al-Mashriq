import React, { useState } from "react";

const investments = [
  { id: 1, name: "INVEST 01", price: 499, daily: 160, monthly: 4800, popular: false, features: ["24/7 Support", "Basic Analytics", "Email Reports"] },
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
  { id: 12, name: "INVEST 12", price: 2899, daily: 960, monthly: 28800, popular: true, features: ["24/7 VIP Support", "Premium Analytics", "Real-time Reports", "Risk Management", "Personal Advisor"] },
];

export default function AdvancedInvestmentCards() {
  const [selectedCard, setSelectedCard] = useState(null);

  const calculateROI = (price, monthly) => {
    return ((monthly * 3 - price) / price * 100).toFixed(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1A1A37] to-[#232350] bg-clip-text text-transparent mb-4">
            Investment Plans
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose from our carefully crafted investment plans designed to maximize your returns with secure and reliable profit generation.
          </p>
        </div>

        {/* Investment Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {investments.map((inv, index) => (
            <div
              key={inv.id}
              className={`relative group cursor-pointer transition-all duration-500 ${
                selectedCard === inv.id ? 'scale-105' : 'hover:scale-105'
              }`}
              onMouseEnter={() => setSelectedCard(inv.id)}
              onMouseLeave={() => setSelectedCard(null)}
            >
              {/* Popular Badge */}
              {inv.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Main Card */}
              <div className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${
                inv.popular ? 'border-amber-300' : 'border-white'
              } ${selectedCard === inv.id ? 'ring-4 ring-blue-100 ring-opacity-50' : ''}`}>
                
                {/* Animated Gradient Header */}
                <div className="relative bg-gradient-to-r from-[#1A1A37] to-[#232350] text-white py-6 px-6 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl font-bold mb-1">{inv.name}</h3>
                    <div className="flex items-center justify-center gap-2 text-amber-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm">90 DAYS</span>
                    </div>
                  </div>
                </div>

                {/* Price Section */}
                <div className="py-6 px-6 text-center border-b border-gray-100">
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-2xl text-gray-500">PKR</span>
                    <span className="text-4xl font-bold text-gray-800">{inv.price}</span>
                  </div>
                  <div className="mt-2">
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                      ROI: {calculateROI(inv.price, inv.monthly)}%
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="py-6 px-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Daily Profit</span>
                      <span className="font-semibold text-gray-800">PKR {inv.daily}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Monthly Profit</span>
                      <span className="font-semibold text-gray-800">PKR {inv.monthly}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Withdrawal</span>
                      <span className="font-semibold text-green-600">Daily</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">Commission</span>
                      <span className="font-semibold text-amber-600">19% Daily</span>
                    </div>
                  </div>

                  {/* Additional Features */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-500 mb-3">FEATURES INCLUDED</h4>
                    <div className="space-y-2">
                      {inv.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="px-6 pb-6">
                  <button className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 group">
                    <div className="flex items-center justify-center gap-2">
                      <span>BUY NOW</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </div>
                  </button>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                  <div className="absolute inset-[2px] rounded-2xl bg-white z-10"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 animate-ping"></div>
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