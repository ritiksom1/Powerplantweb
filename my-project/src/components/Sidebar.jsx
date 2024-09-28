import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaHeartbeat, FaLeaf } from 'react-icons/fa'; // Importing existing icons
import { MdDevices } from 'react-icons/md'; // Importing the new icon

const Sidebar = () => {
  return (
    <div className="bg-yellow-400 w-1/6 h-full shadow-xl text-black p-4 flex flex-col justify-start">
      <ul className="space-y-3"> {/* Adding vertical spacing between list items */}
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
                ? "text-black font-semibold text-xl bg-yellow-300 rounded-lg px-3 py-2 flex items-center gap-2 transition-all duration-200" // Active state styling
                : "text-xl hover:text-black hover:bg-yellow-500 px-3 py-2 rounded-lg flex items-center gap-2 transition-all duration-200"}
          >
            <FaTachometerAlt className="text-2xl" /> {/* Icon for Dashboard */}
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/monitor" 
            className={({ isActive }) => 
              isActive 
                ? "text-black font-semibold text-xl bg-yellow-300 rounded-lg px-3 py-2 flex items-center gap-2 transition-all duration-200"
                : "text-xl hover:text-black hover:bg-yellow-500 px-3 py-2 rounded-lg flex items-center gap-2 transition-all duration-200"}
          >
            <FaHeartbeat className="text-2xl" /> {/* Icon for Monitor */}
            Monitor
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/plants" 
            className={({ isActive }) => 
              isActive 
                ? "text-black font-semibold text-xl bg-yellow-300 rounded-lg px-3 py-2 flex items-center gap-2 transition-all duration-200"
                : "text-xl hover:text-black hover:bg-yellow-500 px-3 py-2 rounded-lg flex items-center gap-2 transition-all duration-200"}
          >
            <FaLeaf className="text-2xl" /> {/* Icon for Plants */}
            Plants
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/devices" 
            className={({ isActive }) => 
              isActive 
                ? "text-black font-semibold text-xl bg-yellow-300 rounded-lg px-3 py-2 flex items-center gap-2 transition-all duration-200"
                : "text-xl hover:text-black hover:bg-yellow-500 px-3 py-2 rounded-lg flex items-center gap-2 transition-all duration-200"}
          >
            <MdDevices className="text-2xl" /> {/* Icon for Devices */}
            Meter
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
