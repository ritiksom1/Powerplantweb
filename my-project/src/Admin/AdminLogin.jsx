import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import logo from '../assets/galologo.png'; // Adjust the path as needed
import CustomerSign from '../customer/CustomerSign'; // Import the Register component

const Login = ({ onLogin }) => {
  const [isCustomerLogin, setIsCustomerLogin] = useState(true); // Customer login by default
  const [isRegister, setIsRegister] = useState(false); // To toggle between login and register
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const role = isCustomerLogin ? 'customer' : 'admin'; // Determine role based on the login type
    onLogin(email, password, role); // Call the onLogin function
  };

  const switchToCustomer = () => {
    setIsCustomerLogin(true);
    setEmail(''); // Clear email
    setPassword(''); // Clear password
  };

  const switchToAdmin = () => {
    setIsCustomerLogin(false);
    setEmail(''); // Clear email
    setPassword(''); // Clear password
  };

  if (isRegister) {
    return <CustomerSign />; // Render the Register component if "Register customer?" is clicked
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-16 rounded-lg" />
        </div>

        {/* Tabs for Customer/Admin */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            className={`text-lg font-semibold ${isCustomerLogin ? "text-black border-b-2 border-yellow-400" : "text-gray-500"}`}
            onClick={switchToCustomer}
          >
            Customer Login
          </button>
          <button
            className={`text-lg font-semibold ${!isCustomerLogin ? "text-black border-b-2 border-yellow-400" : "text-gray-500"}`}
            onClick={switchToAdmin}
          >
            Admin Login
          </button>
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
            className="bg-yellow-400 text-black font-semibold py-2 px-4 w-full rounded-lg hover:bg-yellow-500 transition-colors"
          >
            {isCustomerLogin ? "Log In as Customer" : "Log In as Admin"}
          </button>
        </form>

        {/* Register Link */}
        {isCustomerLogin && (
          <div className="mt-2 flex justify-center">
            <button
              onClick={() => setIsRegister(true)} // Toggle to the Register component
              className="text-black text-base hover:underline"
            >
              Register customer?
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
