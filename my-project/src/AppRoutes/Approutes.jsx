// src/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../components/Dasboard';
import Monitor from '../Monitor/Monitor'
import Plants from '../Plants/Plants'
import Devices from '../Devices/Devices'

const Approutes = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/monitor" element={<Monitor/>} />
      <Route path="/plants" element={<Plants />} />
      <Route path="/devices" element={<Devices />} />
    </Routes>
    
    
    
  );
};

export default Approutes;
