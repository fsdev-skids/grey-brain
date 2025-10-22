import React from "react";

const testimonials = [
  {
    name: "Dr. Amelia Hart",
    role: "Cardiologist",
    course: "AI diagnostics and precision medicine",
    image:
      "https://randomuser.me/api/portraits/women/65.jpg",
    text: "The course transformed how I approach diagnostics. AI-driven insights now play a major role in my daily practice.",
  },
  {
    name: "James Patel",
    role: "Healthcare Data Analyst",
    course: "Workflow optimization strategies",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    text: "A truly enlightening experience! The workflow strategies helped us cut down manual tasks by 40%.",
  },
  {
    name: "Dr. Sophia Lin",
    role: "Radiologist",
    course: "Clinical AI integration fundamentals",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    text: "The program bridged the gap between medicine and AI beautifully. Highly practical and easy to apply.",
  },
];

const CourseTestimonials = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#9B87F5]">
          What Our Learners Say
        </h2>
        <p className="text-gray-600 text-lg">
          Real stories from professionals transforming their practice through AI learning.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-[#f7fafd] p-6 rounded-xl shadow-sm hover:shadow-md transition text-left flex flex-col"
          >
            <div className="flex items-center mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
                <p className="text-sm text-gray-600">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">“{t.text}”</p>
            <p className="text-sm text-blue-800 font-semibold mt-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#9B87F5]">
              {t.course}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseTestimonials;
