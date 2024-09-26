import { MdPower, MdOutlinePowerOff } from 'react-icons/md'; // Import power plant logos from react-icons

const PlantStatus = () => {
    const isPlantOnline = true; // Set the plant status (change this to true for "Online")

    return (
        <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Plant Status</h3>
            <div className="flex items-center justify-center space-x-4">
                {/* Conditionally render different icons based on online/offline status */}
                {isPlantOnline ? (
                    <MdPower size={30} className="text-green-600" /> // Online icon (green)
                ) : (
                    <MdOutlinePowerOff size={30} className="text-red-600" /> // Offline icon (red)
                )}
                <p className="text-xl font-bold">
                    Your Plant is {isPlantOnline ? "Online" : "Offline"}
                </p>
            </div>
        </div>
    );
};

export default PlantStatus;
