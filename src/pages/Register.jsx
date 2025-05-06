import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useTitle from "../hooks/useTitle";

const Register = () => {
  useTitle("Register");
  const { register, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const upper = /[A-Z]/.test(password);
    const lower = /[a-z]/.test(password);
    const length = password.length >= 6;
    return upper && lower && length;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (!validatePassword(password)) {
      setError("Password must contain at least one uppercase, one lowercase, and be 6+ characters.");
      return;
    }

    try {
      const res = await register(email, password);
      await updateUser(name, photo);
      form.reset();
      navigate("/");
    } catch (err) {
      setError("Registration failed. Email may already be in use.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="max-w-md mx-auto p-6 bg-base-100 rounded-lg shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="text-2xl text-[#FA6715] font-bold mb-4" variants={itemVariants}>
        Register
      </motion.h2>

      <motion.form onSubmit={handleSubmit} className="space-y-3" variants={itemVariants}>
        <motion.input
          name="name"
          type="text"
          placeholder="Full Name"
          className="input input-bordered w-full"
          required
          variants={itemVariants}
        />
        <motion.input
          name="photo"
          type="text"
          placeholder="Photo URL"
          className="input input-bordered w-full"
          required
          variants={itemVariants}
        />
        <motion.input
          name="email"
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          required
          variants={itemVariants}
        />
        <motion.input
          name="password"
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
          required
          variants={itemVariants}
        />
        {error && (
          <motion.p className="text-red-500 text-sm" variants={itemVariants}>
            {error}
          </motion.p>
        )}
        <motion.button
          type="submit"
          className="btn bg-[#FC782C] hover:bg-[#F7C886] w-full"
          variants={itemVariants}
        >
          Register
        </motion.button>
      </motion.form>

      <motion.p className="text-sm mt-4" variants={itemVariants}>
        Already have an account?{" "}
        <Link to="/login" className="text-[#b14909] hover:text-[#c5845f]">
          Login
        </Link>
      </motion.p>
    </motion.div>
  );
};

export default Register;
