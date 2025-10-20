import { motion } from "framer-motion";
import { Globe, ExternalLink } from "lucide-react";

const PartnerCard = ({ image, title, description, tags, githubLink, liveLink }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all w-full max-w-sm 
                 border border-gray-200 dark:border-gray-700 
                 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md"
    >
      {/* Top Image */}
      <div className="h-40 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-gray-900 dark:text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-md 
                         bg-green-100 text-green-700 
                         dark:bg-green-900/30 dark:text-green-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm px-3 py-2 rounded-md border transition
                       bg-gray-100 border-gray-300 text-gray-800 hover:bg-gray-200
                       dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:hover:border-gray-500"
          >
            <Globe className="w-4 h-4" /> Visit
          </a>

          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm px-3 py-2 rounded-md border transition
                       bg-green-100 border-green-400 text-green-700 hover:bg-green-200
                       dark:bg-green-500/10 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-500 dark:hover:text-black"
          >
            <ExternalLink className="w-4 h-4" /> Explore
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PartnerCard;
