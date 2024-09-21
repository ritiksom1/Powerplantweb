import { useState } from "react";
import { FaUser, FaLock, FaHome, FaIndustry } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";  
import logo from '../assets/galologo.png'; 
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    plantInstalled: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
  
    try {
      console.log(formData)
      const response = await axios.post("http://localhost:3000/user/signup", formData);
      console.log(response.data);

      if (response.data.success) {
        alert('Signup Successful!');
        navigate('/login'); 
      } else {
        alert('Signup Failed: Invalid data');
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
          <img src={logo} alt="Logo" className="h-16 mr-8 rounded-lg" />
        </div>

      
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
         
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <div className="flex items-center border rounded-md">
              <FaUser className="text-gray-500 m-2" />
              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="w-full p-2 border-none focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>

         
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <div className="flex items-center border rounded-md">
              <FaHome className="text-gray-500 m-2" />
              <input
                type="text"
                name="address"
                onChange={handleChange}
                className="w-full p-2 border-none focus:outline-none"
                placeholder="Enter your address"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Plant Installed Capacity</label>
            <div className="flex items-center border rounded-md">
              <FaIndustry className="text-gray-500 m-2" />
              <input
                type="text"
                name="plantInstalled"
                onChange={handleChange}
                className="w-full p-2 border-none focus:outline-none"
                placeholder="Enter plant installed capacity"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <div className="flex items-center border rounded-md">
              <FaUser className="text-gray-500 m-2" />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full p-2 border-none focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Password */}
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

          {/* Register Button */}
          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold py-2 px-4 w-full rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Register
          </button>
        </form>

        {/* Already Registered? Login */}
        <div className="text-center mt-4">
          <p className="text-gray-600">Already registered?{" "}
            <Link to="/AdminLogin" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
