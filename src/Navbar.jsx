import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4 fixed z-10 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-white text-2xl font-semibold">Animal Emotion</h1>
          <span className="text-gray-400">Detection</span>
        </div>
        <div className="hidden md:flex space-x-6 text-white">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/choose" className="hover:text-yellow-300">Features</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4 space-y-4">
          <Link to="/" className="block hover:text-yellow-300">Home</Link>
          <Link to="/choose" className="block hover:text-yellow-300">Features</Link>
          <Link to="/about" className="block hover:text-yellow-300">About</Link>
          <Link to="/contact" className="block hover:text-yellow-300">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
