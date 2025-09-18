
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "This platform has transformed the way our team collaborates. The interface is intuitive and the features are exactly what we needed!",
    role: "Product Manager"
  },
  {
    name: "Michael Lee",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I love how easy it is to share files and chat with my colleagues. The video feature is a game changer!",
    role: "Software Engineer"
  },
  {
    name: "Priya Patel",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "The collaboration tools are seamless and the design is beautiful. Highly recommended for remote teams!",
    role: "UX Designer"
  }
];


const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.25,
      duration: 0.8
    }
  }
};

const Testimonial = () => {
  return (
    <section className="bg-gray-50 py-16 w-full">
      <h2 className="text-center font-bold text-3xl md:text-4xl mb-12 text-gray-800 tracking-tight">
        What Our Users Say
      </h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl shadow-xl px-7 py-8 max-w-xs min-w-[240px] text-center hover:scale-105 transition-transform duration-200"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-blue-100 mx-auto mb-5 shadow-md"
            />
            <p className="italic text-gray-600 mb-4 text-base">"{t.text}"</p>
            <div className="font-semibold text-blue-900 text-lg">{t.name}</div>
            <div className="text-gray-500 text-sm">{t.role}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
