// src/Components/Products.jsx
import React from "react";

const products = [
  {
    id: 1,
    name: "Real-Time Chat",
    description: "Instant messaging to keep your team connected and aligned.",
    benefit: "Stay in sync",
    image: "/images/collaboration/chat.jpg",
  },
  {
    id: 2,
    name: "Task Management",
    description: "Assign, track, and manage tasks easily within the team.",
    benefit: "Boost productivity",
    image: "/images/collaboration/tasks.jpg",
  },
  {
    id: 3,
    name: "File Sharing",
    description: "Share and organize files securely in one central place.",
    benefit: "Work smarter",
    image: "/images/collaboration/files.jpg",
  },
  {
    id: 4,
    name: "Video Meetings",
    description: "Collaborate face-to-face with integrated video calls.",
    benefit: "Improve teamwork",
    image: "/images/collaboration/video.jpg",
  },
];

const Products = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Team Collaboration Tools
        </h1>
        <p className="text-lg text-gray-600">
          Explore powerful features that help your team communicate, stay
          organized, and achieve goals together.
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-2xl"
            />

            {/* Product Content */}
            <div className="flex flex-col justify-between flex-1 p-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  {product.description}
                </p>
              </div>

              {/* Benefit & Button */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-bold text-blue-600">
                  {product.benefit}
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
