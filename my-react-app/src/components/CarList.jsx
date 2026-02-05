import { useState } from 'react';

function CarList() {
  const [car, setCar] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [name, setName] = useState();
  const [model, setModel] = useState();

  const handleYearChange = e => {
    setYear(e.target.value);
  };
  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleModelChange = e => {
    setModel(e.target.value);
  };

  const addCar = () => {
    const newCar = {
      year: year,
      name: name,
      model: model,
    };
    setCar(c => [...c, newCar]);
    setYear(new Date().getFullYear());
    setName('');
    setModel('');
  };

  const removeCar = index => {
    setCar(car.filter((_, i) => i !== index));
  };
  return (
    <div className="flex flex-col">
      <p className="text-3xl font-bold">Car List</p>
      <ul className="list-disc">
        {car.map((car, index) => {
          return (
            <li key={index} onClick={() => removeCar(index)}>
              {car.year} {car.name} {car.model}
            </li>
          );
        })}
      </ul>
      <input
        className="border p-2 mt-3"
        value={year}
        type="number"
        onChange={handleYearChange}
      ></input>
      <input
        className="border p-2 mt-3"
        value={name}
        type="text"
        placeholder="Enter name"
        onChange={handleNameChange}
      ></input>
      <input
        className="border p-2 mt-3"
        value={model}
        type="text"
        placeholder="Enter model"
        onChange={handleModelChange}
      ></input>
      <button
        className="border ml-2 px-3 py-1 bg-gray-900 text-white w-30 self-center mt-5"
        onClick={addCar}
      >
        Add Car
      </button>
    </div>
  );
}
export default CarList;
