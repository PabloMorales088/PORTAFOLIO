import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Landing Page Moderna",
    description: "Landing page completamente responsive con animaciones, optimizada para SEO.",
    link: "#"
  },
  {
    title: "Dashboard de Administración",
    description: "Panel completo de gestión de datos, usuarios y métricas en tiempo real.",
    link: "#"
  },
  {
    title: "E-commerce Fullstack",
    description: "Tienda online con carrito funcional, pasarela de pago y backend escalable.",
    link: "#"
  },
  {
    title: "Blog Profesional",
    description: "Plataforma fullstack con autenticación, CRUD de posts, editor enriquecido y comentarios.",
    link: "#"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#141E30] via-[#243B55] to-[#3A6073] py-24 px-6 text-white">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-20"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Mis Proyectos
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 transition-transform duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">{project.title}</h2>
            <p className="text-white/80 mb-6 leading-relaxed">{project.description}</p>
            <a
              href={project.link}
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Proyecto
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
