import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "React", "JavaScript (ES6+)", "TypeScript", "Node.js", "Express",
  "MongoDB", "TailwindCSS", "Git & GitHub", "Vite", "Framer Motion", "REST APIs", "HTML5"
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#141E30] to-[#243B55] text-white px-6 py-16">
      <motion.div
        className="max-w-5xl bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-xl shadow-2xl"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-center text-yellow-300">Sobre mí</h1>
        <p className="text-lg leading-8 text-center mb-10 text-white/80">
          Soy un <span className="font-bold text-yellow-300">Desarrollador Web Fullstack</span> con pasión por crear soluciones modernas, rápidas y funcionales.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-yellow-300 text-center">Tecnologías y herramientas</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#00c6ff] to-[#0072ff] text-white py-3 px-4 rounded-lg text-center font-semibold shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
