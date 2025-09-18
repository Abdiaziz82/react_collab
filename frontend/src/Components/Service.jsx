// src/pages/Service.jsx
import React from "react";

const Service = () => {
  const services = [
    {
      title: "Team Formation",
      desc: "Bring together developers, designers, and project managers into well-balanced teams.",
      icon: "👥",
    },
    {
      title: "Collaboration Tools",
      desc: "Work seamlessly with integrated tools for code sharing, version control, and real-time communication.",
      icon: "🛠️",
    },
    {
      title: "Project Management",
      desc: "Track tasks, milestones, and progress with built-in agile workflows and dashboards.",
      icon: "📊",
    },
    {
      title: "Skill Matching",
      desc: "Match members by expertise—frontend, backend, or design—to maximize productivity.",
      icon: "🎯",
    },
    {
      title: "Mentorship & Support",
      desc: "Connect with senior developers for guidance, best practices, and career growth.",
      icon: "🤝",
    },
    {
      title: "Hackathon & Challenges",
      desc: "Participate in coding events to learn, compete, and showcase your team’s capabilities.",
      icon: "🚀",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          We help developers collaborate, build stronger teams, and deliver
          real-world full-stack projects with the right tools and guidance.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-8 text-center"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
