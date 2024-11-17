import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="space-y-4">
        <button
          onClick={() => navigate('/login')}
          className="bg-blue-500 text-white py-2 px-6 rounded-md shadow-lg hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
        <button
          onClick={() => navigate('/register')}
          className="bg-green-500 text-white py-2 px-6 rounded-md shadow-lg hover:bg-green-600 transition duration-200"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Home;
