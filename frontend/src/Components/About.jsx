import React from 'react';
import { useState, useEffect } from 'react';

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Co-Founder & CEO",
    bio: "Former product lead at TechCorp with 10+ years in collaboration software.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Co-Founder & CTO",
    bio: "Software architect specializing in real-time collaboration systems.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Lead Developer",
    bio: "Full-stack developer with expertise in React and Node.js applications.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 4,
    name: "Jessica Martinez",
    role: "UX/UI Designer",
    bio: "Creates intuitive user experiences focused on team productivity.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
  }
];

// Feature data
const features = [
  {
    title: "Real-time Collaboration",
    description: "Work together simultaneously with live editing, comments, and task management.",
    icon: "🔄"
  },
  {
    title: "File Sharing",
    description: "Share documents, images, and other files with controlled access permissions.",
    icon: "📁"
  },
  {
    title: "Team Communication",
    description: "Integrated chat, video calls, and discussion threads keep everyone connected.",
    icon: "💬"
  },
  {
    title: "Project Management",
    description: "Organize tasks, set deadlines, and track progress with visual tools.",
    icon: "📊"
  }
];

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation trigger
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className={`max-w-7xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About <span className="text-blue-600">CollabSpace</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600">
            We're building the future of teamwork and collaboration
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At CollabSpace, we believe that great things happen when people work together. 
                Our mission is to break down barriers to collaboration and enable teams to do their best work, 
                no matter where they are located.
              </p>
              <p className="text-lg text-gray-600">
                Founded in 2020, our platform has helped thousands of teams across the globe 
                communicate better, streamline workflows, and achieve remarkable results.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Teams Love CollabSpace</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Team</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map(member => (
              <div key={member.id} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full object-cover w-full h-full shadow-md"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-blue-600 rounded-2xl shadow-xl p-8 text-white mb-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">50K+</p>
              <p className="text-lg">Active Teams</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">120+</p>
              <p className="text-lg">Countries</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">99.9%</p>
              <p className="text-lg">Uptime</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to collaborate better?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of teams that are using CollabSpace to transform how they work together.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;