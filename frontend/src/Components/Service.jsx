// src/pages/Service.jsx
import React from "react";

const Service = () => {
  const services = [
    {
      title: "Job Matching",
      desc: "We connect job seekers with the right employers through our intelligent matching system.",
      icon: "💼",
    },
    {
      title: "Skill Training",
      desc: "Gain access to learning resources and training programs to boost your career opportunities.",
      icon: "📘",
    },
    {
      title: "Community Support",
      desc: "Join a network of like-minded individuals and grow together with mentorship and guidance.",
      icon: "🤝",
    },
    {
      title: "Career Growth",
      desc: "We provide mentorship and tools to guide you along your career path and future opportunities.",
      icon: "🚀",
    },
    {
      title: "Resume Building",
      desc: "Craft a professional resume that highlights your skills and experience to employers.",
      icon: "📝",
    },
    {
      title: "Interview Preparation",
      desc: "Mock interviews and tips to boost your confidence and improve your success rate.",
      icon: "🎤",
    },
    {
      title: "Freelance Opportunities",
      desc: "Discover freelance jobs that suit your skills and work on projects worldwide.",
      icon: "🌍",
    },
    {
      title: "Networking Events",
      desc: "Participate in career fairs, workshops, and community events to grow your network.",
      icon: "🎯",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Intro */}
      <div className="md:w-1/2 bg-blue-600 text-white flex flex-col justify-center items-center p-12">
        <h1 className="text-5xl font-extrabold mb-6">Our Services</h1>
        <p className="text-lg max-w-lg text-center leading-relaxed">
          We are committed to empowering job seekers, students, and professionals
          by offering a variety of services that support career development,
          learning, and community building.
        </p>
      </div>

      {/* Right Side - Services */}
      <div className="md:w-1/2 bg-yellow-400 flex justify-center items-center p-8">
        <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-5xl">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-10">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 border-2 border-blue-500 rounded-xl bg-yellow-50 
                           hover:bg-yellow-100 hover:shadow-2xl transition duration-300"
              >
                <div className="text-5xl">{service.icon}</div>
                <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
