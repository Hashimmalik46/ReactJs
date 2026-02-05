import { useState } from 'react';
function ColorPicker() {
  const [color, setColor] = useState('#FFFFFF');
  const handleColor = e => {
    setColor(e.target.value);
  };
  return (
    <div className="w-150 h-80 mt-10 ml-20 border flex flex-col items-center justify-around">
      <h1 className="text-2xl font-bold">Color Picker</h1>
      <div
        className="w-6/10 h-1/2 flex flex-col items-center justify-center transition-colors duration-600"
        style={{ backgroundColor: color }}
      >
        <p className="text-gray-300">Selected Color: {color}</p>
      </div>
      <p className="">Select a Color</p>

      <input
        type="color"
        value={color}
        className="w-20 h-10 border"
        onChange={handleColor}
      ></input>
    </div>
  );
}
export default ColorPicker;
