import { useEffect, useState } from "react";
import CraftItemCard from "../CraftItemCard/CraftItemCard";
import SectionHeading from "../SectionTitle/SectionHeading";

const CraftItems = () => {
  const [crafts, setCrafts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); 
  const [showAll, setShowAll] = useState(false); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCraftItems = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/craft`);
        const data = await response.json();
        setCrafts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching craft items:", error);
        setLoading(false);
      }
    };

    fetchCraftItems();
  }, []);

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
      {/* Heading */}
      <div className="text-center mt-20">
        <SectionHeading title="Our All Items" />
        <div className="flex justify-center items-center">
          <p className="mt-2 text-xl leading-relaxed text-gray-600 w-1/2">
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
