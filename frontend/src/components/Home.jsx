import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Welcome Message */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8 animate-fadeIn">
        Welcome to Our Platform!
      </h1>
      
      <div className="space-y-4">
        {/* Login Button */}
        <button
          onClick={() => navigate('/login')}
          className="bg-blue-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 hover:scale-105 transition duration-300 transform"
        >
          Login
        </button>
        
        {/* Register Button */}
        <button
          onClick={() => navigate('/register')}
          className="bg-green-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition duration-300 transform"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Home;
