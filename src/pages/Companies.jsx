import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import companiesData from "../data/companies.json";
import { Link } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
    },
  }),
};

const Companies = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCompanies = showAll ? companiesData : companiesData.slice(0, 8);

  return (
    <motion.div
      id="companies"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto p-6"
    >
      <motion.h2
        className="text-3xl font-bold mb-8 text-[#fd6107c5] text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        All Companies
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        layout
      >
        <AnimatePresence>
          {displayedCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.10 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white shadow p-4 shadow-[#d6611c] rounded-lg hover:shadow-lg transition"
              layout
            >
              <Link to={`/company-details/${company.id}`}>
                <img src={company.logo} alt={company.name} className="h-20 mx-auto mb-2" />
                <p className="text-center font-semibold">{company.name}</p>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.div className=" mt-8">
        <motion.button
          onClick={() => setShowAll(!showAll)}
          className="btn bg-[#FD853F] hover:bg-[#ffb27e] text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showAll ? "Show Less" : "Show More..."}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Companies;
