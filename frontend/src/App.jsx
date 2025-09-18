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
import Testimonial from "./Components/Testimonial";

import Contact from "./Components/Contact";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import ProtectedRoute from "./Components/ProtectedRoute";



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

          <Route path="/testmonials" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/testmonials" element={<Testimonial />}  />
          
          {/* Dashboard and nested routes */}
<Route
    path="/dashboard/*"
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }
  >
    <Route path="home" element={<Home />} />
    <Route path="profile" element={<Profile />} />
    <Route path="settings" element={<Settings />} />
  </Route>

        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;