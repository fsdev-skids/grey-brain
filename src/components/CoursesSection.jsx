// import { useState, useEffect } from "react";
// import { Star } from "lucide-react";
// import { courses } from "../data/dummyCourses";

// export default function CoursesSection() {
//   const [filter, setFilter] = useState({ level: "All" });
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const observer = new MutationObserver(() => {
//       setIsDarkMode(document.documentElement.classList.contains("dark"));
//     });
//     observer.observe(document.documentElement, {
//       attributes: true,
//       attributeFilter: ["class"],
//     });
//     return () => observer.disconnect();
//   }, []);

//   const filteredCourses =
//     filter.level === "All"
//       ? courses
//       : courses.filter((course) => course.level === filter.level);

//       const visibleCourses = filteredCourses.slice(0, 3);

//   return (
//     <section
//       className={`px-6 py-12 transition-colors duration-500 ${
//         isDarkMode
//           ? "bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-100"
//           : "bg-gradient-to-br from-purple-50 to-pink-50 text-gray-800"
//       }`}
//       id="courses"
//     >
//       <h2 className="text-3xl font-bold mb-8 text-center">Our Courses</h2>

//       {/* Courses Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
//         {visibleCourses.map((course) => (
//           <div
//             key={course.id}
//             className={`rounded-xl shadow-md hover:shadow-xl overflow-hidden transition duration-300 cursor-pointer border ${
//               isDarkMode
//                 ? "bg-gray-900 border-gray-800 hover:bg-gray-800"
//                 : "bg-white border-gray-100 hover:-translate-y-1"
//             }`}
//           >
//             {/* Image */}
//             <div className="relative">
//               <img
//                 src={course.image}
//                 alt={course.title}
//                 className="w-full h-36 object-cover"
//               />
//               {/* Type badge */}

//             </div>

//             {/* Content */}
//             <div className="p-3">
//               <h3
//                 className={`font-semibold text-base leading-tight mb-1 ${
//                   isDarkMode ? "text-gray-100" : "text-gray-900"
//                 }`}
//               >
//                 {course.title}
//               </h3>
//               <p
//                 className={`text-xs mb-1 ${
//                   isDarkMode ? "text-gray-400" : "text-gray-600"
//                 }`}
//               >
//                 {course.instructor}
//               </p>
//               <p
//                 className={`text-xs mb-2 line-clamp-2 ${
//                   isDarkMode ? "text-gray-400" : "text-gray-500"
//                 }`}
//               >
//                 {course.description}
//               </p>

//               {/* Ratings */}
//               <div className="flex items-center text-xs mb-2">
//                 <span
//                   className={`font-semibold mr-1 ${
//                     isDarkMode ? "text-gray-100" : "text-gray-900"
//                   }`}
//                 >
//                   {course.rating}
//                 </span>
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     size={12}
//                     fill={i < Math.floor(course.rating) ? "#facc15" : "none"}
//                     stroke="#facc15"
//                   />
//                 ))}
//                 <span className="ml-1 text-gray-500">({course.reviews})</span>
//               </div>

//               {/* Price Section */}
//               <div className="flex items-center justify-between">
//                 <div>
//                   <span
//                     className={`text-sm font-bold ${
//                       isDarkMode ? "text-gray-100" : "text-gray-900"
//                     }`}
//                   >
//                     {course.discountPrice}
//                   </span>
//                   <span className="text-xs line-through text-gray-400 ml-1">
//                     {course.originalPrice}
//                   </span>
//                 </div>

//                 {course.isBestseller && (
//                   <span className="text-[10px] bg-purple-100 text-purple-700 px-2 py-[2px] rounded-md font-medium dark:bg-purple-800 dark:text-purple-200">

//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Explore More Button */}
//       <div className="flex justify-center">
//         <button
//           className={`px-5 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ${
//             isDarkMode
//               ? "bg-gradient-to-r from-purple-700 to-cyan-600 text-white"
//               : "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
//           }`}
//         >
//           Explore More →
//         </button>
//       </div>
//     </section>
//   );
// }



import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const courses = [
    {
        id: 1,
        category: "Clinical",
        title: "Using AI for Academic Research and Paper Writing",
        description: "Using AI to accelerate academic work—from conducting deep literature reviews to structuring and refining research papers.",
        linkText: "Enroll now",
    },
    {
        id: 2,
        category: "Workflow",
        title: "Running Your Business with AI",
        description: "Learn to attract and engage audiences, automate repetitive processes, and maintain ethical standards in AI-generated content.",
        linkText: "Enroll now",
    },
    {
        id: 3,
        category: "Diagnostics",
        title: "Super Agents: How to Hire AI to Work For You",
        description: "Advanced analytical techniques for accurate medical insights",
        linkText: "Enroll now",
    }
];

const CoursesSection = () => {
  const navigate = useNavigate();

  const handleCourseClick = (id) => {
    navigate(`/course/${id}`);
  };

    const handleExploreCourses = () => {
    navigate("/courses");
  };
    return (
        <section className="bg-[#e9f1f6] py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                {/* Section header */}
                <h2 className="text-4xl font-bold mb-3 
  text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#9B87F5]">
  AI-powered professional growth
</h2>

                <p className="text-gray-600 mb-12">
                    Transformative learning experiences for healthcare professionals
                </p>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-start text-left"
                        >
                            <div className="w-full h-32 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                                <span className="text-gray-400 text-sm">Image</span>
                            </div>
                            <p className="text-sm font-semibold text-gray-600 mb-1">
                                {course.category}
                            </p>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {course.title}
                            </h3>
                            <p className="text-sm text-gray-600 flex-grow">
                                {course.description}
                            </p>
                            <button onClick={() => handleCourseClick(course.id)} className="mt-4 text-blue-800 font-semibold flex items-center gap-1 hover:underline">
                                {course.linkText} <ArrowRight size={16} />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Explore More Button */}
                <div className="flex justify-center">
                    <button onClick={handleExploreCourses} className="bg-[#9B87F5] text-white flex items-center justify-between w-48 border border-gray-300 px-4 py-2 font-semibold text-lg transition">
                        <span>Explore Courses</span>
                        <ArrowRight size={18} />
                    </button>


                </div>
            </div>
        </section>
    );
};

export default CoursesSection;
