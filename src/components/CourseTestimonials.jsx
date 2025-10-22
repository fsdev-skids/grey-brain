import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Dixita Shetty",
    email: "d.shetty93@gmail.com",
    date: "Wed Oct 08 2025 10:57:38 GMT+0000",
    review:
      "Fantastic course for learning how to use AI for medicos, so grateful.",
  },
  {
    name: "Dr. Deepa Mohan Sharma",
    email: "drdeepa.msharma@gmail.com",
    date: "Sun Oct 05 2025 15:25:16 GMT+0000",
    review: "An excellent, insightful, and transformative course experience.",
  },
  {
    name: "Dr Anston Braggs",
    email: "anstonb@gmail.com",
    date: "Sat Oct 04 2025 12:04:45 GMT+0000",
    review: "Perfectly designed for healthcare professionals exploring AI.",
  },
  {
    name: "Dr Aditya Kulkarni",
    email: "iasclepius@gmail.com",
    date: "Tue Sep 30 2025 12:39:09 GMT+0000",
    review: "Concise, practical, and extremely relevant to modern medicine.",
  },
  {
    name: "Dr Deepak Chiradoni",
    email: "deepakchiradoni@gmail.com",
    date: "Tue Jul 29 2025 13:58:47 GMT+0000",
    review:
      "This course’s structured approach to Gen AI education for medical professionals is both timely and essential.",
  },
  {
    name: "Dr. Utkarsh Bhagat",
    email: "utkarsh.bhagat2k12@gmail.com",
    date: "Tue Jul 29 2025 08:55:29 GMT+0000",
    review:
      "Good going so far, trying and exploring new arenas, interesting applications in sight!",
  },
  {
    name: "Dr.S.G.Vijayasri",
    email: "vijayasugumar1020@gmail.com",
    date: "Sat Jul 19 2025 15:35:05 GMT+0000",
    review: "Great learning experience with lots of practical insights.",
  },
];

const CourseTestimonials = () => {
  const [index, setIndex] = useState(0);

  // Show next set of 3 cards every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev + 3 >= testimonials.length ? 0 : prev + 3
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Determine visible 3 cards
  const visibleCards = testimonials.slice(index, index + 3);
  if (visibleCards.length < 3) {
    visibleCards.push(
      ...testimonials.slice(0, 3 - visibleCards.length)
    );
  }

  return (
    <section className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#9B87F5]">
          What Our Learners Say
        </h2>
        <p className="text-gray-600 text-lg">
          Hear from healthcare professionals who rated our course 5 stars.
        </p>
      </div>

      {/* Slider Container */}
      <div className="max-w-6xl mx-auto flex justify-center transition-transform duration-700 ease-in-out gap-6">
        {visibleCards.map((t, i) => (
          <div
            key={i}
            className="w-full sm:w-1/2 lg:w-1/3 bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl shadow-md p-6 h-[230px] flex flex-col items-center justify-between text-center hover:shadow-lg transition-all"
          >
            <div className="text-[#9B87F5] text-4xl leading-none mb-2">“</div>
            <p className="text-gray-700 text-sm italic mb-3">{t.review}</p>

            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>

            <div>
              <p className="font-semibold text-gray-900">{t.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseTestimonials;
