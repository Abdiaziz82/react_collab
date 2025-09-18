import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaGithub,
  FaHeart,
  FaChevronRight,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock
} from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-12 pb-6 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400 text-blue-900 w-10 h-10 rounded-lg flex items-center justify-center mr-3 font-bold text-xl">
                W
              </div>
              <div className="text-2xl font-bold">WebDev</div>
            </div>
            <p className="text-gray-200 mb-6 leading-relaxed">
              We are a leading web development company dedicated to creating stunning, functional websites and applications that help businesses thrive in the digital world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center transition-all hover:bg-yellow-400 hover:text-blue-900">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center transition-all hover:bg-yellow-400 hover:text-blue-900">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center transition-all hover:bg-yellow-400 hover:text-blue-900">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center transition-all hover:bg-yellow-400 hover:text-blue-900">
                <FaLinkedinIn />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center transition-all hover:bg-yellow-400 hover:text-blue-900">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-yellow-400 text-xl font-semibold mb-6 pb-2 border-b-2 border-yellow-400 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-200 hover:text-yellow-400 transition-all flex items-center">
                  <FaChevronRight className="text-yellow-400 text-xs mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-200 hover:text-yellow-400 transition-all flex items-center">
                  <FaChevronRight className="text-yellow-400 text-xs mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-200 hover:text-yellow-400 transition-all flex items-center">
                  <FaChevronRight className="text-yellow-400 text-xs mr-2" /> Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-200 hover:text-yellow-400 transition-all flex items-center">
                  <FaChevronRight className="text-yellow-400 text-xs mr-2" /> Products
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-200 hover:text-yellow-400 transition-all flex items-center">
                  <FaChevronRight className="text-yellow-400 text-xs mr-2" /> Features
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-yellow-400 transition-all flex items-center">
                  <FaChevronRight className="text-yellow-400 text-xs mr-2" /> Contact
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-200 hover:text-yellow-400 transition-all flex items-center">
                  <FaChevronRight className="text-yellow-400 text-xs mr-2" /> Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-gray-200 hover:text-yellow-400 transition-all flex items-center">
                  <FaChevronRight className="text-yellow-400 text-xs mr-2" /> Signup
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-8">
            <h3 className="text-yellow-400 text-xl font-semibold mb-6 pb-2 border-b-2 border-yellow-400 inline-block">Contact Info</h3>
            <div className="space-y-4">
              <p className="text-gray-200 flex items-center">
                <FaMapMarkerAlt className="text-yellow-400 mr-3 w-5" /> 123 Web Street, Digital City
              </p>
              <p className="text-gray-200 flex items-center">
                <FaPhone className="text-yellow-400 mr-3 w-5" /> +1 (555) 123-4567
              </p>
              <p className="text-gray-200 flex items-center">
                <FaEnvelope className="text-yellow-400 mr-3 w-5" /> info@webdev.com
              </p>
              <p className="text-gray-200 flex items-center">
                <FaClock className="text-yellow-400 mr-3 w-5" /> Mon-Fri: 9AM - 5PM
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:pl-8">
            <h3 className="text-yellow-400 text-xl font-semibold mb-6 pb-2 border-b-2 border-yellow-400 inline-block">Newsletter</h3>
            <p className="text-gray-200 mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest updates, offers, and web development tips.
            </p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button 
                type="submit" 
                className="bg-yellow-400 text-blue-900 font-semibold py-3 px-6 rounded transition-all hover:bg-yellow-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-12 pt-6 text-center text-blue-200">
          <p>&copy; 2023 WebDev. All Rights Reserved. | Designed with <FaHeart className="text-yellow-400 inline-block" /></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
