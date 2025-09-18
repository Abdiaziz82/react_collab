import React, { useState } from "react";

const companyInfo = {
  phone: "+1 (555) 123-4567",
  email: "contact@yourcompany.com",
  address: "1234 Main St, Suite 100, San Francisco, CA 94105, USA",
  linkedin: "https://linkedin.com/company/yourcompany",
  twitter: "https://twitter.com/yourcompany",
  facebook: "https://facebook.com/yourcompany",
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="bg-gradient-to-br from-indigo-100 via-white to-blue-50 py-16 px-4 md:px-0">
      <div className="max-w-5xl mx-auto rounded-3xl shadow-xl bg-white/90 backdrop-blur-lg p-8 md:p-16 flex flex-col md:flex-row gap-12">
        {/* Left: Contact Info */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-8">We'd love to hear from you. Reach out with any questions, feedback, or partnership opportunities.</p>
            <ul className="space-y-6 mb-10">
              <li className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600">
                  {/* Phone icon */}
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M2 5.5A3.5 3.5 0 0 1 5.5 2h0A1.5 1.5 0 0 1 7 3.5v2A1.5 1.5 0 0 1 5.5 7h0A1.5 1.5 0 0 0 4 8.5v1A13.5 13.5 0 0 0 15.5 21h1A1.5 1.5 0 0 0 18 19.5v-2A1.5 1.5 0 0 1 19.5 16h0A3.5 3.5 0 0 1 23 19.5v0A2.5 2.5 0 0 1 20.5 22C10.282 22 2 13.718 2 3.5A2.5 2.5 0 0 1 4.5 1h0A3.5 3.5 0 0 1 8 4.5v0A1.5 1.5 0 0 1 6.5 6h-2A1.5 1.5 0 0 0 3 7.5v0A1.5 1.5 0 0 1 2 5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-gray-700 text-base">{companyInfo.phone}</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600">
                  {/* Email icon */}
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm0 0L12 13l10-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-gray-700 text-base">{companyInfo.email}</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600">
                  {/* Map/Location icon */}
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 21s-7-6.5-7-11.5A7 7 0 0 1 12 2a7 7 0 0 1 7 7.5C19 14.5 12 21 12 21Zm0-9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-gray-700 text-base">{companyInfo.address}</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-2">
              <a href={companyInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#6366F1"/><path d="M7.5 8.5v7m0 0v-7m0 7h2m-2 0h-2m7-7v7m0 0v-7m0 7h2m-2 0h-2m7-7v7m0 0v-7m0 7h2m-2 0h-2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href={companyInfo.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:scale-110 transition-transform">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#6366F1"/><path d="M19.633 7.997c.013.176.013.353.013.53 0 5.39-4.104 11.61-11.61 11.61-2.308 0-4.457-.676-6.267-1.84.32.037.637.05.97.05 1.92 0 3.687-.65 5.096-1.747-1.797-.037-3.317-1.22-3.843-2.85.25.037.5.062.763.062.37 0 .74-.05 1.085-.144-1.872-.375-3.28-2.03-3.28-4.017v-.05c.55.306 1.18.49 1.85.513A4.07 4.07 0 0 1 2.8 6.13c0-.75.2-1.45.55-2.05a11.62 11.62 0 0 0 8.42 4.27c-.062-.3-.1-.6-.1-.92 0-2.22 1.8-4.02 4.02-4.02 1.16 0 2.21.49 2.95 1.28a7.98 7.98 0 0 0 2.56-.98c-.28.87-.87 1.6-1.65 2.06a8.03 8.03 0 0 0 2.31-.63c-.56.84-1.25 1.58-2.06 2.17Z" fill="#fff"/></svg>
              </a>
              <a href={companyInfo.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:scale-110 transition-transform">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#6366F1"/><path d="M15.5 8.5h-2a.5.5 0 0 0-.5.5v2h2.5l-.5 2H13v6h-2v-6H8.5v-2H11V9a2 2 0 0 1 2-2h2v2Z" fill="#fff"/></svg>
              </a>
            </div>
          </div>
        </div>
        {/* Right: Contact Form */}
        <div className="md:w-1/2 w-full">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all outline-none text-gray-800 placeholder-gray-400 bg-gray-50 hover:border-indigo-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@email.com"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all outline-none text-gray-800 placeholder-gray-400 bg-gray-50 hover:border-indigo-400"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all outline-none text-gray-800 placeholder-gray-400 bg-gray-50 hover:border-indigo-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Type your message here..."
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all outline-none text-gray-800 placeholder-gray-400 bg-gray-50 hover:border-indigo-400 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold text-lg shadow-md hover:bg-indigo-700 focus:bg-indigo-700 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-200 active:scale-95"
            >
              Send Message
            </button>
            {submitted && (
              <div className="text-green-600 text-center font-medium mt-2">Thank you for reaching out! We'll get back to you soon.</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

