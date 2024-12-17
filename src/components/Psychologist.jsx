import { useState, useEffect } from "react";
import axios from "axios";

const Psychologists = ({ onSelect }) => {
  const [psychologists, setPsychologists] = useState([]); // State to store fetched psychologists
  const [visibleCount, setVisibleCount] = useState(4);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch psychologists from the backend when the component mounts
  useEffect(() => {
    const fetchPsychologists = async () => {
      const token = localStorage.getItem("token"); // Get the token from localStorage

      if (!token) {
        setError("Please log in first");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("http://localhost:8000/users/role/doctor", {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to the Authorization header
          },
        });
        console.log("API Response:", response.data);
        setPsychologists(response.data?.users || []); // Correctly access 'users'
        setLoading(false);
      } catch (err) {
        console.error("Error fetching psychologists:", err);
        setError("Failed to load psychologists");
        setLoading(false);
      }
    };

    fetchPsychologists();
  }, []);

  // Filter psychologists based on the search query
  const filteredPsychologists = Array.isArray(psychologists)
    ? psychologists.filter((psychologist) =>
        [
          `${psychologist.firstName || ""} ${psychologist.lastName || ""}`.toLowerCase(),
          (psychologist.email || "").toLowerCase(),
          (psychologist.specialization || "").toLowerCase(),
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
      <h3 className="text-2xl font-medium mb-4">Psychologists</h3>

      {/* Search Bar */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by name, email, or specialization"
        className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
      />

      {/* Psychologists List */}
      <div className="grid grid-cols-2 gap-4">
        {filteredPsychologists.slice(0, visibleCount).map((psychologist, index) => (
          <div
            key={index}
            onClick={() => onSelect(psychologist)}
            className="flex gap-2 items-center p-2 border border-gray-200 rounded-lg cursor-pointer hover:shadow-md transition"
          >
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div>
              <h4 className="font-medium">{`${psychologist.firstName || ""} ${psychologist.lastName || ""}`}</h4>
              <p className="text-sm text-gray-500">{psychologist.email || "No email available"}</p>
              <p className="text-xs text-gray-400">{psychologist.specialization || "No specialization"}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredPsychologists.length && (
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

export default Psychologists;
