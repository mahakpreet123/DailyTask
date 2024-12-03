import React, { useState } from 'react';
import Lifecycle from './components/Lifecycle';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <h1>Class Component Lifecycle:</h1>
      <h2>Parent Component</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide Component' : 'Show Component'}
      </button>
      {isVisible && <Lifecycle />}
    </div>
  );
}

export default App;
