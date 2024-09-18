import React from 'react';
import logo from '../assets/galologo.png'; // Adjust the path as needed

const Header = ({ customerName, customerAddress, plantCapacity }) => {
  return (
    <div className="bg-black text-yellow-400 p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
      <div className="flex items-center">
        <img src={logo} alt="Galo Solar Logo" className="h-12 mr-6 rounded-lg" />
      </div>

      {/* Middle section with customer details in a row */}
      <div className="flex  items-center">
        <h1 className="text-lg font-bold"> {customerName}, </h1>
        <p className="text-lg font-bold"> {customerAddress},</p>
        <p className="text-lg font-bold"> Plant Installed: {plantCapacity} kW</p>
      </div>

      <div>
        <button className="bg-yellow-400 text-black px-4 py-1 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
