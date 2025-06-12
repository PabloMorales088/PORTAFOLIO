import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#1A1A40] via-[#2E2E50] to-[#3A3A60] text-white px-6 py-24">
      <motion.div
        className="w-full max-w-xl bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-white/20"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-extrabold mb-10 text-center text-yellow-300">Contacto</h1>
        <form>
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-white/90">Nombre</label>
            <input
              type="text"
              className="w-full border-none rounded-xl px-5 py-4 bg-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-yellow-400 transition"
              placeholder="Tu nombre"
            />
          </div>
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-white/90">Email</label>
            <input
              type="email"
              className="w-full border-none rounded-xl px-5 py-4 bg-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-yellow-400 transition"
              placeholder="tucorreo@email.com"
            />
          </div>
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-white/90">Mensaje</label>
            <textarea
              className="w-full border-none rounded-xl px-5 py-4 bg-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-yellow-400 transition"
              rows="5"
              placeholder="Escribe tu mensaje"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-300 to-yellow-400 text-gray-900 font-semibold py-4 rounded-xl shadow-lg hover:scale-105 transition"
          >
            Enviar mensaje
          </button>
        </form>
      </motion.div>
    </div>
  );
}
