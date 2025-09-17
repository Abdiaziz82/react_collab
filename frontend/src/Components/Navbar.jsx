import React from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="ml-3 text-2xl font-bold text-gray-800">
            BrandName
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <NavLink
            to="/hero"
            className={({ isActive }) =>
              `font-medium transition px-3 py-2 ${
                isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`
            }
          >
            Hero
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-medium transition px-3 py-2 ${
                isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `font-medium transition px-3 py-2 ${
                isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `font-medium transition px-3 py-2 ${
                isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `font-medium transition px-3 py-2 ${
                isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`
            }
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `font-medium px-5 py-2 rounded-full shadow transition ${
                isActive
                  ? "bg-blue-700 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`
            }
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
