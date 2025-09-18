import React from "react";
import { FaBell, FaUserCircle, FaSignOutAlt } from "react-icons/fa";

const Topbar = ({ onLogout }) => (
  <header className="bg-white shadow-md w-full h-16 flex items-center justify-between px-6 fixed top-0 left-0 z-20">
    {/* Left: Dashboard title */}
    <h1 className="text-xl font-semibold text-indigo-700">Dashboard</h1>

    {/* Right: Icons */}
    <div className="flex items-center gap-6 text-gray-600">
      <button className="hover:text-indigo-600">
        <FaBell size={18} />
      </button>
      <button className="hover:text-indigo-600">
        <FaUserCircle size={22} />
      </button>
      <button
        onClick={onLogout}
        className="flex items-center gap-2 text-red-500 hover:text-red-600 font-medium"
      >
        <FaSignOutAlt size={18} />
        <span className="hidden sm:inline">Logout</span>
      </button>
    </div>
  </header>
);

export default Topbar;
