import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FaUserAlt, FaLock } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Login failed");
      } else {
        setSuccess("Login successful! Redirecting...");
        localStorage.setItem("token", data.token);
        console.log("User:", data.user);

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Left Panel: Branding & Visuals */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-indigo-600 text-white p-12">
          <h1 className="text-4xl font-bold mb-4">Enterprise Portal</h1>
          <p className="text-center text-indigo-200">
            Streamlining your workflow with cutting-edge technology and flawless design.
          </p>
        </div>

        {/* Right Panel: Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold mb-2 text-gray-800">
              Welcome Back
            </h2>
            <p className="text-gray-500 mb-8">
              Sign in to continue to your dashboard.
            </p>

            {error && (
              <p className="bg-red-50 text-red-600 text-sm font-medium p-3 rounded-lg mb-4 text-center">{error}</p>
            )}
            {success && (
              <p className="bg-green-50 text-green-600 text-sm font-medium p-3 rounded-lg mb-4 text-center">{success}</p>
            )}

            <div className="mb-5 relative">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Username or Email
              </label>
              <FaUserAlt className="absolute left-3 top-11 text-gray-400" />
              <input
                type="text"
                name="usernameOrEmail"
                placeholder="e.g., admin or admin@example.com"
                value={formData.usernameOrEmail}
                onChange={handleChange}
                className="w-full border-gray-300 border rounded-lg px-10 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                required
              />
            </div>

            <div className="mb-6 relative">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <FaLock className="absolute left-3 top-11 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border-gray-300 border rounded-lg px-10 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
            >
              Sign In
            </button>

            <p className="text-center text-gray-500 text-sm mt-6">
              Don’t have an account?{" "}
              <a href="/signup" className="text-indigo-600 font-medium hover:underline">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;