import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Sparkles, RefreshCw } from "lucide-react";

const giftIdeas = [
  {
    id: 1,
    name: "Handmade Scented Candles",
    description:
      "Crafted from 100% natural soy wax, these eco-friendly candles are infused with essential oils such as lavender and eucalyptus. They are designed to create a calming ambiance, perfect for relaxation and meditation.",
    category: "birthday",
  },
  {
    id: 2,
    name: "Personalized Photo Album",
    description:
      "A beautifully bound photo album made with recycled paper and decorated with pressed flowers. Customize each page with personal notes, making it a thoughtful keepsake for cherished memories.",
    category: "special",
  },
  {
    id: 3,
    name: "Knitted Scarf and Gloves Set",
    description:
      "A cozy winter accessory set hand-knitted from organic wool. This scarf and gloves duo is perfect for keeping warm while also adding a stylish touch to winter outfits. Available in various colors and sizes.",
    category: "holiday",
  },
  {
    id: 4,
    name: "Upcycled Book Planter",
    description:
      "A unique gift for plant lovers, this succulent garden is set inside a hollowed-out vintage book. The planter is designed to hold small indoor plants and adds a literary charm to any space.",
    category: "birthday",
  },
  {
    id: 5,
    name: "Handcrafted Wooden Serving Tray",
    description:
      "Made from reclaimed wood, this elegant serving tray features a natural finish and hand-carved details. Perfect for serving drinks and appetizers at gatherings or for use as a decorative centerpiece.",
    category: "special",
  },
  {
    id: 6,
    name: "Festive Holiday Wreath",
    description:
      "This holiday wreath is crafted from natural and recycled materials, such as pinecones, twigs, and dried oranges. It's a sustainable way to add festive charm to your home during the holiday season.",
    category: "holiday",
  },
  {
    id: 7,
    name: "Handmade Terrarium Kit",
    description:
      "This DIY terrarium kit comes with everything needed to create a miniature indoor garden, including a glass jar, soil, pebbles, and a variety of succulents. It’s a creative gift that brings a touch of nature into any space and is perfect for plant lovers.",
    category: "birthday",
  },

  {
    id: 8,
    name: "Homemade Spa Gift Set",
    description:
      "An all-natural spa set that includes bath bombs, handmade soaps, body scrubs, and essential oils, all packaged in eco-friendly, reusable containers. Great for self-care days and pampering.",
    category: "special",
  },
  {
    id: 9,
    name: "Embroidered Throw Pillow",
    description:
      "This custom-designed throw pillow features intricate embroidery and is stuffed with eco-friendly materials. It makes for a thoughtful home accessory or a cozy addition to any sofa or bed.",
    category: "holiday",
  },
  {
    id: 10,
    name: "Upcycled Wine Bottle Lamp",
    description:
      "Turn empty wine bottles into stylish lamps with this upcycling project. Each lamp features energy-efficient LED lighting and comes with a variety of bottle designs, adding a rustic touch to any room.",
    category: "birthday",
  },
  {
    id: 11,
    name: "Recycled Glass Coasters",
    description:
      "These coasters are crafted from reclaimed glass, making them both functional and sustainable. They are perfect for protecting surfaces from drinks and come in various artistic designs to match any decor.",
    category: "special",
  },
  {
    id: 12,
    name: "Organic Herbal Tea Set",
    description:
      "A curated collection of loose-leaf teas made from organically grown herbs. Each tea blend is carefully crafted to provide health benefits, ranging from stress relief to improved digestion, and comes in biodegradable packaging.",
    category: "holiday",
  },
  {
    id: 13,
    name: "Custom Leather Journal",
    description:
      "This hand-bound leather journal is made from recycled leather and features customizable pages for notes, sketches, or daily reflections. A perfect gift for writers, artists, or anyone who enjoys journaling.",
    category: "special",
  },
  {
    id: 14,
    name: "Plantable Greeting Cards",
    description:
      "These eco-friendly greeting cards are embedded with wildflower seeds. After reading, the recipient can plant the card in soil, water it, and watch beautiful flowers grow over time—a gift that keeps on giving.",
    category: "birthday",
  },
  {
    id: 15,
    name: "Handwoven Cotton Blanket",
    description:
      "A cozy blanket made from 100% organic cotton, handwoven by artisans. It's perfect for chilly nights or as a decorative throw for couches and beds, offering both comfort and sustainability.",
    category: "holiday",
  },
];

