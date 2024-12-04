import React, { useState, useEffect } from "react";

const Component = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count has changed:", count);
  }, [count]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl text-gray-800 mb-6">Count: {count}</h1>
      <button
        className="px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-green-400 transition duration-300 ease-in-out focus:outline-none active:shadow-lg"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Component;
