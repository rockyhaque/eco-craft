import { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Recycle, Sun, Users, ChevronRight } from "lucide-react";

export default function JoinCommunity() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <div className="bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center px-4 py-28">
      <div className="max-w-4xl w-full bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8">
            <motion.h2
              className="text-3xl font-bold text-green-800 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Join Our Eco-Crafting Community
            </motion.h2>
            <motion.p
              className="text-green-700 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Be part of a global movement of eco-conscious crafters. Learn, share, and create sustainable art together!
            </motion.p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-full bg-white bg-opacity-50 border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
                <motion.button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-4 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </div>
          <div className="md:w-1/2 bg-green-500 p-8 relative overflow-hidden">
            <div className="relative z-10">
              <motion.h3
                className="text-2xl font-bold text-white mb-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                What You&apos;ll Get
              </motion.h3>
              <motion.ul
                className="text-white space-y-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {[
                  { icon: Leaf, text: "Eco-friendly crafting techniques" },
                  { icon: Recycle, text: "Upcycling project ideas" },
                  { icon: Sun, text: "Sustainable material guides" },
                  { icon: Users, text: "Connect with like-minded crafters" },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            {/* Animated background elements */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, -30, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
