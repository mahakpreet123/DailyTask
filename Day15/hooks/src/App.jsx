import React, { useState } from "react";
import Section from "./component/Section";
import Component from "./component/useEffect";

function App() {
  const [above, setAbove] = useState("Hello, World!");
  const handle = () => {
    setAbove((prev) =>
      prev === "Hello, World!" ? "Text has been changed!" : "Hello, World!"
    );
  };

  const demo1 = (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Above Section</h2>
      <div className="text-2xl font-bold text-gray-800 mb-6">{above}</div>
      <button
        onClick={handle}
        className="px-6 py-2 bg-blue-500 text-white text-lg rounded-lg shadow-lg hover:bg-blue-600 active:bg-blue-700 transition duration-300"
      >
        Click me!
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center ">
      {demo1}
      <Section
        title="Other Functional Component"
        message="Hello, World!"
        buttonLabel="Click"
        onButtonClick={() => alert("Hello, World!")}
      />
      <Component />
    </div>
  );
}

export default App;
