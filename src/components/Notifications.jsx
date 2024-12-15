const Notifications = () => {
    const notifications = [
      { title: "Notification 1", time: "10:00 AM" },
      { title: "Notification 2", time: "11:00 AM" },
    ];
  
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="font-semibold mb-4">Activities & Notifications</h3>
        {notifications.map((note, index) => (
          <div key={index} className="border-b p-2 last:border-b-0">
            <h4 className="text-md font-medium">{note.title}</h4>
            <p className="text-sm text-gray-500">{note.time}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Notifications;
  