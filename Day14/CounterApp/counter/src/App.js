import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0); 

  return (
    <div className='container my-5 '>
      <div className='card justify-center text-center my-5'>
        <div className='card-body'>
          <h1 className="display-4 text-primary font-weight-bold" >Counter App</h1>
          <div className='my-5'>
            <h2 className='my-5 font-weight-bold'>{count}</h2>
            <button
              className='btn bg-green-600 mx-3 py-2 px-3 text-white'
              onClick={() => setCount(count + 1)} 
            >
              Increment
            </button>
            <button
              className='btn bg-red-600 mx-3 py-2 px-3 text-white'
              onClick={() => setCount(count - 1)} 
            >
              Decrement
            </button>
            <button
              className='btn bg-blue-600 mx-3 py-2 px-3 text-white'
              onClick={() => setCount(0)} 
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
