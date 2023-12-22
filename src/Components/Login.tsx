import React, { useState } from 'react';
import Register from './Register';

interface LoginDialogProps {
  onClose: () => void;
}

const Login: React.FC<LoginDialogProps> = ({ onClose }) => {
  const [username, setUsername] =  useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  

  const handleLogin = () => {
    
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-gray-800 bg-opacity-75 fixed inset-0"></div>
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <span className="absolute top-2 right-2 cursor-pointer text-black" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
        <h2 className="text-2xl font-bold text-black mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-900">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
