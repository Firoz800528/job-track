import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useLocation } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import useTitle from "../hooks/useTitle";
import { motion } from "framer-motion";

const ForgetPassword = () => {
  useTitle("Reset Password");
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState(location?.state?.email || "");
  const [message, setMessage] = useState("");
  const auth = getAuth();

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent. Please check your inbox.");
      window.open("https://mail.google.com", "_blank");
    } catch (error) {
      setMessage("Something went wrong. Try again.");
      console.error("Error resetting password:", error);
    }
  };

  return (
    <motion.div
      className="max-w-md mx-auto mt-10 p-6 bg-base-100 shadow rounded-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-2xl text-[#FA6215] text-center font-bold mb-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Reset Password
      </motion.h2>

      <form onSubmit={handleReset} className="space-y-4">
        <motion.input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="input input-bordered w-full"
          required
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        />

        <motion.button
          type="submit"
          className="btn bg-[#FC782C] hover:bg-[#F7C886] w-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Reset Email
        </motion.button>

        {message && (
          <motion.p
            className="text-green-500 text-sm mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {message}
          </motion.p>
        )}
      </form>
    </motion.div>
  );
};

export default ForgetPassword;
