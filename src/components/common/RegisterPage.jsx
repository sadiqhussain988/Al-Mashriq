import React from "react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen  flex items-center justify-center bg-[#101826]">
      <div className="bg-[#101826] p-10 rounded-2xl shadow-xl w-full max-w-md border border-gray-700 relative mt-6">
        {/* Decorative Material-style Div */}
       <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-[#00E5FF] rounded-md text-[#FF6612] font-bold shadow-md">
          Al-Mashriq <span className="text-white">Invest</span>
        </div>

      <h1 className="text-3xl font-bold text-[#0bd9f9] text-center mb-8 mt-6">
          Create Account
        </h1>
        
        <form className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="text-[#00E5FF] mb-2 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="p-3 rounded-lg border border-gray-700 bg-[#101826] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00E5FF]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#00E5FF] mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg border border-gray-700 bg-[#101826] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00E5FF]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#00E5FF] mb-2 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="p-3 rounded-lg border border-gray-700 bg-[#101826] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00E5FF]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#00E5FF] mb-2 font-medium">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="p-3 rounded-lg border border-gray-700 bg-[#101826] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00E5FF]"
            />
          </div>
 <button
            type="submit"
            className="bg-[#0ecee4] text-white font-bold py-3 rounded-lg hover:bg-[#068598] transition-colors"
          >
            Register
          </button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-6">
          Already have an account?{" "}
          <span className="text-[#00E5FF] cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
}