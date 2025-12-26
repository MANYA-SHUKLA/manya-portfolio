import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <section className="bg-blue-500 dark:bg-gray-800 dark:border dark:border-gray-700 backdrop-blur-[10px] shadow-navbar dark:shadow-gray-900/50 w-[95%] sm:w-auto h-[60px] flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-20 text-center fixed top-2 rounded-full left-1/2 transform -translate-x-1/2 z-[30] transition-colors duration-300">
      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center items-center w-full">
        <ul className="flex justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center text-center">
          <li>
            <motion.a
              href="#projects"
              className="no-underline text-textWhiteColor text-base md:text-lg lg:text-xl font-medium relative"
              onClick={closeMenu}
              whileHover={{ scale: 1.1, color: "#06d6a0" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Projects</span>
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#skills"
              className="no-underline text-textWhiteColor text-base md:text-lg lg:text-xl font-medium relative"
              onClick={closeMenu}
              whileHover={{ scale: 1.1, color: "#06d6a0" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Skills</span>
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#about"
              className="no-underline text-textWhiteColor text-base md:text-lg lg:text-xl font-medium relative"
              onClick={closeMenu}
              whileHover={{ scale: 1.1, color: "#06d6a0" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">About</span>
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#contacts"
              className="no-underline text-textWhiteColor text-base md:text-lg lg:text-xl font-medium relative"
              onClick={closeMenu}
              whileHover={{ scale: 1.1, color: "#06d6a0" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Contact</span>
            </motion.a>
          </li>
          {/* Desktop Theme Toggle */}
          <li className="ml-4 sm:ml-6">
            <motion.button
              onClick={toggleTheme}
              className="relative w-14 h-7 bg-white/20 dark:bg-gray-700 rounded-full p-1 flex items-center cursor-pointer transition-colors duration-300 shadow-lg hover:bg-white/30 dark:hover:bg-gray-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle dark mode"
            >
              <motion.div
                className="absolute top-1 left-1 w-5 h-5 bg-white dark:bg-gray-900 rounded-full shadow-md flex items-center justify-center z-10"
                animate={{
                  x: isDark ? 24 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaMoon className="text-cyan-400 text-xs" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaSun className="text-yellow-400 text-xs" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.button>
          </li>
        </ul>
      </div>

      {/* Mobile Theme Toggle & Menu Button */}
      <div className="md:hidden flex items-center gap-4">
        {/* Mobile Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          className="relative w-12 h-6 bg-white/20 dark:bg-gray-700 rounded-full p-0.5 flex items-center cursor-pointer transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle dark mode"
        >
          <motion.div
            className="absolute top-0.5 left-0.5 w-5 h-5 bg-white dark:bg-gray-900 rounded-full shadow-md flex items-center justify-center"
            animate={{
              x: isDark ? 20 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaMoon className="text-cyan-400 text-xs" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaSun className="text-yellow-400 text-xs" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.button>
        
        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMenu}
          className="text-textWhiteColor text-2xl focus:outline-none"
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <FaTimes />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <FaBars />
            </motion.div>
          )}
        </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-blue-500 dark:bg-gray-800 backdrop-blur-[10px] rounded-2xl shadow-lg md:hidden transition-colors duration-300"
          >
            <ul className="flex flex-col gap-4 p-4">
              {[
                { href: "#projects", label: "Projects" },
                { href: "#skills", label: "Skills" },
                { href: "#about", label: "About" },
                { href: "#contacts", label: "Contact" },
              ].map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a
                    href={item.href}
                    className="no-underline text-textWhiteColor text-base font-medium block py-2"
                    onClick={closeMenu}
                    whileHover={{ scale: 1.05, color: "#06d6a0", x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Navbar;