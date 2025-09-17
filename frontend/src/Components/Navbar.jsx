import React from 'react';

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
          <span className="ml-3 text-2xl font-bold text-gray-800">BrandName</span>
        </div>
        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <a href="#hero" className="text-gray-700 hover:text-blue-600 font-medium transition px-3 py-2">Hero</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition px-3 py-2">About</a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition px-3 py-2">Services</a>
          <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium transition px-3 py-2">Products</a>
          <a href="#login" className="text-gray-700 hover:text-blue-600 font-medium transition px-3 py-2">Login</a>
          <a
            href="#signup"
            className="bg-blue-600 text-white font-medium px-5 py-2 rounded-full shadow hover:bg-blue-700 transition"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
