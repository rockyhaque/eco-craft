import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CraftItemCard from "../CraftItemCard/CraftItemCard";

const CraftItems = () => {
  const loadedCraft = useLoaderData();
  const [crafts, setCrafts] = useState(loadedCraft);
  const [visibleCount, setVisibleCount] = useState(6); 
  const [showAll, setShowAll] = useState(false); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay
    setTimeout(() => {
      setCrafts(loadedCraft);
      setLoading(false);
    }, 1000); // Adjust delay as needed
  }, [loadedCraft]);

  const handleToggleShow = () => {
    setShowAll(!showAll);
    setVisibleCount(showAll ? 6 : crafts.length);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-383px)] w-full">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="text-center mt-20">
        <div className="inline-flex px-4 py-1.5 mx-auto rounded-full">
          <p className="text-lg md:text-xl lg:text-3xl font-extrabold tracking-widest uppercase font-customPlaywrite">
            Our All Items
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="mt-6 text-base leading-relaxed text-gray-600 group-hover:text-white w-1/2">
            By choosing Eco Craft, you are supporting a business that values the
            environment and works tirelessly to reduce its carbon footprint.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {crafts.slice(0, visibleCount).map((craft) => (
          <CraftItemCard key={craft._id} craft={craft} />
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          onClick={handleToggleShow}
          className="btn btn-outline btn-md lg:btn-wide hover:bg-gradient-to-r from-emerald-300 to-orange-400 font-semibold text-sm md:text-lg lg:text-lg"
        >
          {showAll ? "Load Less" : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default CraftItems;
