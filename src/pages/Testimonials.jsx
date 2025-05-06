import React, { useState } from "react";
import useTitle from "../hooks/useTitle";
import testimonials from "../data/testimonials.json";
import { motion, AnimatePresence } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
    },
  }),
};

const Testimonials = () => {
  useTitle("Testimonials");

  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 4);

  return (
    <section className="max-w-5xl mx-auto p-6">
      <motion.h2
        className="text-3xl font-bold text-[#FD853F] text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What Users Say
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        <AnimatePresence>
          {displayedTestimonials.map((t, index) => (
            <motion.div
              key={t.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white p-6 rounded-lg shadow shadow-[#FEBC96]"
              layout
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full" />
                <h3 className="text-xl font-semibold">{t.name}</h3>
              </div>
              <p className="text-gray-600 italic">"{t.text}"</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-8">
        <motion.button
          onClick={() => setShowAll(!showAll)}
          className="btn bg-[#FD853F] hover:bg-[#fcb075] text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showAll ? "Show Less" : "Show More..."}
        </motion.button>
      </div>
    </section>
  );
};

export default Testimonials;
