import { Link, useLocation } from 'react-router-dom';
import Greet from './Greet.jsx';
function Nav() {
  const location = useLocation();
  return (
    <nav className="bg-gray-900 text-white h-20 flex items-center justify-around">
      <Greet name="Hashim" isLogged={true} />
      <ul className="flex gap-8 items-center">
        <li
          style={
            location.pathname === '/'
              ? { textDecoration: 'underline' }
              : { textDecoration: 'none' }
          }
        >
          <Link to="/">Home</Link>
        </li>
        <li   style={
            location.pathname === '/taskmanager'
              ? { textDecoration: 'underline' }
              : { textDecoration: 'none' }
          }>
          <Link to="/taskmanager">Task Manager</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
