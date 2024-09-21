import React from 'react';
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";  
import axios from 'axios'; 
import logo from '../assets/galologo.png'; 

const CustomerLogin = () => {
  const navigate = useNavigate();
  // const [ email, setEmail ] = useState("test@gmail.com");
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    // console.log(e.target.value)
    // setEmail(e.target.value);
    // setFormData.email
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    // console.log(formData.email)
    console.log(email);
    try {
      console.log(formData);
      const response = await axios.post("http://localhost:3000/user/login", formData);
      console.log(response.data);

      if (response.data.success) {
        alert('Login Successful!');
        navigate('/dashboard'); 
      } else {
        alert('Login Failed: Invalid data');
      }
    } catch (error) {
      console.error('There was an error!', error);
      alert('There was an error with your request. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
       
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <div className="flex items-center border rounded-md">
              <FaUser className="text-gray-500 m-2" />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                // className="w-full p-2 border-none focus:outline-none"
                placeholder="Prince"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <div className="flex items-center border rounded-md">
              <FaLock className="text-gray-500 m-2" />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                className="w-full p-2 border-none focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 w-full rounded-lg hover:bg-blue-600 transition-colors"
          >
            Log In as Customer
          </button>
        </form>
        <div className="mt-4 flex justify-center">
          <Link to="/register" className="text-blue-500 hover:underline">Register idfnjeifnigjktroigoitjoighmtiomyjijiernfn</Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerLogin;
