import React, { Component } from 'react';

class Monitor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imei: '',
      data: [],
      loading: false,
      error: null,
    };
  }

  // Function to fetch data from the API based on IMEI
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(`http://13.233.159.5:3000/get-data/${this.state.imei}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      this.setState({ data: result });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ error: 'Error fetching data. Please try again.' });
    } finally {
      this.setState({ loading: false });
    }
  };

  // Function to handle input change
  handleInputChange = (e) => {
    this.setState({ imei: e.target.value });
  };

  // Function to render the table rows
  renderRow = (item, index) => {
    return (
      <tr key={index} className="bg-white border-b hover:bg-gray-100 transition duration-150">
        <td className="px-4 py-2 text-gray-700">{item.timestamp || '--'}</td>
        <td className="px-4 py-2 text-gray-700">{item.imei || '--'}</td>
        <td className="px-4 py-2 text-gray-700">{item.data1 || '0'}</td>
        <td className="px-4 py-2 text-gray-700">{item.data2 || '0'}</td>
        <td className="px-4 py-2 text-gray-700">{item.data3 || '0'}</td>
        <td className="px-4 py-2 text-gray-700">{item.data4 || '0'}</td>
        <td className="px-4 py-2 text-gray-700">{item.data5 || '0'}</td>
        <td className="px-4 py-2 text-gray-700">{item.data6 || '0'}</td>
        <td className="px-4 py-2 text-gray-700">{item.data7 || '0'}</td>
        <td className="px-4 py-2 text-gray-700">{item.data8 || '0'}</td>
        <td className="px-4 py-2 text-gray-700">{item.faultStatus || '--'}</td>
      </tr>
    );
  };

  render() {
    const { imei, data, loading, error } = this.state;

    return (
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="w-full flex flex-col items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Monitor Page</h1>
          <div className="w-full max-w-xl flex items-center space-x-4">
            <input
              type="text"
              className="w-7/12 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter IMEI Number"
              value={imei}
              onChange={this.handleInputChange}
            />
            <button
              onClick={this.fetchData}
              className={`w-20 p-2 bg-yellow-500 text-white rounded shadow-md transition duration-200 ease-in-out hover:bg-yellow-600 ${loading || !imei ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading || !imei}
            >
              {loading ? 'Loading...' : 'Send'}
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-4 text-red-600 text-center">{error}</div>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg text-left text-sm">
            <thead className="bg-gray-60">
              <tr>
                <th className="px-4 py-2 text-gray-600 font-medium">Timestamp</th>
                <th className="px-4 py-2 text-gray-600 font-medium">IMEI</th>
                <th className="px-4 py-2 text-gray-600 font-medium">InputVoltage</th>
                <th className="px-4 py-2 text-gray-600 font-medium">InputCurrent</th>
                <th className="px-4 py-2 text-gray-600 font-medium">InputPower</th>
                <th className="px-4 py-2 text-gray-600 font-medium">OutputVoltage</th>
                <th className="px-4 py-2 text-gray-600 font-medium">OutputCurrent</th>
                <th className="px-4 py-2 text-gray-600 font-medium">OutputPower</th>
                <th className="px-4 py-2 text-gray-600 font-medium">E-Today</th>
                <th className="px-4 py-2 text-gray-600 font-medium">E-Total</th>
                <th className="px-4 py-2 text-gray-600 font-medium">Fault Status</th>
               
              </tr>
            </thead>
            <tbody>
              {data.length >=0 ? (
                data.map((item, index) => this.renderRow(item, index))
              ) : (
                <tr>
                  <td colSpan="13" className="text-center px-4 py-6 text-gray-500">No data available for the entered IMEI number.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Monitor;
