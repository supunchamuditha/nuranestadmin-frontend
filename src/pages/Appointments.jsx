import { useState, useEffect } from "react";
import Header from "../components/Header";

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Change as needed
  const [sortOrder, setSortOrder] = useState("asc");

  // Fetch appointments from API or mock data
  useEffect(() => {
    // Mock fetching data
    const fetchedAppointments = [
      { id: 1, user: "John Doe", psychologist: "Dr. Amelia Watson", location: "St. Mary's Medical Center", number: "0711234567", date: "2024-12-18", time: "10:00 AM", type: "In-Person" },
      { id: 2, user: "Jane Smith", psychologist: "Dr. Michael Brown", location: "General Hospital Colombo", number: "0722345678", date: "2024-12-19", time: "11:30 AM", type: "Virtual" },
      // Add more mock appointments
    ];
    setAppointments(fetchedAppointments);
  }, []);

  // Handle Search
  const filteredAppointments = appointments.filter((appointment) =>
    appointment.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
    appointment.psychologist.toLowerCase().includes(searchQuery.toLowerCase()) ||
    appointment.date.includes(searchQuery) ||
    appointment.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAppointments.slice(indexOfFirstItem, indexOfLastItem);

  // Sort appointments
  const sortedAppointments = currentItems.sort((a, b) => {
    if (sortOrder === "asc") {
      return new Date(a.date) - new Date(b.date); // You can sort by other fields like time or type
    } else {
      return new Date(b.date) - new Date(a.date);
    }
  });

  return (
    <>
    <Header/>

    <div className="p-8 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-medium mb-4">Appointments</h3>

      <div className="mb-4 flex justify-between">
        <input
          type="text"
          placeholder="Search appointments..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border rounded-md w-1/3"
        />
        <div className="flex space-x-4">
          <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")} className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Sort by Date {sortOrder === "asc" ? "↑" : "↓"}
          </button>
        </div>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">User</th>
            <th className="border border-gray-300 px-4 py-2">Psychologist</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Number</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Time</th>
            <th className="border border-gray-300 px-4 py-2">Type</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedAppointments.map((appointment) => (
            <tr key={appointment.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 text-center">{appointment.id}</td>
              <td className="border border-gray-300 px-4 py-2">{appointment.user}</td>
              <td className="border border-gray-300 px-4 py-2">{appointment.psychologist}</td>
              <td className="border border-gray-300 px-4 py-2">{appointment.location}</td>
              <td className="border border-gray-300 px-4 py-2">{appointment.number}</td>
              <td className="border border-gray-300 px-4 py-2">{appointment.date}</td>
              <td className="border border-gray-300 px-4 py-2">{appointment.time}</td>
              <td className="border border-gray-300 px-4 py-2">{appointment.type}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-md mr-2">Edit</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-md">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-400 text-white rounded-md"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastItem >= filteredAppointments.length}
          className="px-4 py-2 bg-gray-400 text-white rounded-md"
        >
          Next
        </button>
      </div>
    </div>
    </>
  );
}

export default Appointments;
