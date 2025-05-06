import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../assets/error.jpg";

const NotFound = () => {
  return (
    <div
      className="w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-screen bg-cover bg-center flex justify-center items-end text-center px-4"
      style={{
        backgroundImage: `url(${errorImage})`,
      }}
    >
      <div className="mb-10 bg-white bg-opacity-80 p-4 rounded shadow-md max-w-xl w-full">
        <p className="text-xl sm:text-2xl md:text-3xl text-[#000000]">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-2 text-white bg-[#E36F20] hover:bg-[#F29E2B] rounded transition duration-300"
        >
          Go Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
