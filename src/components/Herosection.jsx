import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Empower Your Learning with <span className="text-blue-700">Modern Solutions</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Explore courses, tools, and resources crafted to boost your skills and career.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-blue-900 text-white px-8 py-3  font-semibold text-lg hover:bg-blue-800 transition">
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
