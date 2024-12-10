import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Info from "./pages/Info";
import Login from "./pages/Login";
import Signin from "./pages/Signin";

const App = () => {
  return (
    <Router>
      <nav className="bg-blue-500 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-4">
            <NavButton label="Home" route="/" />
            <NavButton label="About" route="/about" />
            <InformationDropdown />
          </ul>
          <button onClick={()=> window.location.href="https://www.google.com/"} className="text-white p-1 bg-red-600">Google</button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<Info />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
};

const NavButton = ({ label, route }) => {
  const navigate = useNavigate();

  return (
    <button className="text-white hover:text-gray-200" onClick={() => navigate(route)}>{label}</button>
  );
};

const InformationDropdown = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOptionClick = (route) => {
    setShowDropdown(false);
    navigate(route);
  };

  return (
    <li className="relative">
      <button className="text-white hover:text-gray-200" onClick={() => setShowDropdown(true)}> Settings</button>
      {showDropdown && (
        <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg w-48 p-4">
          <ul>
            <li className="cursor-pointer text-gray-700 hover:text-gray-500" onClick={() => handleOptionClick("/login")}
            >LogIn</li>
            <li className="cursor-pointer text-gray-700 hover:text-gray-500" onClick={() => handleOptionClick("/signin")}
            >SignIn</li>
            <li className="cursor-pointer text-gray-700 hover:text-gray-500" onClick={() => handleOptionClick("/info")}>More Info</li>
          </ul>
        </div>
      )}
    </li>
  );
};

export default App;
