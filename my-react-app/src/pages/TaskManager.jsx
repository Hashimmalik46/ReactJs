import Nav from '../components/Nav';
import addIcon from '../assets/add.png';
import remIcon from '../assets/remove.png';
import upIcon from '../assets/up.png';
import downIcon from '../assets/down.png';
import taskIcon from '../assets/task.png';
import closeIcon from '../assets/close.png';
import { useEffect, useState } from 'react';
function TaskManager() {
  //Add Updater Functions.
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewTask] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleInput = function (e) {
    setIsOpen(!isOpen);
  };

  function handleTaskInput(e) {
    setNewTask(e.target.value);
  }

  function handleAdd() {
    if (!newtask.trim()) return;
    const taskObj = {
      item: newtask,
      done: false,
    };
    setTasks([...tasks, taskObj]);
    setNewTask('');
    toggleInput();
  }
  function handleRemove(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }
  function handleMoveUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function handleMoveDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function handleDone(index) {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, done: !t.done } : t,
    );
    setTasks(updatedTasks);
  }
  function changeCase(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  return (
    <>
      <div id="main-cont" className="w-full h-svh bg-gray-900">
        <Nav />
        <div className="w-full flex flex-col items-center p-10 relative">
          <div className=" w-1/3 h-20 flex items-center justify-center gap-5 mb-10">
            <h1 className="text-3xl font-bold text-white font-mono">
              Task Manager
            </h1>
            <img src={taskIcon} className="w-15 h-15" />
          </div>
          <img
            src={addIcon}
            className="w-15 h-15 absolute right-60 top-8 cursor-pointer hover:scale-110 transition-all duration-200"
            onClick={toggleInput}
          />
          <div
            className={`w-full h-full flex flex-col items-center gap-5 transition-opacity duration-300 ${isOpen ? 'opacity-30' : 'opacity-100'}`}
          >
            {tasks.length === 0 ? (
              <p className="text-white text-xl font-mono mt-45 opacity-25">No tasks to list 😴</p>
            ) : (
              tasks.map((t, index) => (
                <div
                  key={index}
                  className={`w-1/2 p-5 flex bg-white rounded-[10px] shadow shadow-white transition-transform duration-300 ${
                    t.done ? 'opacity-50' : 'opacity-100'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={t.done}
                    onChange={() => handleDone(index)}
                    className="cursor-pointer"
                  />

                  <p
                    className={`text-2xl flex-1 font-handwriting ml-5 ${
                      t.done ? 'line-through italic' : ''
                    }`}
                  >
                    {changeCase(t.item)}
                  </p>

                  <img
                    src={remIcon}
                    className="w-10 h-10 mr-2 cursor-pointer hover:scale-105 transition-all duration-200"
                    onClick={() => handleRemove(index)}
                  />

                  <img
                    src={upIcon}
                    className="w-10 h-10 mr-2 cursor-pointer hover:scale-105 transition-all duration-200"
                    onClick={() => handleMoveUp(index)}
                  />

                  <img
                    src={downIcon}
                    className="w-10 h-10 cursor-pointer hover:scale-105 transition-all duration-200"
                    onClick={() => handleMoveDown(index)}
                  />
                </div>
              ))
            )}
          </div>
          <div
            className={`bg-white w-3/10 h-20 flex items-center justify-center gap-5 p-2 rounded-[10px] absolute top-72 transition-opacity duration-200 ${isOpen ? 'opacity-100 ' : 'opacity-0'}`}
          >
            <input
              value={newtask}
              className="border p-3 w-full rounded-[10px]"
              placeholder="Enter a task..."
              onChange={handleTaskInput}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  handleAdd();
                }
              }}
            ></input>
            <button
              className="bg-gray-900 text-white p-3 w-20 rounded-[10px] cursor-pointer hover:bg-gray-800 transition-colors duration-200"
              onClick={handleAdd}
            >
              Add
            </button>
            <img
              src={closeIcon}
              className="w-5 h-5 mb-12 cursor-pointer hover:scale-105 transition-transform duration-200"
              onClick={toggleInput}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default TaskManager;
