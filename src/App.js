import './App.css';
import { motion } from "framer-motion";
import PartnerCard from './components/PartnerCard';
import { useEffect, useState } from 'react';
import { Sun, Moon } from "lucide-react";
import { Footer } from './components/footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  const partners = [
    {
      image: "/images/skids.webp",
      title: "Skids.health",
      description:
        "Partnering with Grey Brain to implement AI-powered electronic medical records, enhancing pediatric care delivery.",
      tags: ["Healthcare", "AI", "React", "EMR"],
      githubLink: "https://skids.health",
      liveLink: "https://skids.health",
    },
    {
      image: "/images/santaan.jpg",
      title: "Santaan.in",
      description:
        "Utilizing AI and innovation-driven fertility treatments, contributing to nearly 7000 successful pregnancies.",
      tags: ["Fertility", "AI", "Healthcare", "Innovation"],
      githubLink: "https://santaan.in",
      liveLink: "https://santaan.in",
    },
    {
      image: "/images/sai-scan.webp",
      title: "Sai Scan",
      description:
        "Integrating AI-based radiology solutions for accurate and efficient diagnostic services.",
      tags: ["Diagnostics", "AI", "Radiology"],
      githubLink: "https://saiscan.com",
      liveLink: "https://saiscan.com",
    },
    {
      image: "/images/fertile.png",
      title: "Fertile.in",
      description:
        "Providing advanced fertility solutions with a focus on personalized care and success rates.",
      tags: ["Healthcare", "Fertility", "AI"],
      githubLink: "https://fertile.in",
      liveLink: "https://fertile.in",
    },
    {
      image: "/images/spr.png",
      title: "SPR Consulting",
      description:
        "Specializing in custom software development, cloud, and data modernization for healthcare.",
      tags: ["Consulting", "Cloud", "Software"],
      githubLink: "https://sprconsulting.in",
      liveLink: "https://sprconsulting.in",
    },
    {
      image: "/images/she-her.png",
      title: "She-Her.in",
      description:
        "Dedicated to women's health, offering services and support for various health needs.",
      tags: ["Wellness", "Women", "AI Health"],
      githubLink: "https://she-her.in",
      liveLink: "https://she-her.in",
    },
  ];

  return (
    <div className="min-h-screen transition-colors duration-500 bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800 dark:from-gray-900 dark:via-gray-950 dark:to-black dark:text-gray-100">
      {/* Header Section */}
      <header className="relative py-16">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="absolute z-50 top-6 right-6 p-3 rounded-full border border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-800" />
          )}
        </button>

        {/* Hero Section with Flex Layout */}
        <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[90vh] px-6 md:px-16 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-950 dark:to-black transition-colors duration-700">

          {/* Left Side - Text */}
          <div className="flex-1 text-center md:text-left">
            {/* Animated Heading */}
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="relative z-10 text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
            >
              Empowering Healthcare <br /> with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
                AI-Driven Innovation
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="relative z-10 mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl"
            >
              GreyBrain collaborates with healthcare pioneers to enhance patient care through cutting-edge AI and data-driven insights.
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href="#partners"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 mt-10 inline-flex items-center px-6 py-3 text-white font-medium bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl shadow-lg hover:shadow-cyan-400/40 transition-all"
            >
              Discover Our Impact
            </motion.a>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 mt-10 md:mt-0 md:ml-10 relative z-10">
            <motion.img
              src="https://easy-peasy.ai/cdn-cgi/image/quality%3D80%2Cformat%3Dauto%2Cwidth%3D700/https%3A//media.easy-peasy.ai/27feb2bb-aeb4-4a83-9fb6-8f3f2a15885e/094fa578-a59d-4489-bdd6-1ec6d50fdc74.png" // <--- Replace with your image path
              alt="GreyBrain AI Illustration"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-lg mx-auto md:mx-0 rounded-3xl"
            />
          </div>

        </section>

        {/* Optional: Animated Background Neurons */}
        <motion.svg
          className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20"
          viewBox="0 0 800 400"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            stroke="url(#gradient)"
            strokeWidth="0.6"
          >
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.line
                key={i}
                x1={Math.random() * 800}
                y1={Math.random() * 400}
                x2={Math.random() * 800}
                y2={Math.random() * 400}
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </motion.g>
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="800" y2="400">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </motion.svg>
      </header>



      {/* Partner Cards Section */}
      <section className="py-16 px-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Technology Partners
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {partners.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
