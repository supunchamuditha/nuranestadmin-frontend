import { Link } from "react-router-dom";
import illustration from "../assets/login.png"; // Replace with the correct path

const LoginPage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Section */}
      <div className="flex-1 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          {/* Admin Avatar */}
          <div className="flex justify-center mb-6">
            <img
              src={illustration}
              alt="Admin Avatar"
              className="w-20 h-20 rounded-full"
            />
          </div>
          {/* Heading */}
          <h2 className="text-2xl font-semibold text-center mb-2">
            Welcome Admin!
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Log into your NuraNest Admin account
          </p>

          {/* Input Fields */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="text-right text-sm">
              <a href="#" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          {/* Buttons */}
          <Link to="/home">
          <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600" >
            Log In
          </button>
          </Link>
          <p className="text-center my-4 text-gray-500">Or connect with,</p>
          <div className="flex flex-col gap-4">
            <button className="w-full bg-blue-100 text-gray-800 py-2 rounded-md hover:bg-green-400">
              Google
            </button>
            <button className="w-full bg-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-400">
              Apple ID
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 hidden lg:flex items-center justify-center bg-blue-100">
        <img
          src={illustration}
          alt="Admin Panel Illustration"
          className="w-2/3"
        />
      </div>
    </div>
  );
};

export default LoginPage;
