import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    category: "Skids",
    title: "Advanced Paediatric clinic",
    description:
      "We offer you a comprehensive range of paediatric care options to support your child's health.",
    linkText: "Learn more",
  },
  {
    category: "Santaan",
    title: "Santaan Fertility Clinic",
    description:
      "Santaan’s commitment to holistic care includes fertility counseling and emotional support.",
    linkText: "Learn more",
  },
  {
    category: "Sai Scan",
    title: "AI-driven radiology solutions",
    description:
      "Integrating AI-based radiology solutions for accurate and efficient diagnostic services.",
    linkText: "Learn more",
  },
];

const PartnersCard = () => {
  
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate("/partners");
  };
  return (
    <section className="bg-[#e9f1f6] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <p className="text-sm font-semibold text-gray-700 mb-2">Partners</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Trusted technology collaborators
        </h2>
        <p className="text-gray-600 mb-12">
          Innovative partnerships driving healthcare transformation
        </p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#dce7ef] rounded-lg overflow-hidden">
          {/* Left: Image placeholder */}
          <div className="flex items-center justify-center bg-[#cddbe5] h-64 md:h-auto">
            <div className="flex flex-col items-center justify-center text-gray-500">
              <div className="w-12 h-12 bg-gray-400 rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7l9 6 9-6M4 17h16"
                  />
                </svg>
              </div>
              <span className="text-sm mt-2">Image</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center text-left px-8 py-10 bg-[#e1edf5]">
            <p className="text-sm font-semibold text-gray-600 mb-1">Network</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
              Expanding possibilities through strategic alliances
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              We connect leading healthcare organizations to accelerate
              technological advancement.
            </p>
            <div className="flex gap-4">
              <button className="px-4 py-2 text-sm font-medium bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition">
                Learn more
              </button>
              <button className="flex items-center gap-1 text-sm font-semibold text-gray-800 hover:underline">
                Connect <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="p-6 text-left flex flex-col justify-between h-48">
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-1">
                  {course.category}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {course.description}
                </p>
              </div>
              <button className="text-blue-800 font-semibold text-sm flex items-center gap-1 hover:underline">
                {course.linkText} <ArrowRight size={16} />
              </button>
            </div>
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Image</span>
            </div>
          </div>
        ))}
      </div>
      {/* Explore More Button */}
      <div className="flex justify-center pt-12">
        <button onClick={handleSeeMore} className="bg-blue-900 text-white flex items-center justify-between w-42 border border-gray-300 px-4 py-2 font-semibold text-lg transition gap-2">
          <span>See More</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default PartnersCard;