export default function GiftIdeaGenerator() {
  const [selectedCategory, setSelectedCategory] = useState("birthday");
  const [currentIdea, setCurrentIdea] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateIdea = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const filteredIdeas = giftIdeas.filter(
        (idea) => idea.category === selectedCategory
      );

      if (filteredIdeas.length > 0) {
        const randomIdea =
          filteredIdeas[Math.floor(Math.random() * filteredIdeas.length)];
        setCurrentIdea(randomIdea);
      } else {
        setCurrentIdea(null); // Or display a message that no ideas are available
      }

      setIsGenerating(false);
    }, 1000);
  };

  useEffect(() => {
    generateIdea();
  }, [selectedCategory]);

  return (
    <section className="min-h-screen py-16 px-4 bg-gradient-to-br from-emerald-200 via-orange-100 to-emerald-200 flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-4xl relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-orange-400 opacity-30 blur-3xl transform -skew-y-6"></div>
        <div className="relative bg-white bg-opacity-20 backdrop-filter backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white border-opacity-20">
          <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-orange-600">
            Prismatic Gift Ideas Generator
          </h2>
          <div className="flex flex-col md:flex-row justify-center space-x-4 mb-8">
            {["birthday", "holiday", "special"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`mb-2 md:mb-0 bg-gradient-to-r from-emerald-300 to-orange-400 font-semibold text-sm md:text-lg lg:text-lg text-white 
                  rounded-full px-6 py-1 shadow-lg transition-all duration-300 ease-in-out transform 
                  hover:scale-110 hover:bg-gradient-to-l hover:from-orange-400 hover:to-emerald-300 
                  hover:shadow-2xl hover:text-black hover:-translate-y-1 hover:border hover:border-emerald-400 
                  focus:outline-none focus:ring-4 focus:ring-emerald-300
                  ${
                    selectedCategory === category ? "scale-110 shadow-2xl" : ""
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div className="relative h-64 mb-8">
            <AnimatePresence mode="wait">
              {currentIdea && (
                <motion.div
                  key={currentIdea.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-2xl"
                >
                  <Gift className="w-16 h-16 text-emerald-500 mb-4" />
                  <h3 className="text-2xl font-semibold mb-2 text-emerald-800">
                    {currentIdea.name}
                  </h3>
                  <p className="text-emerald-700">{currentIdea.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex justify-center">
            <motion.button
              onClick={generateIdea}
              disabled={isGenerating}
              className={`bg-gradient-to-r from-emerald-300 to-orange-400 font-semibold text-lg text-white 
                rounded-full px-8 py-3 shadow-lg transition-all duration-300 ease-in-out transform 
                hover:scale-110 hover:bg-gradient-to-l hover:from-orange-400 hover:to-emerald-300 
                hover:shadow-2xl hover:text-black hover:-translate-y-1 hover:border hover:border-emerald-400 
                focus:outline-none focus:ring-4 focus:ring-emerald-300
                flex items-center justify-center space-x-2`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Generate Idea</span>
              {isGenerating ? (
                <RefreshCw className="w-6 h-6 animate-spin" />
              ) : (
                <Sparkles className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
        {/* <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {giftIdeas.map((idea) => (
            <motion.div
              key={idea.id}
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <Gift className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-emerald-800">{idea.name}</h3>
              <p className="text-sm text-emerald-700">{idea.description}</p>
              <span className="mt-4 inline-block px-3 py-1 bg-gradient-to-r from-emerald-200 to-orange-200 rounded-full text-xs font-medium text-emerald-800">
                {idea.category}
              </span>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
