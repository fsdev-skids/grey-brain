import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#e9f1f6] shadow-sm border-b border-purple-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left section: Logo + Nav Links */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <span className="text-2xl font-semibold italic font-cursive cursor-pointer">
            Logo
          </span>

          {/* Desktop Menu - Left aligned */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            <li className="hover:text-[#6E59A5] cursor-pointer">Solutions</li>
            <li className="hover:text-[#6E59A5] cursor-pointer">Courses</li>
            <li className="hover:text-[#6E59A5] cursor-pointer">Products</li>
            <li className="flex items-center hover:text-[#6E59A5] cursor-pointer">
              Resources
              <ChevronDown size={16} className="ml-1" />
            </li>
          </ul>
        </div>

        {/* Right section: Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <button className="border border-gray-300 px-4 py-2 rounded-md bg-white hover:bg-gray-100 transition">
            Explore
          </button>
          <button className="bg-[#9B87F5] text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-800 transition">
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-200 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#e9f1f6] border-t border-gray-200">
          <ul className="flex flex-col px-6 py-3 space-y-3 text-sm font-medium">
            <li className="hover:text-blue-800 cursor-pointer">Solutions</li>
            <li className="hover:text-blue-800 cursor-pointer">Courses</li>
            <li className="hover:text-blue-800 cursor-pointer">Products</li>
            <li className="flex items-center hover:text-blue-800 cursor-pointer">
              Resources
              <ChevronDown size={16} className="ml-1" />
            </li>
          </ul>

          <div className="flex flex-col px-6 py-3 space-y-3">
            <button className="border border-gray-300 px-4 py-2 rounded-md bg-white hover:bg-gray-100 transition">
              Explore
            </button>
            <button className="bg-[#9B87F5] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#6E59A5] transition">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
