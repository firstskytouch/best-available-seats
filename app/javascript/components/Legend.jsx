import React from "react";

const Legend = () => {
  return (
    <div className="flex mx-2 my-8">
      <div className="flex items-center mr-16">
        <div className="rounded w-6 h-6 bg-green-500"></div>
        <h4 className="ml-2">AVAILABLE</h4>
      </div>
      <div className="flex items-center mr-16">
        <div className="rounded w-6 h-6 bg-gray-500"></div>
        <h4 className="ml-2">RESERVED</h4>
      </div>
      <div className="flex items-center mr-16">
        <div className="rounded w-6 h-6 bg-gray-500 border-2 border-red-500"></div>
        <h4 className="ml-2">BEST SEAT</h4>
      </div>
    </div>
  );
};

export default Legend;
