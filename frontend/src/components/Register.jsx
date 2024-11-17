import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [name,setname]=useState();
    const [email,setemail]=useState();
    const [password,setpassword]=useState();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="flex flex-col space-y-4 bg-white p-8 rounded-lg shadow-lg w-80">
        <label className="text-orange-800 font-semibold">Username</label>
        <input
          name="username"
          placeholder="Username"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          onChange={(e)=>setname(e.target.value)}
        />
        <label className="text-orange-800 font-semibold">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          onChange={(e)=>setemail(e.target.value)}
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
          Register
        </button>
        <p className="text-center text-gray-500">
        Already have an account? <a href="/login">Login</a>
      </p>
      </form>
     
    </div>
  );
};

export default Register;
