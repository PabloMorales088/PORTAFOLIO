import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#6a82fb] text-white px-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Pablo Morales
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          Desarrollador Fullstack construyendo interfaces modernas, experiencias fluidas y proyectos sólidos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          <Link
            to="/projects"
            className="inline-block bg-gradient-to-r from-yellow-300 to-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition-transform duration-300"
          >
            Ver mis proyectos
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
