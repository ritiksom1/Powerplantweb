import React, { useState, useEffect } from "react";
import LiquidGauge from "react-liquid-gauge";

const ProductionOverview = () => {
  const gaugeValue = 21.66;
  const totalProductionPower = 700; // in watts
  const installedCapacity = 6; // in kWp
  const dailyProduction = 12.13; // in kWh
  const monthlyProduction = 148.19; // in kWh
  const yearlyProduction = 373.39; // in kWh
  const totalProduction = 406; // in kWh

  const [lastUpdated, setLastUpdated] = useState("");

  const formatDateTime = (date) => {
    return date.toLocaleString();
  };

  useEffect(() => {
    const currentDate = new Date();
    setLastUpdated(formatDateTime(currentDate));
  }, []);

  return (
    <div className="relative bg-white p-6 rounded-lg flex flex-col h-full">
      {/* Last Updated text at the top */}
      <div className="absolute top-4 right-4 text-sm font-semibold text-gray-500">
        Last Updated: {lastUpdated}
      </div>

      {/* Title: Positioned at the top-left of the screen */}
      <h2 className="absolute top-2 left-4 text-xl font-semibold">
        Production Overview
      </h2>

      {/* Centered Container for Liquid Gauge and Text */}
      <div className="flex flex-col lg:flex-row justify-around items-center flex-grow mt-[-10%] lg:mt-[-10%]">
        {/* Liquid Gauge */}
        <div className="flex-shrink-0 flex flex-row justify-center mb-4 lg:mb-0">
          <LiquidGauge
            value={gaugeValue}
            width={105}
            height={105}
            textSize={0.85} // Reduced the text size by 15%
            percent="%"
            riseAnimation
            waveAnimation
            waveFrequency={2}
            waveAmplitude={3}
            gradient={true}
            circleStyle={{ fill: "#0066ff" }} // Adjust color as per your theme
            textStyle={{ fill: "#000", fontSize: "1.28rem" }} // Adjusted font size
          />
        </div>

        {/* Text and Production Info */}
        <div className="text-center lg:text-left mb-4">
          <p className="text-sm">Total Production Power</p>
          <p className="text-sm font-semibold">{totalProductionPower} W</p>
          <p className="text-sm">Installed Capacity</p>
          <p className="text-sm font-semibold">{installedCapacity} kWp</p>
        </div>
      </div>

      {/* Footer (Production Values) */}
      <div className="absolute bottom-0 left-0 w-full bg-gray-200 py-6 px-2 flex justify-between items-center text-center border-r-2 rounded-md">
        <div className="flex-1">
          <p className="text-sm">Daily Production</p>
          <p className="text-sm font-semibold">{dailyProduction} kWh</p>
        </div>
        <div className="flex-1">
          <p className="text-sm">Monthly Production</p>
          <p className="text-sm font-semibold">{monthlyProduction} kWh</p>
        </div>
        <div className="flex-1">
          <p className="text-sm">Yearly Production</p>
          <p className="text-sm font-semibold">{yearlyProduction} kWh</p>
        </div>
        <div className="flex-1">
          <p className="text-sm">Total Production</p>
          <p className="text-sm font-semibold">{totalProduction} kWh</p>
        </div>
      </div>
    </div>
  );
};

export default ProductionOverview;
