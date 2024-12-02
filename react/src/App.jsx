import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Mahak');
  const [isEditing, setIsEditing] = useState(false);
  
  const [userClass, setClass] = useState('BCA');
  const [address, setAddress] = useState('New Delhi');
  const [date, setDate] = useState('2024-12-02');

  const handleName = () => {
    alert('Name changes successfully');
    setName('Mahakpreet Kaur');
  };
  const handleClass = () => {
    alert('Class changes successfully');
    setClass('MCA');
  };
  const handleAddress = () => {
    alert('Address changes successfully');
    setAddress('Jagadhari, Yamunanagar');
  };
  const handleDate = () => {
    alert('Date changes successfully');
    setDate(new Date().toLocaleDateString());
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col gap-4 p-6 bg-white ">
        <button onClick={handleName} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Show Full Name</button>
        <button onClick={handleClass} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">Show Class</button>
        <button onClick={handleAddress} className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">Show Full Address</button>
        <button onClick={handleDate} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">Show Date</button>
      </div>
      <div className="flex flex-col justify-center items-start pl-10 w-2/3">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Welcome: <span className="text-blue-500">{name}</span>
        </h2>
        <h2 className="text-lg text-gray-600 mb-2">Class: {userClass}</h2>
        <h2 className="text-lg text-gray-600 mb-2">Address: {address}</h2>
        <h2 className="text-lg text-gray-600">Date: {date}</h2>
      </div>
    </div>
  );
}

export default App;


// import { useState } from 'react';

// function App() {
//   const [name, setName] = useState('Mahak');
//   const [newName, setNewName] = useState('');
//   const [isEditing, setIsEditing] = useState(false);

//   const handleEdit = () => {
//     if (newName.trim() === '') {
//       alert('Please enter a valid name!');
//       return;
//     }
//     setName(newName);
//     setNewName('');
//     setIsEditing(false);
//     alert('Name updated successfully!');
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-96">
//         <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
//           Welcome, <span className="text-blue-500">{name}</span>
//         </h2>
//         {!isEditing ? (
//           <button onClick={() => setIsEditing(true)} className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"> Edit Name</button>
//         ) : (
//           <div className="flex flex-col gap-4">
//             <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Enter new name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"/>
//             <div className="flex gap-2">
//               <button onClick={handleEdit} className="w-full px-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
//               >Save</button>
//               <button onClick={() => setIsEditing(false)} className="w-full px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition"
//               >Cancel</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
