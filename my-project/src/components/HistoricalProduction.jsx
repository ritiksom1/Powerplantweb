import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const HistoricalProduction = () => {
  const currentMonth = new Date().toISOString().slice(0, 7); // Format: YYYY-MM
  const currentYear = new Date().getFullYear(); // Get the current year

  const [data, setData] = useState([
    { date: "1", kWh: 12.5 },
    { date: "3", kWh: 14.3 },
    { date: "6", kWh: 15.2 },
    { date: "9", kWh: 10.8 },
    { date: "12", kWh: 13.6 },
    { date: "15", kWh: 9.5 },
    { date: "18", kWh: 16.2 },
    { date: "21", kWh: 8.3 },
    { date: "24", kWh: 6.1 },
    { date: "27", kWh: 11.4 },
    { date: "29", kWh: 17.1 },
    { date: "30", kWh: 12.9 },
    { date: "31", kWh: 10.4 },
  ]);

  const [selectedView, setSelectedView] = useState("month"); // 'month' or 'year'
  const [selectedDate, setSelectedDate] = useState(currentMonth); // Default to current month

  // Simulate data fetching for different views
  useEffect(() => {
    const fetchData = () => {
      if (selectedView === "month") {
        // Fetch or generate data for the selected month
        setData([
          { date: "1", kWh: 12.5 },
          { date: "3", kWh: 14.3 },
          { date: "6", kWh: 15.2 },
          { date: "9", kWh: 10.8 },
          { date: "12", kWh: 13.6 },
          { date: "15", kWh: 9.5 },
          { date: "18", kWh: 16.2 },
          { date: "21", kWh: 8.3 },
          { date: "24", kWh: 6.1 },
          { date: "27", kWh: 11.4 },
          { date: "28", kWh: 17.1 },
          { date: "29", kWh: 12.9 },
          { date: "30", kWh: 10.4 },
          { date: "31", kWh: 11.4 },
         
        ]);
      } else {
        // Fetch or generate data for the selected year
        setData([
          { date: "Jan", kWh: 120 },
          { date: "Feb", kWh: 140 },
          { date: "Mar", kWh: 150 },
          { date: "Apr", kWh: 130 },
          { date: "May", kWh: 160 },
          { date: "Jun", kWh: 170 },
          { date: "Jul", kWh: 180 },
          { date: "Aug", kWh: 190 },
          { date: "Sep", kWh: 170 },
          { date: "Oct", kWh: 160 },
          { date: "Nov", kWh: 150 },
          { date: "Dec", kWh: 140 },
        ]);
      }
    };

    fetchData();
  }, [selectedView, selectedDate]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleViewChange = (view) => {
    if (view === "year") {
      setSelectedDate(currentYear.toString()); // Set to the current year when switching to year view
    } else {
      setSelectedDate(currentMonth); // Set to the current month when switching to month view
    }
    setSelectedView(view);
  };

  return (
    <div >
      <div className="flex justify-between mb-4">
        <div className="text-base md:text-m lg:text-xl font-semibold">Historical Production</div>
        <div className="flex items-center gap-1">
          <button
            className={`px-2 py-1 rounded text-xs sm:text-xs ${selectedView === "month" ? "bg-yellow-400 text-white" : "bg-gray-200"}`}
            onClick={() => handleViewChange("month")}
          >
            Month
          </button>
          <button
            className={`px-2 py-1 rounded text-xs sm:text-xs ${selectedView === "year" ? "bg-yellow-400 text-white" : "bg-gray-200"}`}
            onClick={() => handleViewChange("year")}
          >
            Year
          </button>
          <input
            type={selectedView === "month" ? "month" : "number"}
            value={selectedDate}
            onChange={handleDateChange}
            className="border rounded px-2 py-1 text-xs sm:text-xs"
            min="2000"  // Limit the year range for year input
          />
        </div>
      </div>

      <div className="flex justify-center mb-4">
        <p className="text-xs md:text-xs lg:text-sm">
          {selectedView === "month" ? "Monthly" : "Yearly"} Production: 
          <span className="font-semibold"> {data.reduce((acc, cur) => acc + cur.kWh, 0).toFixed(2)} kWh</span>
        </p>
      </div>

      <div className="relative">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={data} margin={{ top: 30, right: 30, left: 20, bottom: 50 }}>
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <XAxis 
              dataKey="date" 
              label={{ value: selectedView === "month" ? "Days" : "Months", position: "insideBottom", offset: -5 }} 
              stroke="black" 
              tick={{ fill: "black" }}  // Axis tick labels color to black
            />
            <YAxis 
              label={{ value: "kWh", angle: -90, position: "insideLeft" }} 
              stroke="black" 
              tick={{ fill: "black" }}  // Axis tick labels color to black
            />
            <Tooltip />
            <Bar dataKey="kWh" fill="#FACC15" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HistoricalProduction;
