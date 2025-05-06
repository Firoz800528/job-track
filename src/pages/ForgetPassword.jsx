import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useLocation } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import useTitle from "../hooks/useTitle";

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
    <div className="max-w-md mx-auto mt-10 p-6 bg-base-100 shadow rounded-lg">
      <h2 className="text-2xl text-[#FA6215] text-center font-bold mb-4">Reset Password</h2>
      <form onSubmit={handleReset} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="input input-bordered w-full"
          required
        />
        <button type="submit" className="btn bg-[#FC782C] hover:bg-[#F7C886] w-full">Send Reset Email</button>

        {message && <p className="text-green-500 text-sm mt-2">{message}</p>}
      </form>
    </div>
  );
};

export default ForgetPassword;
