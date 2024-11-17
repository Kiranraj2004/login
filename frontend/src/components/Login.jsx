// frontend/src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <form className="flex flex-col space-y-4 bg-white p-8 rounded-lg shadow-lg w-80">
      <label className="text-orange-800 font-semibold">Username</label>
      <input
        name="username"
        placeholder="Username"
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      
      <label className="text-orange-800 font-semibold">Password</label>
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        onChange={(e)=>setpassword(e.target.value)}
      />
      <button
        type="submit"
        className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition duration-200"
      >
        Login
      </button>
      <p className="text-center text-gray-500">
      Already don't  have an account? <a href="/register">register</a>
    </p>
    </form>
   
  </div>
  );
};

export default Login;
