// import { motion } from "framer-motion";
// import PartnerCard from "../components/PartnerCard";
// import { Footer } from "../components/footer";
// import CoursesSection from "../components/CoursesSection";
// import { partners } from "../data/partners";
import { useEffect, useState } from "react";
// import { Sun, Moon } from "lucide-react";
import Navbar from "./Navbar";
import HeroSection from "../components/Herosection";
import CoursesSection from "./CoursesSection";
import Partners from "./PartnersLogo";
import CourseTestimonials from "./CourseTestimonials";
import Footer from "./Footer";
import PartnersCard from "./PartnersCard";
import CourseDetail from "./CourseDetail";


export default function Home() {
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
  

  return (
    <>
    <Navbar />
    <HeroSection/>
    <CoursesSection/>
    <CourseTestimonials/>
    <PartnersCard/>
    <Partners/>
    <Footer/>
    </>
  );
}


{/* <div className="min-h-screen transition-colors duration-500 bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800 dark:from-gray-900 dark:via-gray-950 dark:to-black dark:text-gray-100"> */}
      {/* Hero Section */}
//       <header className="relative py-16 bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-950 dark:to-black transition-colors duration-700">
//         <button
//     onClick={toggleTheme}
//     className="absolute top-6 right-6 p-3 rounded-full border border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
//   >
//     {isDarkMode ? (
//       <Sun className="w-5 h-5 text-yellow-400" />
//     ) : (
//       <Moon className="w-5 h-5 text-gray-800" />
//     )}
//   </button>
//         <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[90vh] px-6 md:px-16 overflow-hidden">
          {/* Left Side */}
          {/* <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-5xl md:text-6xl font-extrabold leading-tight"
            >
              Empowering Healthcare <br /> with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
                AI-Driven Innovation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl"
            >
              GreyBrain collaborates with healthcare pioneers to enhance patient care through cutting-edge AI and data-driven insights.
            </motion.p>

            <div className="mt-10 flex flex-col md:flex-row gap-4">
              <motion.a
                href="#courses"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center px-6 py-3 text-white font-medium bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl shadow-lg hover:shadow-cyan-400/40 transition-all"
              >
                See Our Courses
              </motion.a>

              <motion.a
                href="#products"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center px-6 py-3 text-white font-medium bg-gradient-to-r from-cyan-600 to-purple-500 rounded-xl shadow-lg hover:shadow-blue-400/40 transition-all"
              >
                See Our Products
              </motion.a>
            </div>
          </div> */}

          {/* Right Image */}
          {/* <div className="flex-1 mt-10 md:mt-0 md:ml-10">
            <motion.img
              src="https://easy-peasy.ai/cdn-cgi/image/quality%3D80%2Cformat%3Dauto%2Cwidth%3D700/https%3A//media.easy-peasy.ai/27feb2bb-aeb4-4a83-9fb6-8f3f2a15885e/094fa578-a59d-4489-bdd6-1ec6d50fdc74.png"
              alt="GreyBrain AI Illustration"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-lg mx-auto rounded-3xl"
            />
          </div>
        </section>
      </header> */}

      {/* Courses Section */}
      {/* <CoursesSection /> */}

      {/* Partners Section */}
      {/* <section className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Technology Partners
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {partners.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
        </div>
      </section>

      <Footer />
    </div> */}