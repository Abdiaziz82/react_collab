// src/App.jsx
import React from "react";

// Components
import Navbar from "./Components/Navbar.jsx";
// import Hero from "./Components/Hero.jsx";
// import Features from "./Components/Features.jsx";
import Signup from "./Components/Signup.jsx";
import Service from "./Components/Service.jsx";
import AboutPage from "./Components/About.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
      {/* Navbar at the top */}
      <Navbar />

      {/* Hero Section
      <Hero /> */}

      {/* Features Section
      <Features /> */}

      {/* Signup Section */}
      <Signup />

      {/* Services Section */}
      <Service />

      {/* About Section */}
      <AboutPage />

      {/* Footer at the bottom */}
      <Footer />
    </>
  );
}

export default App;
