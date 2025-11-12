import React from "react";

const investments = [
  { id: 1, name: "INVEST 01", price: 499, daily: 160, monthly: 4800 },
  { id: 2, name: "INVEST 02", price: 1099, daily: 360, monthly: 10800 },
  { id: 3, name: "INVEST 03", price: 2899, daily: 960, monthly: 28800 },
  { id: 4, name: "INVEST 04", price: 499, daily: 160, monthly: 4800 },
  { id: 5, name: "INVEST 05", price: 1099, daily: 360, monthly: 10800 },
  { id: 6, name: "INVEST 06", price: 2899, daily: 960, monthly: 28800 },
  { id: 7, name: "INVEST 07", price: 499, daily: 160, monthly: 4800 },
  { id: 8, name: "INVEST 08", price: 1099, daily: 360, monthly: 10800 },
  { id: 9, name: "INVEST 09", price: 2899, daily: 960, monthly: 28800 },
  { id: 10, name: "INVEST 10", price: 499, daily: 160, monthly: 4800 },
  { id: 11, name: "INVEST 11", price: 1099, daily: 360, monthly: 10800 },
  { id: 12, name: "INVEST 12", price: 2899, daily: 960, monthly: 28800 },
];

export default function InvestmentCards() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {investments.map((inv) => (
          <div
            key={inv.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            {/* Card Header */}
            <div className="bg-linear-to-r from-blue-500 to-blue-700 text-white text-center font-semibold py-4 text-lg">
              {inv.name}
            </div>

            {/* Card Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">PKR {inv.price}</h2>
                <hr className="border-gray-300 mb-4" />
                <ul className="text-gray-700 text-left space-y-2">
                  <li>• Duration: 90 days</li>
                  <li>• Daily Profit: PKR {inv.daily}</li>
                  <li>• Monthly Profit: PKR {inv.monthly}</li>
                  <li>• Withdraw: Daily</li>
                  <li>• Ref. Commission: 19% daily</li>
                </ul>
              </div>

          <div className="flex justify-center items-center">

                <button className="bg-linear-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 rounded-full w-[300px] shadow-lg transform hover:scale-105 transition-all duration-300 ">
                BUY NOW
              </button>
          </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
