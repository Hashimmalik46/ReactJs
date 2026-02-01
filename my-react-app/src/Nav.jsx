import Greet from "./Greet.jsx";
function Nav() {
  return (
    <nav className="bg-gray-900 text-white h-20 flex items-center justify-around">
      <Greet name="Hashim" isLogged={true} />
      <ul className="flex gap-8 items-center">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
