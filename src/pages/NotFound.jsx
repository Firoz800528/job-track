import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../assets/error.jpg";

const NotFound = () => {
  return (
    <div
      className="h-[30vw] w-full bg-cover bg-center flex flex-row justify-center items-end text-center px-4"
      style={{
        backgroundImage: `url(${errorImage})`,
      }}
    >
      <div className="mb-5">
      <p className="text-3xl p-4 bg-white text-[#000000]">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn bg-[#E36F20] hover:bg-[#F29E2B] mt-6">Go Back To Home</Link>
      </div>
      
    </div>
  );
};

export default NotFound;
