import { useState } from "react";

const Psychologists = ({ onSelect }) => {
  const psychologists = [
    {
      name: "Dr. Amelia Watson",
      email: "amelia.watson@example.com",
      phone: "0711234567",
      gender: "Female",
      birthday: "05/12/1985",
      hospital: "St. Mary's Medical Center",
      qualifications: "Ph.D. in Cognitive Behavioral Therapy",
      specialization: "Child and Adolescent Psychology",
      address: "45, Oak Street, Colombo 3",
    },
    {
      name: "Dr. Michael Brown",
      email: "michael.brown@example.com",
      phone: "0722345678",
      gender: "Male",
      birthday: "14/03/1980",
      hospital: "General Hospital Colombo",
      qualifications: "M.Sc. in Clinical Psychology",
      specialization: "Trauma and PTSD Therapy",
      address: "12, Main Avenue, Colombo 7",
    },
    {
      name: "Dr. Sophia Lee",
      email: "sophia.lee@example.com",
      phone: "0709876543",
      gender: "Female",
      birthday: "22/06/1992",
      hospital: "Lanka Mental Health Institute",
      qualifications: "B.A. in Psychology, M.A. in Clinical Psychology",
      specialization: "Cognitive Behavioral Therapy",
      address: "88, Hilltop Lane, Nugegoda",
    },
    {
      name: "Dr. Liam Johnson",
      email: "liam.johnson@example.com",
      phone: "0765432109",
      gender: "Male",
      birthday: "10/11/1987",
      hospital: "Asiri Central Hospital",
      qualifications: "Ph.D. in Neuropsychology",
      specialization: "Brain Injury Rehabilitation",
      address: "56, Park Road, Kandy",
    },
    {
      name: "Dr. Emma Thomas",
      email: "emma.thomas@example.com",
      phone: "0773456789",
      gender: "Female",
      birthday: "18/09/1990",
      hospital: "National Hospital Colombo",
      qualifications: "M.Sc. in Behavioral Psychology",
      specialization: "Addiction Counseling",
      address: "99, River View Street, Dehiwala",
    },
    {
      name: "Dr. Andrew Smith",
      email: "andrew.smith@example.com",
      phone: "0715558888",
      gender: "Male",
      birthday: "25/01/1982",
      hospital: "New Hope Clinic",
      qualifications: "Psy.D. in Counseling Psychology",
      specialization: "Family Therapy",
      address: "77, Sunset Road, Colombo 2",
    },
    {
      name: "Dr. Lisa Ray",
      email: "lisa.ray@example.com",
      phone: "0753214321",
      gender: "Female",
      birthday: "03/04/1988",
      hospital: "Wellness Mental Health Center",
      qualifications: "M.Sc. in Clinical Neuropsychology",
      specialization: "Neurodevelopmental Disorders",
      address: "10, Garden Avenue, Colombo 4",
    },
    {
      name: "Dr. Peter White",
      email: "peter.white@example.com",
      phone: "0727779999",
      gender: "Male",
      birthday: "11/02/1979",
      hospital: "Global Health Hospital",
      qualifications: "Ph.D. in Behavioral Therapy",
      specialization: "Addiction Rehabilitation",
      address: "101, Maple Lane, Colombo 6",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="p-8  bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-medium mb-8">Psychologists</h3>
      <div className="grid grid-cols-2 gap-4">
        {psychologists.slice(0, visibleCount).map((doc, index) => (
          <div
            key={index}
            onClick={() => onSelect(doc)}
            className="flex gap-2 items-center p-2 border border-gray-200 rounded-lg cursor-pointer hover:shadow-md transition"
          >
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div>
              <h4 className="font-medium">{doc.name}</h4>
              <p className="text-sm text-gray-500">{doc.email}</p>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < psychologists.length && (
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

