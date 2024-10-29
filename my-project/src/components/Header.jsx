import React from 'react';
import logo from '../assets/galologo.png'; // Adjust the path as needed

const Header = ({ customerName, customerAddress, plantCapacity, isAdmin }) => {
  return (
    <div className="bg-black text-yellow-400 p-6 flex justify-between items-center shadow-md sticky top-0 z-20">
      <div className="flex items-center">
        <img src={logo} alt="Galo Solar Logo" className="h-14 mr-8 rounded-lg" />
      </div>

      {/* Conditional rendering based on admin status */}
      <div className="flex items-center">
        {isAdmin ? (
          <h1 className="text-lg font-bold">Admin</h1>
        ) : (
          <>
            <h1 className="text-lg font-bold">{customerName},</h1>
            <p className="text-lg font-bold">{customerAddress},</p>
            <p className="text-lg font-bold">Plant Installed: {plantCapacity} kW</p>
          </>
        )}
      </div>

      <div>
        <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
