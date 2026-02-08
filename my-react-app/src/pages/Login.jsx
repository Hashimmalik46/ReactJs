import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const storedData = JSON.parse(localStorage.getItem('userData'));
function Login() {
  const [user, setUser] = useState('');
  const [pass, setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    user === storedData.username && pass === storedData.password
      ? navigate('/home')
      : alert('Invalid username or password');
  }
  return (
    <div className="w-svw h-svh flex items-center justify-center bg-gray-900">
      <div className="w-1/4 h-1/2 border border-white rounded-[20px] flex flex-col p-5 gap-10">
        <div className=" flex flex-col items-center gap-1 mt-2">
          <h1 className="text-3xl text-white font-bold font-mono">Login</h1>
          <p className="text-white tex-xl">
            A new user? <Link to="/signup">Signup</Link>
          </p>
        </div>
        <form className="w-full flex flex-col gap-8" onSubmit={handleLogin}>
          <div>
            <h1 className="text-xl text-white font-mono">Username</h1>
            <input
              value={user}
              onChange={e => setUser(e.target.value)}
              className="w-full h-10 border rounded-[5px] border-white text-white p-2"
              placeholder="enter your username"
            ></input>
          </div>
          <div>
            <h1 className="text-xl text-white font-mono">Password</h1>
            <input
              value={pass}
              type="password"
              onChange={e => setPassword(e.target.value)}
              className="w-full h-10 border rounded-[5px] border-white text-white p-2"
              placeholder="enter your password"
            ></input>
          </div>
          <button
            className="bg-white text-2xl font-mono p-3 rounded-[5px] cursor-"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
