"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ExternalLink, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const liDropdownRef = useRef<HTMLLIElement>(null);
  const divDropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        liDropdownRef.current &&
        !liDropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setIsDropdownOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0f2027]/95 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "bg-gradient-to-b from-black/50 to-transparent bg-[#0f2027]/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-full mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative w-10 h-10 group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300" />
                <Image
                  src="/my-portfolio-icon.png"
                  alt="Kayode Kolawole Logo"
                  fill
                  className="relative rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Kayode
                </h1>
                <p className="text-xs text-gray-400 -mt-1">Developer</p>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium text-white rounded-lg transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm group ${
                      activeSection === item.name.toLowerCase()
                        ? "bg-white/10 backdrop-blur-sm"
                        : ""
                    }`}
                  >
                    {item.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                </motion.li>
              ))}

              {/* Resume Dropdown */}
              <motion.li
                className="relative ml-4"
                ref={liDropdownRef}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 
                           text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 
                           transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Resume
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-md border border-white/20 
                               rounded-lg shadow-xl overflow-hidden"
                    >
                      <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 
                                 transition-colors duration-200 group"
                      >
                        <ExternalLink className="w-4 h-4 text-blue-400" />
                        <span>View Resume</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                      </a>
                      <a
                        href="/resume.pdf"
                        download
                        className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 
                                 transition-colors duration-200 group border-t border-white/10"
                      >
                        <Download className="w-4 h-4 text-purple-400" />
                        <span>Download Resume</span>
                        <Download className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            </ul>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? "close" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-[#0f2027] via-[#1f3a4a] to-[#2f5b6d] 
                       shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div>
                      <h2 className="font-bold text-white">Kayode</h2>
                      <p className="text-xs text-gray-400">Developer</p>
                    </div>
                  </div>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <nav className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="flex items-center px-4 py-3 text-white rounded-lg hover:bg-white/10 
                                 transition-colors duration-200 group"
                      >
                        <span className="font-medium">{item.name}</span>
                        <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile Resume Section */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pt-4 border-t border-white/20 mt-4"
                    ref={divDropdownRef}
                  >
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center justify-between w-full px-4 py-3 text-white rounded-lg 
                               hover:bg-white/10 transition-colors duration-200"
                    >
                      <span className="font-medium">Resume</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-2 space-y-1 pl-4"
                        >
                          <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white 
                                     hover:bg-white/10 rounded-lg transition-colors duration-200"
                            onClick={closeMobileMenu}
                          >
                            <ExternalLink className="w-4 h-4 text-blue-400" />
                            View Resume
                          </a>
                          <a
                            href="/resume.pdf"
                            download
                            className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white 
                                     hover:bg-white/10 rounded-lg transition-colors duration-200"
                            onClick={closeMobileMenu}
                          >
                            <Download className="w-4 h-4 text-purple-400" />
                            Download Resume
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </nav>

                {/* Mobile Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 pt-6 border-t border-white/20"
                >
                  <p className="text-xs text-gray-400 text-center">
                    © 2024 Kayode Kolawole
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
