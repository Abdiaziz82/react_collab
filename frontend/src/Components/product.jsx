// src/pages/Products.jsx
import React from "react";

const products = [
  {
    id: 1,
    name: "Stethoscope",
    description: "High-quality digital stethoscope for accurate diagnostics.",
    price: "$120",
  },
  {
    id: 2,
    name: "Blood Pressure Monitor",
    description: "Automatic BP monitor with LCD display.",
    price: "$80",
  },
  {
    id: 3,
    name: "Thermometer",
    description: "Infrared thermometer for quick temperature checks.",
    price: "$40",
  },
  {
    id: 4,
    name: "Wheelchair",
    description: "Durable and foldable wheelchair with padded seating.",
    price: "$250",
  },
];

const Products = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
        <p className="text-lg text-gray-600">
          Explore our range of high-quality medical products designed to meet
          your healthcare needs.
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between"
          >
            {/* Content */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600 text-sm mt-2">{product.description}</p>
            </div>

            {/* Price + Button */}
            <div className="mt-6 flex items-center justify-between">
              <span className="text-lg font-bold text-blue-600">
                {product.price}
              </span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
