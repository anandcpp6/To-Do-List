import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/todo-list');
  };

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-blue-300 via-purple-200 to-pink-200 transition-all duration-500 -z-10"></div>

      <div className="flex items-center justify-center min-h-[80vh]">
        <form
          onSubmit={handleSubmit} 
          className="bg-transparent p-8 rounded-lg shadow-md w-full max-w-sm"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/1057/1057240.png"
            className="mx-auto mb-4 w-16 h-16"
            alt="signup-icon"
          />
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign up</h2>
          <div className="mb-4">
            <h3 className="mb-1 font-semibold text-gray-700">Email ID</h3>
            <input
              id="email"
              type="email"
              name="username"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-white border border-gray-500 rounded focus:outline-none focus:ring-1"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <h2 className="mb-1 font-semibold text-gray-700">Password</h2>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 bg-white border border-gray-500 rounded focus:outline-none focus:ring-1"
              placeholder="Enter your password"
            />
          </div>
          <button
            type='submit'
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors font-semibold"
          >
            Create New Account
          </button>
        </form>
      </div>
    </>
  );
}
