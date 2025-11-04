import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React, { useRef } from "react";
import { Heart, MessageCircle, Share } from "lucide-react";


const articles = [
  {
    avatar: "https://placehold.co/32x32?text=CB",
    source: "CreativeBloq",
    time: "1 hour ago",
    image: "https://placehold.co/600x400/000/fff?text=Affinity",
    title: "I'm absolutely loving the Affinity rebrand",
    desc: "Affinity made waves last week with its new rebrand...",
    likes: 1, comments: 8, shares: 1,
  },
  {
    avatar: "https://placehold.co/32x32?text=P",
    source: "ProPublica",
    time: "9 hours ago",
    image: "https://placehold.co/600x400/222/fff?text=Courtroom",
    title: "Appeals Court Upholds Conviction Despite Examiner Recanting",
    desc: "A judge raised concerns about ignoring forensic reversals...",
    likes: 4, comments: 1, shares: 10,
  },
  {
    avatar: "https://placehold.co/32x32?text=PD",
    source: "Market Moving News",
    time: "2 hours ago",
    image: "https://placehold.co/600x400/334/fff?text=AI",
    title: "AI CEOs warn of capex-revenue mismatch",
    desc: "Executives warn of irrational AI investment exuberance...",
    likes: 6, comments: 10, shares: 2,
  },
  {
    avatar: "https://placehold.co/32x32?text=TC",
    source: "TechCrunch",
    time: "5 hours ago",
    image: "https://placehold.co/600x400/444/fff?text=Tech",
    title: "Startups are reshaping AI developer tools",
    desc: "Startup momentum continues in the AI tooling space...",
    likes: 20, comments: 5, shares: 3,
  },
  {
    avatar: "https://placehold.co/32x32?text=WI",
    source: "WIRED",
    time: "3 hours ago",
    image: "https://placehold.co/600x400/555/fff?text=Science",
    title: "The science behind deep learning models",
    desc: "Deep learning architectures continue evolving rapidly...",
    likes: 13, comments: 6, shares: 2,
  },
  {
    avatar: "https://placehold.co/32x32?text=BB",
    source: "Bloomberg",
    time: "1 hour ago",
    image: "https://placehold.co/600x400/666/fff?text=Finance",
    title: "Markets react to new tech regulations",
    desc: "Markets adjust as new policy impacts big tech firms...",
    likes: 9, comments: 3, shares: 1,
  }
];

const NewsCard = ({ article }) => (
  <div className="flex-[0_0_33.33%] min-w-[300px] bg-white rounded-xl shadow border p-4">

    {/* Header */}
    <div className="flex items-center gap-2 mb-3">
      <img src={article.avatar} alt="" className="w-8 h-8 rounded-full" />
      <div className="flex flex-col text-sm">
        <span className="font-semibold">{article.source}</span>
        <span className="text-gray-500">{article.time}</span>
      </div>
    </div>

    {/* Image */}
    <img
      src={article.image}
      alt="news"
      className="w-full h-48 rounded-md object-cover mb-3"
    />

    {/* Content */}
    <h3 className="font-bold text-lg mb-1">{article.title}</h3>
    <p className="text-gray-600 text-sm mb-3">{article.desc}</p>

    {/* Footer */}
    <div className="flex items-center justify-between text-gray-500 text-sm mt-3">
  <div className="flex items-center gap-5">
    <span className="flex items-center gap-1">
      <Heart size={18} className="stroke-[#6E59A5]" />
      {article.likes}
    </span>

    <span className="flex items-center gap-1">
      <MessageCircle size={18} className="stroke-[#6E59A5]" />
      {article.comments}
    </span>

    <span className="flex items-center gap-1">
      <Share size={18} className="stroke-[#6E59A5]" />
      {article.shares}
    </span>
  </div>
</div>

  </div>
);

export default function Blogs() {
      const autoplay = useRef(
    Autoplay({
      delay: 3000, // 3 seconds
      stopOnInteraction: false,
      stopOnMouseEnter: true, // hover par stop
    })
  );

  const [emblaRef] = useEmblaCarousel(
    { align: "start", loop: true },
    [autoplay.current]
  );
  return (
    <div className="p-2 bg-gray-100 w-full flex flex-col gap-2">
      <h2 className="text-4xl pb-2 font-bold flex justify-center text-gray-900 text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#9B87F5] ">
        Grey Brainer's Blog 
      </h2>
      <p className="text-gray-600 flex justify-center py-2">The best of everything you follow</p>

      <div
        className="overflow-hidden"
        ref={emblaRef}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.play}
      >
        <div className="flex gap-4 pb-4">
          {articles.map((a, i) => (
            <NewsCard key={i} article={a} />
          ))}
        </div>
      </div>
    </div>
  );
}
