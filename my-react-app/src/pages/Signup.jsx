import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Signup() {
  const [user, setUser] = useState('');
  const [pass, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      username: user,
      password: pass,
    };
    localStorage.setItem('userData', JSON.stringify(data));
    localStorage.setItem('isAuth','true')
    navigate('/');
  }

  return (
    <div className="w-svw h-svh flex items-center justify-center bg-gray-900">
      <div className="w-1/4 h-1/2 border border-white rounded-[20px] flex flex-col p-5 gap-10">
        <div className=" flex flex-col items-center gap-1 mt-2">
          <h1 className="text-3xl text-white font-bold font-mono">Signup</h1>
          <p className="text-white tex-xl">
            Already a user? <Link to="/">Login</Link>
          </p>
        </div>
        <form className="w-full flex flex-col gap-8" onSubmit={handleSubmit}>
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
              type="password"
              value={pass}
              onChange={e => setPassword(e.target.value)}
              className="w-full h-10 border rounded-[5px] border-white text-white p-2"
              placeholder="enter your password"
            ></input>
          </div>

          <button
            className="bg-white text-2xl font-mono p-3 rounded-[5px] cursor-pointer"
            type="submit"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}
export default Signup;
