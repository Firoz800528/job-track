import React from 'react';
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Companies from "../pages/Companies";
import useTitle from "../hooks/useTitle";
import { motion } from "framer-motion";
import Testimonials from './Testimonials';
import FAQ from './FAQ';

const Home = () => {
  useTitle("Home");

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <HowItWorks />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Companies />
      </motion.div>

      <Testimonials />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <FAQ />
      </motion.div>
    </>
  );
};

export default Home;
