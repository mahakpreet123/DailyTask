import { useState, useMemo, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        setData(result.slice(0, 5));
      } catch (error) {
        throw error (error.message);
      } finally {
        console.log("data fetched")
      }
    };

    fetchData(); 
  }, []);


  // useMemo------------
  const items = [
    { id: 1, price: 10 },
    { id: 2, price: 0 },
    { id: 3, price: 30 },
  ];

  const total = useMemo(() => {
    console.log('Calculating total...');
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
      <p className="text-2xl font-semibold text-blue-600">COUNT: {count}</p>
        <div className="mt-3">
          <button
            onClick={handleIncrement}
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
          >
            +
          </button>
          <button
            onClick={handleDecrement}
            className="ml-3 px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
          >
            -
          </button>
        </div>
      </div>
      <div className="text-xl font-medium flex flex-col items-center justify-center mt-10">
        <p className='text-2xl font-semibold text-blue-600'>useMemo Example</p>
        <p className="font-bold ">Total:{total}</p>
      </div>
      <div className="p-5">
      <h1 className="text-2xl flex items-center justify-center font-bold mb-4 text-blue-600">useEffect Example:Data Fetch</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id} className="border-b py-2">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default App;
