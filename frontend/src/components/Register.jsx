import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  
  // Using a single state object for all form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Reset message on new submission

    // Check for empty fields
    if (!formData.name || !formData.email || !formData.password) {
      setMessage('All fields are required');
      setTimeout(() => {
        setMessage('');
      }, 2000);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/register', formData);
      console.log(response.data);
      setMessage('Registration successful');
      navigate('/login'); // Navigate to login page after successful registration
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data.error) {
        setMessage(error.response.data.error);
      } else {
        setMessage('An error occurred. Please try again.');
      }
      setTimeout(() => {
        setMessage('');
      }, 5000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Display success or error messages */}
      {message && <p className=" absolute top-0  flex items-center justify-center bg-black  text-red-500 text-center">{message}</p>}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 bg-white p-8 rounded-lg shadow-lg w-80 mt-4"
      >
        <label className="text-orange-800 font-semibold">Username</label>
        <input
          name="name"
          placeholder="Username"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={formData.name}
          onChange={handleChange}
        />

        <label className="text-orange-800 font-semibold">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={formData.email}
          onChange={handleChange}
        />

        <label className="text-orange-800 font-semibold">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={formData.password}
          onChange={handleChange}
        />

        

        <button
          type="submit"
          className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition duration-200"
        >
          Register
        </button>
        <p className="text-center text-gray-500">
          Already have an account?{' '}
          <a href="/login" className="text-orange-600 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
