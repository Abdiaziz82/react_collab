import React from "react";
import { FaHome, FaUser, FaCog, FaChartBar, FaBell, FaSignOutAlt } from "react-icons/fa";

const navItems = [
  { key: "home", label: "Home", icon: <FaHome /> },
  { key: "profile", label: "Profile", icon: <FaUser /> },
  { key: "analytics", label: "Analytics", icon: <FaChartBar /> },
  { key: "notifications", label: "Notifications", icon: <FaBell /> },
];

const settingsItems = [
  { key: "settings", label: "Settings", icon: <FaCog /> },
];

const Sidebar = ({ setPage, activePage }) => (
  <aside className="w-64 min-h-screen bg-white border-r border-gray-200 shadow-lg">
    <div className="p-6">
      <h1 className="text-2xl font-bold text-indigo-600">Dashboard</h1>
    </div>
    <nav className="flex flex-col justify-between h-[calc(100vh-100px)] p-4">
      <div>
        <ul className="space-y-2">
          {navItems.map(item => (
            <li
              key={item.key}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300
                ${activePage === item.key
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"}
              `}
              onClick={() => setPage(item.key)}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </li>
          ))}
        </ul>
        <hr className="my-6 border-gray-200" />
        <ul className="space-y-2">
          {settingsItems.map(item => (
            <li
              key={item.key}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300
                ${activePage === item.key
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"}
              `}
              onClick={() => setPage(item.key)}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <ul>
        <li
          className="flex items-center gap-4 px-4 py-3 rounded-lg cursor-pointer text-red-500 hover:bg-red-50 hover:text-red-600 transition-all duration-300"
          onClick={() => setPage("logout")}
        >
          <span className="text-xl"><FaSignOutAlt /></span>
          <span className="font-medium">Logout</span>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;