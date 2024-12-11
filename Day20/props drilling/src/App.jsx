
import React from "react";
import User from "./component/user"
import Profile from"./component/Profile"
import UserProvider from './UserContext';

function App() {
  const userName = "Ram";
  const userAge=22;

  return (
    <div>
    <h1 className="flex justify-center items-center text-red-600">Prop Drilling Example:parent</h1>
    <User name={userName} age={userAge} />
    <UserProvider>
      <Profile />
    </UserProvider>
  </div>
  )
}

export default App
