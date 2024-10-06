import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Leaf, Recycle, Video, Globe } from "lucide-react";

const faqs = [
  {
    question: "What makes Eco Craft different from other crafting communities?",
    answer:
      "Eco Craft is dedicated to sustainable and eco-friendly crafting. We focus on using recycled materials, promoting zero-waste techniques, and educating our community about environmental impact.",
    icon: Leaf,
  },
  {
    question: "How can I start with eco-friendly crafting?",
    answer:
      "Start by exploring our beginner-friendly workshops that teach you how to upcycle common household items. You can also check out our resources page for tips on sourcing sustainable materials.",
    icon: Recycle,
  },
  {
    question: "Are your online workshops interactive?",
    answer:
      "Yes! Our online workshops are live and interactive. You can ask questions in real-time, share your progress, and get personalized feedback from our expert instructors.",
    icon: Video,
  },
  {
    question: "How does Eco Craft support the global crafting community?",
    answer:
      "We collaborate with artisans worldwide, showcasing traditional eco-friendly techniques. We also donate a portion of our proceeds to environmental conservation projects globally.",
    icon: Globe,
  },
];

export default function Faq() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-green-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        className="w-full text-left p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <faq.icon className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
          </div>
          <ChevronDown
            className={`h-5 w-5 text-green-500 transition-transform duration-300 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 bg-green-50 border-t border-green-100">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
