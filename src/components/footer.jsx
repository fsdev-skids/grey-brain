// "use client";

// export function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-4 border-t border-gray-300 dark:border-gray-700">
//       <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
//         {/* Left Text */}
//         <p className="text-sm">&copy; {currentYear} Grey Brain. All Rights Reserved.</p>

//         {/* Right Links */}
//         <div className="flex gap-4 text-sm">
//           <a
//             href="#"
//             className="hover:text-purple-600 dark:hover:text-cyan-400 transition-colors duration-200"
//           >
//             Privacy Policy
//           </a>
//           <a
//             href="#"
//             className="hover:text-purple-600 dark:hover:text-cyan-400 transition-colors duration-200"
//           >
//             Terms of Service
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }


import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-14 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white italic mb-4">Logo</h2>
          <p className="text-sm leading-relaxed">
            Empowering professionals through intelligent learning and advanced AI-driven
            solutions for the future of healthcare.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Solutions</li>
            <li className="hover:text-white cursor-pointer">Courses</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">Resources</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold text-white">Your Company</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
