import Nav from '../components/Nav';
import addIcon from '../assets/add.png';
import remIcon from '../assets/remove.png';
import upIcon from '../assets/up.png';
import downIcon from '../assets/down.png';
import { useState } from 'react';
function TaskManager() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleInput = function () {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="w-full h-svh bg-gray-900">
        <Nav />
        <div className="w-full flex flex-col items-center p-10 border-t border-white relative">
          <h1 className="text-3xl font-bold text-white mb-10">Task Manager</h1>
          <img
            src={addIcon}
            className="w-15 h-15 absolute right-60 top-8 cursor-pointer hover:scale-110 transition-all duration-200"
            onClick={toggleInput}
          />
          <div className="w-full h-full flex flex-col items-center gap-5">
            <div className="w-3/4 p-5 flex bg-white rounded-[10px] shadow shadow-white">
              <p className="text-xl flex-1">Learn React</p>
              <img src={remIcon} className="w-10 h-10 mr-2 cursor-pointer hover:scale-105 transition-all duration-200" />
              <img src={upIcon} className="w-10 h-10 mr-2 cursor-pointer hover:scale-105 transition-all duration-200" />
              <img src={downIcon} className="w-10 h-10 cursor-pointer hover:scale-105 transition-all duration-200" />
            </div>
          </div>
          <div
            className={`bg-white w-1/2 h-20 flex items-center justify-center gap-5 p-2 rounded-[10px] absolute top-72 ${isOpen ? 'flex' : 'hidden'}`}
          >
            <input
              className="border p-3 w-full rounded-[10px]"
              placeholder="Enter a task..."
            ></input>
            <button className="bg-gray-900 text-white p-3 w-20 rounded-[10px] cursor-pointer hover:bg-gray-800 transition-colors duration-200">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TaskManager;
