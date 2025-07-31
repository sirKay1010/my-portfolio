"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Requires lucide-react (run: npm install lucide-react)

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const liDropdownRef = useRef<HTMLLIElement>(null);
  const divDropdownRef = useRef<HTMLDivElement>(null);

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

  return (
    <nav className="flex justify-between bg-[#0f2027] items-center w-full px-6 py-4 fixed top-0 z-50">
      {/* Logo */}
      <div className="text-xl font-bold text-white">
        <Link href="/">Kayode</Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-6 text-white">
        {["Home", "About", "Projects", "Contact"].map((text) => (
          <li key={text}>
            <Link
              href={`#${text.toLowerCase()}`}
              className="px-4 py-2 border-white rounded hover:bg-white hover:text-black transition"
            >
              {text}
            </Link>
          </li>
        ))}
        <li className="relative" ref={liDropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="ml-4 px-2 py-2 border border-white rounded hover:bg-white hover:text-black transition"
          >
            Resume ▾
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-34 bg-white text-black text-sm rounded shadow-lg z-50">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-2 py-2 hover:bg-[#0f2027] hover:text-white"
              >
                View Resume
              </a>
              <a
                href="/resume.pdf"
                download
                className="block px-2 py-2 hover:bg-[#0f2027] hover:text-white"
              >
                Download Resume
              </a>
            </div>
          )}
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-white focus:outline-none"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gradient-to-b from-[#0f2027] via-[#1f3a4a] to-[#2f5b6d] p-6 text-white flex flex-col space-y-4 z-40 md:hidden">
          {["Home", "About", "Projects", "Contact"].map((text) => (
            <Link
              key={text}
              href={`#${text.toLowerCase()}`}
              onClick={closeMobileMenu}
              className="px-4 py-2 border-white rounded hover:bg-white hover:text-black transition"
            >
              {text}
            </Link>
          ))}
          <div ref={divDropdownRef} className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full text-left px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
            >
              Resume ▾
            </button>
            {isDropdownOpen && (
              <div className="mt-2 w-full bg-white text-black text-sm rounded shadow-lg z-50">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-[#0f2027] hover:text-white"
                >
                  View Resume
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="block px-4 py-2 hover:bg-[#0f2027] hover:text-white"
                >
                  Download Resume
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
