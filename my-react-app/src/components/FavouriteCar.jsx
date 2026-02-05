import { useState } from 'react';

function FavouriteCar() {
  const [car, setCar] = useState({
    year: 2024,
    name: 'Ford',
    model: 'Mustang',
  });
  const handleYearChange = e => {
    setCar(c => ({ ...c, year: e.target.value })); //used updater fn so here c is prev state otherwise react bundles changes so it would be current always.
  };
  const handleNameChange = e => {
    setCar(c => ({ ...c, name: e.target.value }));
  };
  const handleModelChange = e => {
    setCar(c => ({ ...c, model: e.target.value }));
  };

  return (
    <div className="mt-10 w-70 h-60 p-5">
      <p>
        Favourite Car: <br />
        {car.year} {car.name} {car.model}
      </p>
      <input
        type="number"
        value={car.year}
        onChange={handleYearChange}
        className="border p-2 mt-5"
      ></input>
      <input
        type="text"
        value={car.name}
        onChange={handleNameChange}
        className="border p-2"
      ></input>
      <input
        type="text"
        value={car.model}
        onChange={handleModelChange}
        className="border p-2"
      ></input>
    </div>
  );
}
export default FavouriteCar;
