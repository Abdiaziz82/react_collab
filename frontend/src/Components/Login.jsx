import React, { useState } from "react";
import { useNavigate } from "react-router";

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
        credentials: "include", // ✅ include cookies
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Login failed");
      } else {
        setSuccess(data.message);
        localStorage.setItem("token", data.token); // ✅ store token
        console.log("User:", data.user);

        // ✅ Redirect to dashboard after successful login
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Welcome Back 👋
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}
        {success && (
          <p className="text-green-500 text-sm mb-3 text-center">{success}</p>
        )}

        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">
            Username or Email
          </label>
          <input
            type="text"
            name="usernameOrEmail"
            placeholder="Enter your username or email"
            value={formData.usernameOrEmail}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 text-sm mb-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Login
        </button>

        <p className="text-center text-gray-500 text-sm mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
