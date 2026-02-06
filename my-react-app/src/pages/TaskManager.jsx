import Nav from '../components/Nav';
import addIcon from '../assets/add.png';
import remIcon from '../assets/remove.png';
import upIcon from '../assets/up.png';
import downIcon from '../assets/down.png';
import taskIcon from '../assets/task.png'
import { useState } from 'react';
function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewTask] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleInput = function () {
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
    return str
      .split(' ')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  }

  return (
    <>
      <div className="w-full h-svh bg-gray-900">
        <Nav />
        <div className="w-full flex flex-col items-center p-10 relative">
          <div className=' w-1/3 h-20 flex items-center justify-center gap-5 mb-10'>
            <h1 className="text-3xl font-bold text-white">
              Task Manager
            </h1>
            <img src={taskIcon} className='w-15 h-15'/>
          </div>
          <img
            src={addIcon}
            className="w-15 h-15 absolute right-60 top-8 cursor-pointer hover:scale-110 transition-all duration-200"
            onClick={toggleInput}
          />
          <div
            className={`w-full h-full flex flex-col items-center gap-5 ${isOpen ? 'opacity-30 transition-opacity duration-300' : 'opacity-100 transition-opacity duration-200'}`}
          >
            {tasks.map((t, index) => {
              return (
                <div
                  key={index}
                  className={`w-1/2 p-5 flex bg-white rounded-[10px] shadow shadow-white ${t.done ? 'opacity-50' : 'opacity-100 hover:scale-101 transition-transform duration-300'}`}
                >
                  <input
                    type="checkbox"
                    checked={t.done}
                    onChange={() => handleDone(index)}
                    className="cursor-pointer"
                  ></input>
                  <p
                    className={`text-2xl flex-1 font-medium ml-5 ${t.done ? 'line-through italic' : 'no-underline'}`}
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
              );
            })}
          </div>
          <div
            className={`bg-white w-3/10 h-20 flex items-center justify-center gap-5 p-2 rounded-[10px] absolute top-72 ${isOpen ? 'opacity-100 transition-opacity duration-200' : 'opacity-0 transition-opacity duration-200'}`}
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
          </div>
        </div>
      </div>
    </>
  );
}
export default TaskManager;
