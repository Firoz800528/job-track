import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
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
    <div className="max-w-md mx-auto mt-10 p-6 bg-base-100 shadow rounded-lg">
      <h2 className="text-2xl font-bold  text-[#FA6215] mb-4 text-center">Update Profile</h2>
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
    </div>
  );
};

export default UpdateProfile;
