import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Mail, Leaf } from 'lucide-react';

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer className="relative overflow-hidden py-16 bg-gradient-to-br from-emerald-900 to-teal-800">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      <div
        className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 backdrop-blur-[100px]"
        style={{ zIndex: -1 }}
      />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-emerald-400 to-teal-300 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="absolute -bottom-16 -right-16 w-56 h-56 bg-gradient-to-tl from-cyan-400 to-teal-300 rounded-full blur-3xl opacity-20"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2"
          >
            <h2 className="text-4xl font-bold mb-4 text-white flex items-center">
              <Leaf className="mr-2 text-emerald-400" />
              Eco Craft
            </h2>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-lg">
              <img
                src="https://i.ibb.co/zbLjS7J/wood.png"
                alt="Eco Craft Logo"
                className="w-16 mb-4"
              />
              <p className="text-sm text-gray-200">
                Eco Craft is your ultimate destination for exquisite jute and
                wooden crafts. We celebrate the beauty of nature through
                handmade, sustainable creations that bring a touch of rustic
                elegance to your home.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Products', 'Sustainability', 'Contact'].map(
                (item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <a
                      href="#"
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center"
                    >
                      <span className="bg-gradient-to-r from-emerald-400 to-teal-400 w-2 h-2 rounded-full mr-2" />
                      {item}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Connect</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="bg-white/10 p-3 rounded-full backdrop-blur-md">
                    <Icon size={24} />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Eco Craft. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
