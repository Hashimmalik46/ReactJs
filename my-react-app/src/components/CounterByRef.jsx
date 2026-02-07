import { useEffect, useRef } from 'react';

function CounterByRef() {
  const ref = useRef(0);

  useEffect(() => {
    console.log('Comp Rendered');
  });
  function handleAdd() {
    ref.current++;
    console.log(ref.current);
  }
  function handleReset() {
    ref.current = 0;
    console.log(ref.current);
  }

  return (
    <div className="flex flex-col items-center justify-around gap-5 p-5">
      <button className="bg-gray-900 text-white p-2" onClick={handleAdd}>
        Add Count
      </button>
      <button className="bg-gray-900 text-white p-2" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
export default CounterByRef;
