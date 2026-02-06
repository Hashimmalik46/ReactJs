import { useState, useEffect } from 'react';

function MyComponent2() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green');
  function handleAdd() {
    setCount(c => c + 1);
  }
  function handleReset() {
    setCount(0);
  }
  // useEffect(() => {
  //   document.title = `My Counter: ${count} ${color}`;
  // }, [count, color]);

  function handleColor() {
    setColor(c => (c === 'green' ? 'red' : 'green'));
  }

  return (
    <div className="flex flex-col items-center justify-around gap-5 p-5">
      <p style={{ color: color }}>Count: {count}</p>
      <button className="bg-gray-900 text-white p-2" onClick={handleAdd}>
        Add Count
      </button>
      <button className="bg-gray-900 text-white p-2" onClick={handleReset}>
        Reset
      </button>
      <button className="bg-gray-900 text-white p-2" onClick={handleColor}>
        Change color
      </button>
    </div>
  );
}
export default MyComponent2;
