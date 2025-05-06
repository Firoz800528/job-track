import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <div className="text-center mt-10">Loading...</div>;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-xl mx-auto mt-10 p-6 bg-base-100 rounded-lg shadow-[#fd610765] shadow-lg"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold  text-[#FA6215] mb-6 text-center"
      >
        My Profile
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col items-center gap-4"
      >
        <img
          src={user.photoURL || ""}
          className="w-28 h-28 rounded-full border-2 border-[#fd6107a2]"
          alt="User profile"
        />
        <div className="text-center">
          <p className="text-xl  text-[#fa6115c5] font-semibold">{user.displayName}</p>
          <p className="text-gray-600">{user.email}</p>
        </div>
        <Link
          to="/update-profile"
          className="btn btn-outline hover:bg-[#F7C886] btn-sm"
        >
          Update Info
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default MyProfile;
