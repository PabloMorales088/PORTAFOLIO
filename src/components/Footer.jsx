import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1A1A40] via-[#2E2E50] to-[#3A3A60] text-white py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <div className="w-full h-px bg-white/20 mb-6"></div>

        <p className="text-lg font-semibold mb-4 text-center">
          © {new Date().getFullYear()} Pablo Morales · Todos los derechos reservados
        </p>

        <div className="flex flex-wrap justify-center gap-8 text-lg">
          <a href="https://github.com/PabloMorales088" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
            GitHub
          </a>
          <a href="mailto:tucorreo@email.com" className="hover:text-yellow-300 transition">
            Email
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
