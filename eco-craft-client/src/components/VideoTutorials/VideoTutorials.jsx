import { useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, Leaf, Clock } from "lucide-react";

const videoTutorials = [
  {
    id: "M5AML8r7vP8",
    title: "DIY Craft Ideas for Home Decor",
    thumbnail: "https://img.youtube.com/vi/M5AML8r7vP8/maxresdefault.jpg",
    category: "Home Decor",
    duration: "15:23",
  },
  {
    id: "UN43vnpCi1o",
    title: "5 Minute Crafts for Kids",
    thumbnail: "https://img.youtube.com/vi/UN43vnpCi1o/maxresdefault.jpg",
    category: "Kids Crafts",
    duration: "10:45",
  },
  {
    id: "SEbFyyoR-Qw",
    title: "Upcycling Ideas for Old Clothes",
    thumbnail: "https://img.youtube.com/vi/SEbFyyoR-Qw/maxresdefault.jpg",
    category: "Upcycling",
    duration: "12:30",
  },
  {
    id: "YwtGoNJExjY",
    title: "Easy Paper Craft Ideas",
    thumbnail: "https://img.youtube.com/vi/YwtGoNJExjY/maxresdefault.jpg",
    category: "Paper Crafts",
    duration: "08:15",
  },
];

function VideoTutorials() {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-green-50 to-green-100 mt-10">
      <div className="max-w-screen-xl px-6 py-4 mx-auto font-customLato">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center flex items-center justify-center">
          <Leaf className="w-8 h-8 text-green-600 mr-2" />
          Eco Craft Tutorials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
          {videoTutorials.map((tutorial) => (
            <CompactVideoTutorialCard key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CompactVideoTutorialCard({ tutorial }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={tutorial.thumbnail}
          alt={tutorial.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-50" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href={`https://www.youtube.com/watch?v=${tutorial.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white bg-opacity-80 rounded-full p-2 shadow-lg hover:bg-opacity-100 transition-all duration-300"
          >
            <PlayCircle className="w-8 h-8 text-green-600" />
          </a>
        </motion.div>
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
            {tutorial.category}
          </span>
          <span className="text-xs text-gray-500 flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {tutorial.duration}
          </span>
        </div>
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1">
          {tutorial.title}
        </h3>
        <a
          href={`https://www.youtube.com/watch?v=${tutorial.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-green-600 hover:text-green-700 transition-colors duration-300"
        >
          Watch Tutorial
        </a>
      </div>
    </motion.div>
  );
}

export default VideoTutorials;
