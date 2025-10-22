// import { motion } from "framer-motion";
// import { Globe, ExternalLink } from "lucide-react";

// const PartnerCard = ({ image, title, description, tags, githubLink, liveLink }) => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.03, y: -5 }}
//       transition={{ duration: 0.3 }}
//       className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all w-full max-w-sm 
//                  border border-gray-200 dark:border-gray-700 
//                  bg-white/70 dark:bg-gray-900/70 backdrop-blur-md"
//     >
//       {/* Top Image */}
//       <div className="h-40 w-full overflow-hidden">
//         <img
//           src={image}
//           alt={title}
//           className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-5">
//         <h3 className="text-gray-900 dark:text-white text-xl font-semibold mb-2">{title}</h3>
//         <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed truncate-description">
//   {description}
// </p>


//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 mb-5">
//           {tags.map((tag, index) => (
//             <span
//               key={index}
//               className="text-xs px-2 py-1 rounded-md 
//                          bg-cyan-100 text-cyan-700 
//                          dark:bg-cyan-900/30 dark:text-cyan-400"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-3">
//           <a
//             href={githubLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-sm px-3 py-2 rounded-md border transition
//                        bg-gray-100 border-gray-300 text-gray-800 hover:bg-gray-200
//                        dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:hover:border-gray-500"
//           >
//             <Globe className="w-4 h-4" /> Visit
//           </a>

//           <a
//             href={liveLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-sm px-3 py-2 rounded-md border transition
//                        bg-cyan-100 border-cyan-400 text-cyan-700 hover:bg-cyan-200
//                        dark:bg-cyan-500/10 dark:border-cyan-500 dark:text-cyan-400 dark:hover:bg-cyan-500 dark:hover:text-black"
//           >
//             <ExternalLink className="w-4 h-4" /> Explore
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default PartnerCard;


import React from "react";

const logos = [
  { name: "Webflow", img: "https://static.wixstatic.com/media/fd2a61_fe338da896ef4a0f9706e95119a10041~mv2.png/v1/fill/w_158,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fd2a61_fe338da896ef4a0f9706e95119a10041~mv2.png" },
  { name: "Relume", img: "https://skids.health/static/media/skidslogo.6be5456ce1ef025a1395.png" },
  { name: "Webflow", img: "https://static.wixstatic.com/media/fd2a61_fe338da896ef4a0f9706e95119a10041~mv2.png/v1/fill/w_158,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fd2a61_fe338da896ef4a0f9706e95119a10041~mv2.png" },
  { name: "Relume", img: "https://skids.health/static/media/skidslogo.6be5456ce1ef025a1395.png" },
  { name: "Webflow", img: "https://static.wixstatic.com/media/fd2a61_fe338da896ef4a0f9706e95119a10041~mv2.png/v1/fill/w_158,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fd2a61_fe338da896ef4a0f9706e95119a10041~mv2.png" },
  { name: "Relume", img: "https://skids.health/static/media/skidslogo.6be5456ce1ef025a1395.png" },
];

const Partners = () => {
  return (
    <section className="bg-[#e9f1f6] py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <p className="text-sm">
          Innovators who trust our technology
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex items-center space-x-16 animate-marquee">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo.img}
              alt={logo.name}
              className="h-10 w-auto  transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
