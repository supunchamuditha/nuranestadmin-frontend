import { useState, useEffect } from "react";
import axios from "axios";

const Patients = ({ onSelect }) => {
  const [patients, setPatients] = useState([]); // State to store patients data
  const [visibleCount, setVisibleCount] = useState(4);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state

  // Fetch patients from the backend when the component mounts
  useEffect(() => {
    const fetchPatients = async () => {
      const token = localStorage.getItem("token"); // Get the token from localStorage

      if (!token) {
        setError("Please log in first");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("http://localhost:8000/users/role/patient", {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to the Authorization header
          },
        });
        console.log("API Response:", response.data); // Debug the response structure
        setPatients(response.data?.users || []); // Correctly access 'users' instead of 'patients'
        setLoading(false);
      } catch (err) {
        console.error("Error fetching patients:", err);
        setError("Failed to load patients");
        setLoading(false); // Stop loading on error
      }
    };

    fetchPatients();
  }, []);

  // Filter patients based on the search query
  const filteredPatients = Array.isArray(patients)
    ? patients.filter((patient) =>
        [
          `${patient.firstName || ""} ${patient.lastName || ""}`.toLowerCase(),
          (patient.email || "").toLowerCase(),
          (patient.address || "").toLowerCase(),
        ].some((field) => field.includes(searchQuery.toLowerCase()))
      )
    : [];

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  // Display loading or error message
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-medium mb-4">Patients</h3>

      {/* Search Bar */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by name, email, or address"
        className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
      />

      {/* Patients List */}
      <div className="grid grid-cols-2 gap-4">
        {filteredPatients.slice(0, visibleCount).map((patient, index) => (
          <div
            key={index}
            onClick={() => onSelect(patient)}
            className="flex gap-2 items-center p-2 border border-gray-200 rounded-lg cursor-pointer hover:shadow-md transition"
          >
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div>
              <h4 className="font-medium">{`${patient.firstName || ""} ${patient.lastName || ""}`}</h4>
              <p className="text-sm text-gray-500">{patient.email || "No email available"}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredPatients.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMore}
            className="px-4 py-2 text-gray rounded-lg hover:bg-blue-100 transition"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Patients;
