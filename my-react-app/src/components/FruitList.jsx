import { useState } from 'react';

function FruitList() {
  const [fruit, setFruit] = useState(['Apple', 'Mango', 'Banana']);

  const handleAdd = () => {
    const added = document.getElementById('input').value;
    document.getElementById('input').value = '';
    setFruit(f => [...f, added]);
  };
  const handleRemove = index => {
    setFruit(f=>f.filter((_, i) => i !== index));
  };
  return (
    <div>
      <ol className="list-disc">
        {fruit.map((f, index) => {
          return (
            <li key={index} onClick={() => handleRemove(index)}>
              {f}
            </li>
          );
        })}
      </ol>
      <input className="border" placeholder="Enter a fruit" id="input"></input>
      <button
        className="border ml-2 px-3 py-1 bg-gray-900 text-white"
        onClick={handleAdd}
      >
        Add Fruit
      </button>
    </div>
  );
}
export default FruitList;
