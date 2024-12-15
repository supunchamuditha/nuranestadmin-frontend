export default function PatientCard({ data }) {
    return (
      <div className="rounded-lg p-6 shadow-md gap-6 bg-white ">
        <div className="flex flex-col lg:flex-row lg:gap-10 w-full">
          {/* Left Section */}
          <div className="flex flex-col items-center lg:w-1/2">
            <div className="w-28 h-28 rounded-full bg-gray-300 mb-4"></div>
            <div className="w-full space-y-4">
              <p className="text-gray-500">Username</p>
              <div className="border border-gray-300 rounded-lg p-2 text-gray-600">
                {data.username}
              </div>
              <p className="text-gray-500">Email</p>
              <div className="border border-gray-300 rounded-lg p-2 text-gray-600">
                {data.email}
              </div>
              <p className="text-gray-500">Phone</p>
              <div className="border border-gray-300 rounded-lg p-2 text-gray-600">
                {data.phone}
              </div>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="lg:w-1/2 space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-500">First Name</p>
              <div className="border border-gray-300 rounded-lg p-2 w-2/3 text-gray-600">
                {data.firstname}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500">Last Name</p>
              <div className="border border-gray-300 rounded-lg p-2 w-2/3 text-gray-600">
                {data.lastname}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500">Gender</p>
              <div className="border border-gray-300 rounded-lg p-2 w-2/3 text-gray-600">
                {data.gender}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500">Birthday</p>
              <div className="border border-gray-300 rounded-lg p-2 w-2/3 text-gray-600">
                {data.birthday}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500">Address</p>
              <div className="border border-gray-300 rounded-lg p-2 w-2/3 text-gray-600">
                {data.address}
              </div>
            </div>
          </div>
        </div>
  
        {/* Buttons */}
        <div className="w-full flex justify-center gap-6 mt-6">
          <button className="w-1/2 p-2 rounded-lg bg-green-200 text-green-800 font-semibold">
            Save
          </button>
          <button className="w-1/2 p-2 rounded-lg bg-red-100 text-red-600 font-semibold">
            Discard
          </button>
        </div>
      </div>
    );
  }
  