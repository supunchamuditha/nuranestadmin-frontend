import { useState } from "react";

const Notifications = () => {
  const notifications = [
    { title: "Notification 1", time: "10:00 AM", details: "Details about Notification 1." },
    { title: "Notification 2", time: "11:00 AM", details: "Details about Notification 2." },
  ];

  const [selectedNotification, setSelectedNotification] = useState(null);

  const openNotification = (notification) => {
    setSelectedNotification(notification);
  };

  const closeNotification = () => {
    setSelectedNotification(null);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="font-semibold mb-4">Activities & Notifications</h3>
      {notifications.map((note, index) => (
        <div
          key={index}
          className="border-b p-2 last:border-b-0 cursor-pointer hover:bg-gray-100"
          onClick={() => openNotification(note)}
        >
          <h4 className="text-md font-medium">{note.title}</h4>
          <p className="text-sm text-gray-500">{note.time}</p>
        </div>
      ))}

      {/* Notification Details Modal */}
      {selectedNotification && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
            <button
              onClick={closeNotification}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              ✖
            </button>
            <h4 className="text-lg font-semibold mb-4">{selectedNotification.title}</h4>
            <p className="text-sm text-gray-500">{selectedNotification.time}</p>
            <p className="mt-2">{selectedNotification.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
