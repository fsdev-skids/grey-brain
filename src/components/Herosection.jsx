import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen flex items-start justify-center pt-20 sm:items-center sm:pt-0">
      <div className="max-w-4xl text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 
  text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#9B87F5]">
          Empower Your Learning with Modern Solutions
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Explore courses, tools, and resources crafted to boost your skills and career.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-[#9B87F5] text-white px-8 py-3  font-semibold text-lg hover:bg-blue-800 transition">
            Get Started
          </button>
          <button className="border border-gray-300 bg-white px-8 py-3  font-semibold text-lg hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Decorative background overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
    </section>
  );
};

export default HeroSection;


