import React from "react";
import { ArrowRight } from "lucide-react";

const partners = [
  {
    category: "Skids",
    title: "Advanced Paediatric clinic",
    description:
      "We offer you a comprehensive range of paediatric care options to support your child's health.",
  },
  {
    category: "Santaan",
    title: "Santaan Fertility Clinic",
    description:
      "Santaan’s commitment to holistic care includes fertility counseling and emotional support.",
  },
  {
    category: "Sai Scan",
    title: "AI-driven radiology solutions",
    description:
      "Integrating AI-based radiology solutions for accurate and efficient diagnostic services.",
  },
  {
    category: "TechHealth",
    title: "AI Medical Imaging",
    description:
      "Partnering with hospitals to enhance diagnostic accuracy using AI-driven imaging.",
  },
  {
    category: "BioCare",
    title: "Genomic Research Support",
    description:
      "Collaborating on genetic data analysis for precision healthcare advancements.",
  },
  {
    category: "MediLink",
    title: "Telemedicine Solutions",
    description:
      "Bringing advanced digital health platforms to remote and urban populations alike.",
  },
];

const PartnersPage = () => {
  return (
    <section className="bg-[#e9f1f6] min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Our Partner Network
        </h1>
        <p className="text-gray-600 mb-12 text-center">
          Collaborating with leading healthcare innovators to create impactful AI solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="p-6 text-left flex flex-col justify-between h-56">
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">
                    {partner.category}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {partner.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {partner.description}
                  </p>
                </div>
                <button className="text-blue-800 font-semibold text-sm flex items-center gap-1 hover:underline">
                  Learn more <ArrowRight size={16} />
                </button>
              </div>
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Image</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersPage;
