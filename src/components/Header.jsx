import { useState } from "react";
import { Link } from "react-router-dom";
import Notifications from "./Notifications";

const Header = () => {
  const [isNotificationsVisible, setIsNotificationsVisible] = useState(false);

  const toggleNotifications = () => {
    setIsNotificationsVisible((prev) => !prev);
  };

  return (
    <div className="flex justify-between p-4 bg-white shadow-md relative">
      <Link to="/home">
      <h1 className="text-2xl font-semibold">NuraNest</h1>
      </Link>
      <div className="flex items-center gap-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 border rounded-md focus:outline-none"
        />
        {/* Log Out Button */}
        <Link to="/appointments">
          <button className="p-2 rounded-md hover:bg-gray-100">Appointments</button>
        </Link>

        {/* Log Out Button */}
        <Link to="/">
          <button className="p-2 rounded-md hover:bg-gray-100">Log Out</button>
        </Link>

        {/* Notifications Button */}
        <button
          className="p-2 rounded-md hover:bg-gray-200"
          onClick={toggleNotifications}
        >
          🔔
        </button>

        {/* Notifications Popup */}
        {isNotificationsVisible && (
          <div className="absolute top-16 right-4 w-80 bg-white rounded-lg shadow-md z-50">
            <Notifications />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
