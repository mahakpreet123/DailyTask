import React, { createContext } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const user = { name: 'John Doe', age: 30 };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
