import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages
    setLoading(true); // Start loading

    // Check for empty fields
    if (!name || !password) {
      setMessage('Please fill in all fields');
      setLoading(false);
      return;
    }

    const data = { username: name, password };
    
    try {
      const res = await axios.post('http://localhost:3000/login', data);
      console.log(res.data);
      setMessage('Login successful');
      // Redirect to the home page after successful login
      navigate('/');
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.error || 'Invalid username or password');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-white p-8 rounded-lg shadow-lg w-80">
        <label className="text-orange-800 font-semibold">Username</label>
        <input
          name="username"
          placeholder="Username"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={name}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="text-orange-800 font-semibold">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Display success or error messages */}
        {message && <p className="text-center text-red-500">{message}</p>}

        <button
          type="submit"
          className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition duration-200"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        
        <p className="text-center text-gray-500">
          Don't have an account?{' '}
          <a href="/register" className="text-orange-600 hover:underline">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
