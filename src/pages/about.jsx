import React from "react";
import { motion } from "framer-motion";
import useTitle from "../hooks/useTitle";
import FAQ from "../pages/FAQ";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  useTitle("About Us");
  return (
    <div className=" mx-auto p-6 space-y-12">
      {/* Main Intro Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-[#F1971C] mb-4">About JobTrack</h2>
        <p className="text-gray-700 mb-4">
          <strong>JobTrack</strong> is a modern job hunting platform built to simplify the recruitment process
          for both job seekers and employers...
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Daily job alerts customized to your profile</li>
          <li>Advanced filtering to quickly find the right job</li>
          <li>Easy one-click application process</li>
          <li>Company profiles and reviews</li>
          <li>Mobile-friendly experience for job hunting on the go</li>
        </ul>
        <p className="text-gray-700">
          At JobTrack, we believe job hunting should be efficient, transparent, and tailored to your needs.
        </p>
      </motion.section>

      {/* Story Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <h3 className="text-2xl font-semibold text-[#F1971C] mb-4">The Story Behind JobTrack</h3>
        <p className="text-gray-700">
          JobTrack was born out of a passion to simplify job hunting in the digital age...
        </p>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <h3 className="text-2xl font-semibold text-[#F1971C] mb-4">Meet Our Team</h3>
        <p className="text-gray-700 mb-4">
          JobTrack is powered by a passionate team of professionals...
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Product Designers</strong> - Seamless UX</li>
          <li><strong>Developers</strong> - Feature builders</li>
          <li><strong>Customer Support</strong> - User guides</li>
          <li><strong>Marketing Experts</strong> - Connecting job seekers</li>
        </ul>
      </motion.section>

      {/* Why Choose Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <h3 className="text-2xl font-semibold text-[#F1971C] mb-4">Why Choose JobTrack?</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>We focus on local job opportunities</li>
          <li>Personalized job recommendations</li>
          <li>Support for traditional & freelance jobs</li>
          <li>Tools for employers to find best-fit candidates</li>
        </ul>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <h3 className="text-2xl font-semibold text-[#F1971C] mb-4">Contact Us</h3>
        <p className="text-gray-700 mb-4">Have any questions or need assistance? We’re here to help!</p>
        <p className="text-gray-700">Email: <a href="mailto:support@jobtrack.com" className="text-[#F1971C]">support@jobtrack.com</a></p>
        <div className="flex gap-4 mt-4">
          <a href="https://www.facebook.com/jobtrack" className="text-[#F1971C]">Facebook</a>
          <a href="https://twitter.com/jobtrack" className="text-[#F1971C]">Twitter</a>
          <a href="https://www.linkedin.com/company/jobtrack" className="text-[#F1971C]">LinkedIn</a>
        </div>
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      ><FAQ></FAQ>
      </motion.section>
      
    </div>
  );
};

export default About;
