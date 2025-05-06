import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import { motion } from "framer-motion";

const UpdateProfile = () => {
  useTitle("Update Profile");
  const { user, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUpdate = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    try {
      await updateUser(name, photo);
      navigate("/my-profile");
    } catch (err) {
      setError("Failed to update profile.");
    }
  };

  return (
    <motion.div
      className="max-w-md mx-auto mt-10 p-6 bg-base-100 shadow rounded-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-[#FA6215] mb-4 text-center">Update Profile</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          name="name"
          defaultValue={user?.displayName}
          placeholder="Full Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="photo"
          defaultValue={user?.photoURL}
          placeholder="Photo URL"
          className="input input-bordered w-full"
          required
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="btn bg-[#FC782C] hover:bg-[#F7C886] w-full">Update Info</button>
      </form>
    </motion.div>
  );
};

export default UpdateProfile;
