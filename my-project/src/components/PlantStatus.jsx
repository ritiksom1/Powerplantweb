const PlantStatus = () => {
    return (
      <div className="bg-white p-6 rounded-lg ">
        <h3 className="text-lg font-semibold mb-4">Plant Status</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p>Total Plants</p>
            <p className="text-xl font-bold">2</p>
          </div>
          <div className="text-center">
            <p>Offline Plants</p>
            <p className="text-xl font-bold">1</p>
          </div>
          {/* Add more status items here */}
        </div>
      </div>
    );
  };
  
  export default PlantStatus;
  