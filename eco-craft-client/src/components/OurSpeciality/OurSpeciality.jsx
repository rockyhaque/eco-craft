import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Palette, Recycle, Users, Heart } from "lucide-react";

export default function OurSpecialty() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const specialties = [
    {
      icon: <Leaf className="w-12 h-12 text-green-600" />,
      title: "Eco-Friendly Materials",
      description:
        "We prioritize sustainable and environmentally conscious art supplies, ensuring your creativity doesn't come at the cost of our planet.",
      moreDetails:
        "Our eco-friendly materials include biodegradable paints, recycled paper, and renewable resources. These products help reduce waste and carbon footprint. We partner with ethical suppliers who are committed to minimizing environmental impact, ensuring that each product is sourced responsibly. Additionally, we offer workshops on how to create eco-conscious art, empowering artists to make sustainable choices in every project.",
      color: "bg-green-100",
    },
    {
      icon: <Palette className="w-12 h-12 text-purple-600" />,
      title: "Diverse Artistic Styles",
      description:
        "Explore a wide range of art forms and creative techniques, from traditional crafts to cutting-edge digital art tools.",
      moreDetails:
        "From oil paintings to digital sculptures, our platform supports a vast array of creative expressions. We offer tutorials, kits, and resources to help artists of all styles. Whether you're into abstract art, realism, or experimental design, you'll find a community and resources tailored to your unique style. Our platform also includes a gallery where artists can showcase their work and receive constructive feedback from peers and mentors.",
      color: "bg-purple-100",
    },
    {
      icon: <Recycle className="w-12 h-12 text-blue-600" />,
      title: "Upcycled Crafts",
      description:
        "Discover unique items and learn techniques for transforming recycled materials into beautiful works of art.",
      moreDetails:
        "Our upcycled crafts involve turning discarded or waste materials into high-quality art pieces, promoting sustainability while fostering creativity. Learn techniques such as weaving with plastic bags, making sculptures from metal scraps, and creating decor from old newspapers. Our platform also features DIY guides, instructional videos, and challenges to inspire artists to see potential in everyday materials that would otherwise be thrown away.",
      color: "bg-blue-100",
    },
    {
      icon: <Users className="w-12 h-12 text-red-600" />,
      title: "Artisan Community",
      description:
        "Connect with fellow artists, share your work, and participate in workshops to grow your skills and network.",
      moreDetails:
        "Join a community of artisans from around the world, engage in collaborative projects, and showcase your work in our virtual gallery. Our community hosts regular events such as live Q&A sessions, skill-sharing workshops, and online exhibitions. Whether you're a beginner or an experienced artist, you'll find opportunities to learn, collaborate, and build lasting relationships with like-minded creatives.",
      color: "bg-red-100",
    },
    {
      icon: <Heart className="w-12 h-12 text-pink-600" />,
      title: "Passion for Creativity",
      description:
        "We're dedicated to nurturing and inspiring your artistic journey, providing resources and support every step of the way.",
      moreDetails:
        "Our passion for creativity drives us to provide personalized feedback, mentorship programs, and exclusive content to foster your artistic growth. We offer artist residencies, access to top-tier creative tools, and curated content from industry leaders to help you expand your skillset. In addition, you'll gain access to special offers, early-bird access to workshops, and a platform to sell your work to a global audience.",
      color: "bg-pink-100",
    },
  ];
  

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-screen-xl px-6 py-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Specialty
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            {specialties.map((specialty, index) => (
              <motion.button
                key={index}
                className={`w-full text-left p-4 rounded-lg mb-4 transition-all ${
                  activeIndex === index
                    ? `${specialty.color} shadow-lg`
                    : "bg-white hover:bg-gray-50"
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  setShowMore(false); // Reset showMore when switching specialties
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center">
                  <div className={`mr-4 p-2 rounded-full ${specialty.color}`}>
                    {specialty.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {specialty.title}
                  </h3>
                </div>
              </motion.button>
            ))}
          </div>
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`p-8 rounded-lg shadow-xl ${specialties[activeIndex].color}`}
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4 p-3 bg-white rounded-full shadow-md">
                    {specialties[activeIndex].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {specialties[activeIndex].title}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {specialties[activeIndex].description}
                </p>
                {showMore && (
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    {specialties[activeIndex].moreDetails}
                  </p>
                )}
                <motion.button
                  className="mt-6 px-6 py-2 bg-white text-gray-800 rounded-full shadow-md font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "Show Less" : "Learn More"}
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
