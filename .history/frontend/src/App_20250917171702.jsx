import React from 'react';

import Signup from './Components/Signup';
import Features from './Components/Features.jsx';
import Service from './Components/Service';
import Hero from './Components/hero';
import Footer from './Components/Footer';
import AboutPage from './Components/About';
import Navbar from './Components/Navbar.jsx';

function App() {
  return (
    <>
      <Navbar />
      <AboutPage />
      <Signup />
      <Features />
      <Service />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
