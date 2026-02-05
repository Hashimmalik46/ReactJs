import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TaskManager from './pages/TaskManager';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taskmanager" element={<TaskManager />} />
      </Routes>
    </>
  );
}

export default App;
