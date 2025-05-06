import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useTitle from "../hooks/useTitle";

const Login = () => {
  useTitle("Login");
  const { login, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  const handleGoogle = async () => {
    await signInWithGoogle();
    navigate(from, { replace: true });
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
      className="max-w-md mx-auto p-6 bg-base-100 rounded-lg shadow-[#FEC9AB] shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-2xl text-[#FA6215] font-bold mb-4"
        variants={itemVariants}
      >
        Login
      </motion.h2>

      <motion.form onSubmit={handleSubmit} className="space-y-3" variants={itemVariants}>
        <motion.input
          name="email"
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <motion.div variants={itemVariants}>
          <Link
            to="/forget-password"
            state={{ email }}
            className="text-[#b14909] hover:text-[#c5845f] text-sm"
          >
            Forgot password?
          </Link>
        </motion.div>
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
          Login
        </motion.button>
        <motion.button
          type="button"
          onClick={handleGoogle}
          className="btn btn-outline border-[#FC782C] hover:bg-[#F7C886] w-full"
          variants={itemVariants}
        >
          Login with Google
        </motion.button>
      </motion.form>

      <motion.p className="text-sm mt-4" variants={itemVariants}>
        Don't have an account?{" "}
        <Link to="/register" className="hover:text-[#c5845f] text-[#b14909]">
          Register
        </Link>
      </motion.p>
    </motion.div>
  );
};

export default Login;
