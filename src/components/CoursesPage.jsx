import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const allCourses = [
  {
    id: 1,
    category: "Clinical",
    title: "Using AI for Academic Research and Paper Writing",
    description:
      "Using AI to accelerate academic work—from conducting deep literature reviews to structuring and refining research papers.",
    linkText: "Enroll now",
  },
  {
    id: 2,
    category: "Workflow",
    title: "Running Your Business with AI",
    description:
      "Learn to attract and engage audiences, automate repetitive processes, and maintain ethical standards in AI-generated content.",
    linkText: "Enroll now",
  },
  {
    id: 3,
    category: "Diagnostics",
    title: "Super Agents: How to Hire AI to Work For You",
    description: "Advanced analytical techniques for accurate medical insights",
    linkText: "Enroll now",
  },
  {
    id: 4,
    category: "Management",
    title: "AI in Healthcare Leadership",
    description:
      "Develop leadership strategies for adopting AI-driven innovations in healthcare systems.",
    linkText: "Enroll now",
  },
  {
    id: 5,
    category: "Analytics",
    title: "Data-Driven Decision Making with AI",
    description:
      "Learn to use data insights to guide medical and business decisions more effectively.",
    linkText: "Enroll now",
  },
  {
    id: 6,
    category: "Research",
    title: "AI Ethics and Responsible Innovation",
    description:
      "Explore frameworks for ethical AI implementation in medical and business environments.",
    linkText: "Enroll now",
  },
];

const CoursesPage = () => {
  const navigate = useNavigate();

  const handleCourseClick = (id) => {
    navigate(`/course/${id}`);
  };

  return (
    <section className="bg-[#e9f1f6] min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Explore All Courses
        </h1>
        <p className="text-gray-600 mb-12">
          Choose from our growing library of AI-powered professional learning programs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition flex flex-col text-left"
            >
              <div className="w-full h-36 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
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
              <button
                onClick={() => handleCourseClick(course.id)}
                className="mt-4 text-blue-800 font-semibold flex items-center gap-1 hover:underline"
              >
                {course.linkText} <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesPage;
