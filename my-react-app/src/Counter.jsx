import { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    if (count > 0) setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="w-100 h-50 mt-10 ml-20 border p-5 flex flex-col items-center justify-center">
      <p className="text-6xl text-red-400">{count}</p>
      <div className="w-full flex items-center justify-around mt-10">
        <button
          className="bg-emerald-600 text-white p-2 rounded hover:bg-emerald-700 cursor-pointer"
          onClick={() => inc()}
        >
          Increase ⬆️
        </button>
        <button
          className="bg-amber-400 text-white p-2 rounded hover:bg-amber-500 cursor-pointer"
          onClick={() => reset()}
        >
          Reset 🔄️
        </button>
        <button
          className="bg-red-600 text-white p-2 rounded hover:bg-red-700 cursor-pointer"
          onClick={() => dec()}
        >
          Decrease ⬇️
        </button>
      </div>
    </div>
  );
}
export default Counter;
