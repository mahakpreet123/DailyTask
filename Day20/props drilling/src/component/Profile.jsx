import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Profile = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h4 className="flex justify-center items-center text-blue-600">Profile Component::CONTEXT API</h4>
      <p className="flex justify-center items-center ">Name: {user.name}</p>
      <p className="flex justify-center items-center ">Age: {user.age}</p>
    </div>
  );
};

export default Profile;
