import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is JobTrack?",
    answer: "JobTrack is a job hunting platform designed to connect job seekers with local opportunities efficiently.",
  },
  {
    question: "Is JobTrack free to use?",
    answer: "Yes, JobTrack is completely free for job seekers.",
  },
  {
    question: "How do I apply for a job?",
    answer: "You can search for jobs, view company details, and apply directly with just one click.",
  },
  {
    question: "Can employers post jobs?",
    answer: "Yes, employers can create accounts and post job listings to find the right candidates.",
  },
  {
    question: "Is there a mobile app?",
    answer: "Currently, JobTrack is mobile-friendly on browsers. An app is under development.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div id="faq" className="FAQ-content mx-auto p-6">
      <h2 className="text-3xl font-bold text-[#F1971C] mb-8 text-center">Frequently Asked Questions</h2>

      {faqs.map((faq, index) => (
        <div key={index} className="border-b py-4">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left text-lg font-medium cursor-pointer text-[#F1971C] focus:outline-none"
          >
            {faq.question}
          </button>

          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.p
                key="answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden text-gray-600 mt-2"
              >
                {faq.answer}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
