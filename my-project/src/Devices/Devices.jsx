import React, { Component } from 'react';

export class Devices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      importEnergy: 500, // Example value in kWh
      exportEnergy: 300, // Example value in kWh
    };
  }

  render() {
    const { importEnergy, exportEnergy } = this.state;

    return (
      <div className="flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold mb-6">Energy details</h1>
        <div className="bg-white shadow-md rounded-lg p-6 m-4 w-64 text-center">
          <h2 className="text-xl font-semibold mb-2">Import Energy</h2>
          <p className="text-2xl font-bold text-green-500">{importEnergy} kWh</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 m-4 w-64 text-center">
          <h2 className="text-xl font-semibold mb-2">Export Energy</h2>
          <p className="text-2xl font-bold text-red-500">{exportEnergy} kWh</p>
        </div>
      </div>
    );
  }
}

export default Devices;
