import React from "react";

const Info = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Information Page</h1>
      <p className="text-gray-700">
        Welcome to the Information Page!
      </p>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">More Details</h2>
        <p className="text-gray-700">
          If you want to explore further, please login.
        </p>
      </div>
    </div>
  );
};

export default Info;
