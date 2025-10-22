
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "../components/Herosection";
import CoursesSection from "./CoursesSection";
import Partners from "./PartnersLogo";
import CourseTestimonials from "./CourseTestimonials";
import PartnersCard from "./PartnersCard";
import Footer from "./footer";


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
    <HeroSection/>
    <CoursesSection/>
    <CourseTestimonials/>
    <PartnersCard/>
    <Partners/>
    <Footer/>
    </>
  );
}

