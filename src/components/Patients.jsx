import { useState } from "react";

const Patients = ({ onSelect }) => {
  const patients = [
    {
      username: "john_doe",
      firstname: "John",
      lastname: "Doe",
      address: "123 Main St, Colombo",
      email: "john.doe@example.com",
      phone: "0711234567",
      birthday: "15/08/1990",
      gender: "Male",
    },
    {
      username: "jane_smith",
      firstname: "Jane",
      lastname: "Smith",
      address: "456 Elm St, Kandy",
      email: "jane.smith@example.com",
      phone: "0722345678",
      birthday: "25/03/1985",
      gender: "Female",
    },
    {
      username: "emma_lee",
      firstname: "Emma",
      lastname: "Lee",
      address: "78 Maple Ave, Nugegoda",
      email: "emma.lee@example.com",
      phone: "0709876543",
      birthday: "12/06/1992",
      gender: "Female",
    },
    {
      username: "liam_brown",
      firstname: "Liam",
      lastname: "Brown",
      address: "56 Park Rd, Galle",
      email: "liam.brown@example.com",
      phone: "0765432109",
      birthday: "10/11/1987",
      gender: "Male",
    },
    {
      username: "liam_brown",
      firstname: "Liam",
      lastname: "Brown",
      address: "56 Park Rd, Galle",
      email: "liam.brown@example.com",
      phone: "0765432109",
      birthday: "10/11/1987",
      gender: "Male",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(4);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter patients based on the search query
  const filteredPatients = patients.filter((patient) =>
    [
      `${patient.firstname} ${patient.lastname}`.toLowerCase(),
      patient.email.toLowerCase(),
      patient.address.toLowerCase(),
    ].some((field) => field.includes(searchQuery.toLowerCase()))
  );

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

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
              <h4 className="font-medium">{`${patient.firstname} ${patient.lastname}`}</h4>
              <p className="text-sm text-gray-500">{patient.email}</p>
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
