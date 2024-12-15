import { Link } from "react-router-dom";

const AppointmentsCard = () => {
  
    return (
      <div className="p-6 bg-white rounded-lg shadow-md flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Appointments</h2>
          <p className="text-sm text-gray-600">
            See the appointments details through another page
          </p>
        </div>
        <Link to="/appointments">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
          View All
        </button>
        </Link>
        
      </div>
    );
  };
  
  export default AppointmentsCard;
  