// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-bg.mp4" 
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Welcome to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-yellow-400">
            Our Website
          </span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Building beautiful and modern web experiences with React, Vite, and Tailwind CSS.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 rounded-2xl bg-white text-indigo-700 font-semibold shadow-lg hover:bg-indigo-100 transition-all duration-300">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-2xl border border-white text-white font-semibold hover:bg-white/10 transition-all duration-300">
            Learn More
          </button>
        </div>
      </motion.div>

      {/* Floating Background Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        animate={{ y: [0, 20, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </section>
  );
}
