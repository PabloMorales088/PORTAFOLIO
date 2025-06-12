import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav
      className="bg-gradient-to-r from-[#1A1A40] via-[#2E2E50] to-[#3A3A60] shadow-md py-4 px-8 sticky top-0 z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-center space-x-12 text-lg font-semibold text-white">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `relative pb-1 transition duration-300 ${
                isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {item.name}
                <span
                  className={`absolute -bottom-0 left-0 w-full h-0.5 bg-yellow-300 transition-transform duration-300 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                ></span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </motion.nav>
  );
}
