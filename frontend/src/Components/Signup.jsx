import React, { useState } from "react";
import { useNavigate } from "react-router"; // ✅ import

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate(); // ✅ initialize navigate

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.username || !form.email || !form.password || !form.confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.username,
          email: form.email,
          password: form.password,
          confirmPassword: form.confirmPassword,
        }),
      });

      const data = await res.json();
      if (data.error) {
        setError(data.error);
        setSuccess(false);
      } else {
        setSuccess(true);
        setForm({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });

        // ✅ redirect to login after short delay
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch {
      setError("Server error. Please try again.");
      setSuccess(false);
    }
  };

  return (
    <div className="flex h-[700px] w-full">
      <div className="w-full hidden md:inline-block">
        <img
          className="h-full"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png"
          alt="leftSideImage"
        />
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <form
          className="md:w-96 w-80 flex flex-col items-center justify-center"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl text-gray-900 font-medium">Sign Up</h2>
          <p className="text-sm text-gray-500/90 mt-3">
            Create your account to get started
          </p>

          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          {success && (
            <div className="text-green-500 text-sm mt-2">
              Signup successful! Redirecting to login...
            </div>
          )}

          <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2 mt-6">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2 mt-6">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2 mt-6">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2 mt-6">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
          >
            Sign Up
          </button>
          <p className="text-gray-500/90 text-sm mt-4">
            Already have an account?{" "}
            <a
              className="text-indigo-400 hover:underline"
              onClick={() => navigate("/login")} // ✅ navigate when clicked
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
