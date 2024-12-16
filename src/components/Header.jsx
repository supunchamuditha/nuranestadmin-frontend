import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Notifications from "./Notifications";
import Modal from "react-modal";
import "./header.css";

Modal.setAppElement("#root"); // For accessibility, set the root element

const Header = () => {
  const [isNotificationsVisible, setIsNotificationsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNotifications = () => {
    setIsNotificationsVisible((prev) => !prev);
  };

  const handleLogout = () => {
    setIsModalOpen(false);
    // Perform logout actions (e.g., clearing tokens, user session, etc.)
    navigate("/");
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

        {/* Appointments Button */}
        <Link to="/appointments">
          <button className="p-2 rounded-md hover:bg-gray-100">Appointments</button>
        </Link>

        {/* Log Out Button */}
        <button
          className="p-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsModalOpen(true)}
        >
          Log Out
        </button>

        {/* Log Out Confirmation Modal */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="Confirm Logout"
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <h2 className="text-lg font-semibold">Are you sure you want to log out?</h2>
          <div className="flex justify-end space-x-4 mt-4">
            <button
              className="bg-gray-300 p-2 rounded-md hover:bg-gray-400"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
              onClick={handleLogout}
            >
              Yes, Log Out
            </button>
          </div>
        </Modal>

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
