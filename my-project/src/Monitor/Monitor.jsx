import React, { Component } from 'react';

export class Monitor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], // This will hold your data array
      imeiInput: '', // This will hold the input IMEI number
      selectedData: null, // This will hold the selected row's data
    };
  }

  // Method to simulate fetching data from an API
  fetchData = () => {
    const exampleData = [
      {
        timestamp: '2024-09-03 15:33:24',
        imei: '869830904355494',
        inputVoltage: 230,
        inputCurrent: 5,
        inputPower: 1150,
        outputVoltage: 220,
        outputCurrent: 4.5,
        outputPower: 990,
        eToday: 5.5,
        eTotal: 200,
        faultStatus: 'No fault',
      },
      // Add more data entries as needed
    ];

    this.setState({ data: exampleData });
  };

  componentDidMount() {
    // Fetch data when the component mounts
    this.fetchData();

    // Set up an interval to refresh the data every 5 minutes (300,000 milliseconds)
    this.interval = setInterval(() => {
      this.fetchData();
      this.handleSubmit(); // Reapply the IMEI search after data refresh
    }, 300000); // 5 minutes
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted to avoid memory leaks
    clearInterval(this.interval);
  }

  // Handles input change for the IMEI input field
  handleInputChange = (event) => {
    this.setState({ imeiInput: event.target.value });
  };

  // Handles form submission and finds data based on IMEI number
  handleSubmit = (event) => {
    if (event) event.preventDefault(); // Prevent page reload on form submit
    const { data, imeiInput } = this.state;
    // Find the entry with the matching IMEI number
    const selectedData = data.find((item) => item.imei === imeiInput);

    // Set the found data to the state
    if (selectedData) {
      this.setState({ selectedData });
    } else {
      // If no data is found, clear selectedData
      this.setState({ selectedData: null });
      alert('No data found for the given IMEI.');
    }
  };

  render() {
    const { selectedData } = this.state;

    return (
      <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center relative">
        {/* Monitor Live Data Header */}
        <h1 className="text-3xl font-bold mb-8 absolute top-5">Monitor Live Data</h1>

        {/* IMEI Input Form Centered */}
        <form onSubmit={this.handleSubmit} className="flex items-center mb-4 mt-20">
          <input
            type="text"
            placeholder="Enter IMEI"
            value={this.state.imeiInput}
            onChange={this.handleInputChange}
            className="px-3 py-2 border border-gray-400 rounded-lg text-lg w-64"
          />
          <button
            type="submit"
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-lg"
          >
            Send
          </button>
        </form>

        {/* Conditionally Render the Data in a Table if Data is Found */}
        {selectedData && (
          <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-4xl mt-2">
            <table className="min-w-full table-auto text-lg">
              <thead className="bg-black">
                <tr className="text-white">
                  <th className="px-6 py-3 border">Parameter</th>
                  <th className="px-6 py-3 border">Value</th> 
                  <th className="px-6 py-3 border">Unit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-3 border">Timestamp</td>
                  <td className="px-6 py-3 border">{selectedData.timestamp}</td>
                  <td className="px-6 py-3 border">-</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 border">IMEI</td>
                  <td className="px-6 py-3 border">{selectedData.imei}</td>
                  <td className="px-6 py-3 border">-</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 border">Input Voltage</td>
                  <td className="px-6 py-3 border">{selectedData.inputVoltage}</td>
                  <td className="px-6 py-3 border">V</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 border">Input Current</td>
                  <td className="px-6 py-3 border">{selectedData.inputCurrent}</td>
                  <td className="px-6 py-3 border">A</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 border">Input Power</td>
                  <td className="px-6 py-3 border">{selectedData.inputPower}</td>
                  <td className="px-6 py-3 border">W</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 border">Output Voltage</td>
                  <td className="px-6 py-3 border">{selectedData.outputVoltage}</td>
                  <td className="px-6 py-3 border">V</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 border">Output Current</td>
                  <td className="px-6 py-3 border">{selectedData.outputCurrent}</td>
                  <td className="px-6 py-3 border">A</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 border">Output Power</td>
                  <td className="px-6 py-3 border">{selectedData.outputPower}</td>
                  <td className="px-6 py-3 border">W</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 border">E-Today</td>
                  <td className="px-6 py-3 border">{selectedData.eToday}</td>
                  <td className="px-6 py-3 border">kWh</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 border">E-Total</td>
                  <td className="px-6 py-3 border">{selectedData.eTotal}</td>
                  <td className="px-6 py-3 border">kWh</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 border">Fault Status</td>
                  <td className="px-6 py-3 border">{selectedData.faultStatus}</td>
                  <td className="px-6 py-3 border">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default Monitor;
