import { useState } from "react";
import axios from "axios";
import illustration from "../assets/login.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For error handling
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle login
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Log the input values to ensure they are correctly captured
    console.log("Login attempt:", { email, password });

    try {
      const response = await axios.post("http://localhost:8000/auth/login", {
        email,
        password,
      });

      // Log the response from the API
      console.log("API response:", response);

      // Assuming the response contains a token or a success message
      if (response.data.token) {
        console.log("Login successful, token received.");
        localStorage.setItem("token", response.data.token); // Save token in localStorage or handle accordingly
        navigate("/home"); // Redirect to home page after successful login
      } else {
        console.log("Token not found in the response.");
        setError("Invalid email or password");
      }
    } catch (err) {
      // Log the error to see what went wrong
      console.error("Login API call failed:", err);

      // Check if there's a response from the server
      if (err.response) {
        console.log("Error response from server:", err.response);
        setError(err.response.data.message || "Invalid email or password"); // Show specific error from API
      } else if (err.request) {
        // If no response is received
        console.log("No response from the server:", err.request);
        setError("No response from server, please try again later.");
      } else {
        // Other types of errors
        console.log("Error setting up the request:", err.message);
        setError("An error occurred. Please try again.");
      }
    }
  };

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

          {/* Error Message */}
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          {/* Input Fields */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          <button
            onClick={handleLogin}
            className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Log In
          </button>
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
