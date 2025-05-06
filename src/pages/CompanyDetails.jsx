import React, { useState } from "react";
import { useParams } from "react-router-dom";
import companiesData from "../data/companies.json";
import { motion, AnimatePresence } from "framer-motion";
import CompanyNotFound from "./CompanyNotFound";

const CompanyDetails = () => {
  const { id } = useParams();
  const company = companiesData.find(c => c.id === id);
  const [selectedJob, setSelectedJob] = useState(null);

  if (!company) return <CompanyNotFound />;

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto p-6"
    >
      <motion.div variants={fadeUp} initial="hidden" animate="visible">
        <h2 className="text-3xl text-[#FC782C] font-bold">{company.name}</h2>
        <p className="font-semibold text-[#fc782cc9]">{company.location} | {company.industry}</p>
        <a href={company.website} target="_blank" rel="noreferrer" className="text-blue-500 underline">Visit Website</a>
      </motion.div>

      <motion.h3
        className="text-2xl text-[#FC782C] underline font-semibold mb-4 mt-6"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        Available Jobs:
      </motion.h3>

      <div className="space-y-4">
        {company.jobs.map((job, i) => (
          <motion.div
            key={job.id}
            className="border p-4 rounded-lg font-semibold text-[#fc782cd2] bg-base-100"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={i + 2}
          >
            <h4 className="text-xl font-bold">{job.title}</h4>
            <p>{job.jobType} | {job.salary}</p>
            <button
              onClick={() => setSelectedJob(job)}
              className="btn btn-sm text-black hover:bg-[#F7C886] border-[#fc782cd2] btn-outline mt-2"
            >
              Details
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
  {selectedJob && (
    <motion.div
      className="fixed inset-0 bg-[#0c0c0ccc] flex items-center justify-center z-50 px-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-lg p-4 sm:p-6 max-w-lg sm:max-w-md w-[90%] max-h-[90vh] overflow-y-auto relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl text-[#FC782C] font-bold mb-2">{selectedJob.title}</h2>
        <img src={selectedJob.bannerImage} alt="" className="w-full rounded mb-2 h-48 object-cover" />
        <p className="mb-2 text-[#FC782C]">{selectedJob.description}</p>
        <p className="text-[#FC782C]"><strong>Location:</strong> {selectedJob.location}</p>
        <p className="text-[#FC782C]"><strong>Salary:</strong> {selectedJob.salary}</p>
        <p className="text-[#FC782C]"><strong>Type:</strong> {selectedJob.jobType}</p>
        <p className="mt-2 font-semibold text-[#FC782C]">Requirements:</p>
        <ul className="list-disc text-[#FC782C] pl-6">
          {selectedJob.requirements.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
        <div className="mt-4 text-[#FC782C] flex flex-wrap gap-3">
          <a href={company.website} target="_blank" rel="noreferrer" className="btn hover:bg-[#fc782cc7] bg-[#FC782C] font-semibold btn-sm">Apply</a>
          <button className="btn btn-sm hover:bg-[#fc782c96]" onClick={() => setSelectedJob(null)}>Close</button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </motion.div>
  );
};

export default CompanyDetails;
