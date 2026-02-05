import { useState } from 'react';
function MyComponent() {
  const [name, setName] = useState('Guest');
  const [quantity, setQuantity] = useState(0);
  const [desc, setDesc] = useState('Tell us about yourself 😊');
  const [mode, setMode] = useState('Eco');
  const [payment, setPayment] = useState('COD');

  const handleName = e => {
    setName(e.target.value);
  };
  const handleQuantity = e => {
    setQuantity(e.target.value);
  };
  const handleDesc = e => {
    setDesc(e.target.value);
  };
  const handleMode = e => {
    setMode(e.target.value);
  };
  const handlePayment = e => {
    setPayment(e.target.value);
  };
  return (
    <div className="border w-100 mt-5 ml-20 p-5">
      <input
        className="border p-2 mb-2"
        value={name}
        onChange={handleName}
      ></input>
      <p className="mb-5">Name: {name}</p>

      <input
        className="border p-2 mb-2"
        value={quantity}
        type="number"
        onChange={handleQuantity}
      ></input>
      <p className="mb-5">Value: {quantity}</p>

      <textarea
        className="border p-2 mb-2 w-50"
        value={desc}
        onChange={handleDesc}
      ></textarea>
      <p className="mb-5">Description: {desc}</p>

      <select
        value={mode}
        className="border cursor-pointer"
        onChange={handleMode}
      >
        <option value={''}>Select Mode</option>
        <option value={'Eco'}>Eco</option>
        <option value={'Performance'}>Performance</option>
        <option value={'Gaming'}>Gaming</option>
      </select>
      <p className="mb-5">Selected Mode: {mode}</p>

      <label>
        <input
          className="border p-2 mb-2 cursor-pointer"
          type="radio"
          value={'COD'}
          checked={payment === 'COD'}
          onChange={handlePayment}
        ></input>
        COD
      </label>
      <br />
      <label>
        <input
          className="border p-2 mb-2 cursor-pointer"
          type="radio"
          value={'Online'}
          checked={payment === 'Online'}
          onChange={handlePayment}
        ></input>
        Online
      </label>

      <p className="mb-5">Method: {payment}</p>
    </div>
  );
}
export default MyComponent;
