import React from "react";

const Section = ({ title, message, buttonLabel, onButtonClick }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600 text-lg mb-6">{message}</p>
      <button
        onClick={onButtonClick}
        className="px-6 py-2 bg-green-500 text-white text-lg rounded-lg shadow-lg hover:bg-green-600 active:bg-green-700 transition duration-300"
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default Section;
