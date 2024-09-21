import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import logo from '../assets/galologo.png'; // Adjust the path as needed

const CustomerLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password, 'customer'); // Pass the role as 'customer'
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-10" /> {/* Replace with actual logo */}
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <div className="flex items-center border rounded-md">
              <FaUser className="text-gray-500 m-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border-none focus:outline-none"
                placeholder="Enter your email"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border-none focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 w-full rounded-lg hover:bg-blue-600 transition-colors"
          >
            Log In as Customer
          </button>
        </form>

        {/* Register Link */}
        <div className="mt-4 flex justify-center">
          <a href="/register" className="text-blue-500 hover:underline">Register</a>
        </div>
      </div>
    </div>
  );
};

export default CustomerLogin;
