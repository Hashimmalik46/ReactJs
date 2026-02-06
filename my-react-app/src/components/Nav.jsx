import { Link, useLocation } from 'react-router-dom';
import Greet from './Greet.jsx';
import HomeIcon from '../assets/home.png';
import taskIcon from '../assets/task.png';

function Nav() {
  const location = useLocation();
  return (
    <nav
      className={`h-20 flex items-center justify-around ${location.pathname === '/' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
    >
      <Greet name="Hashim" isLogged={true} />
      <ul className="flex gap-8 items-center">
        <li>
          <Link to="/">
            <img
              src={HomeIcon}
              className={`w-8 h-8 transition-opacity duration-200 ${location.pathname === '/' ? 'opacity-100' : 'opacity-25 hover:opacity-100'}`}
            />
          </Link>
        </li>
        <li>
          <Link to="/taskmanager">
            <img
              src={taskIcon}
              className={`w-8 h-8  transition-opacity duration-200 ${location.pathname === '/taskmanager' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
