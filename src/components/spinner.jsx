import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-orange-500 border-solid"></div>
    </div>
  );
};

export default Spinner;
