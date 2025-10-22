import React from "react";
import { useParams } from "react-router-dom";
import { Star, Clock, Users, ArrowRight } from "lucide-react";

const courseData = {
  1: {
    title: "Using AI for Academic Research and Paper Writing",
    category: "Clinical",
    duration: "10 weeks",
    students: 1200,
    rating: 4.9,
    reviews: 320,
    description:
      "Master AI-driven tools for research, academic writing, and data analysis to enhance scholarly productivity.",
  },
  2: {
    title: "Running Your Business with AI",
    category: "Workflow",
    duration: "8 weeks",
    students: 980,
    rating: 4.7,
    reviews: 190,
    description:
      "Use AI to automate workflows, boost efficiency, and make informed decisions for sustainable business growth.",
  },
  3: {
    title: "Super Agents: How to Hire AI to Work For You",
    category: "Diagnostics",
    duration: "12 weeks",
    students: 1340,
    rating: 4.8,
    reviews: 210,
    description:
      "Learn to deploy and manage AI agents for advanced analytics and diagnostic solutions.",
  },
};

const CourseDetail = () => {
  const { id } = useParams();
  const course = courseData[id];

  if (!course) {
    return <div className="text-center py-20 text-gray-700">Course not found.</div>;
  }

  return (
    <section className="bg-[#e9f1f6] min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-sm text-gray-600 mb-4">
          Courses / {course.category} /{" "}
          <span className="font-semibold text-gray-800">{course.title}</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
        <p className="text-gray-600 mb-6">{course.description}</p>

        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-700 mb-6">
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-500 fill-yellow-500" />
            <span>{course.rating}</span>
            <span className="text-gray-500">({course.reviews} reviews)</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={16} />
            <span>{course.students} students</span>
          </div>
        </div>

        <button className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 flex items-center gap-2">
          Enroll Now <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default CourseDetail;
