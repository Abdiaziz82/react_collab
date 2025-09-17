import React from "react";
import { Routes, Route } from "react-router";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AboutPage from "./Components/About";
import LoginPage from "./Components/Login";
import Service from "./Components/Service";
import Products from "./Components/Product";
import Signup from "./Components/Signup";
import Features from "./Components/Features";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Service />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
