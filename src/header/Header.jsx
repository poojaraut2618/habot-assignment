import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import habotLogo from "../assets/habot-logo.png";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="relative bg-white shadow">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="logo">
          <Link to="/"> {/* Link for home route */}
            <img src={habotLogo} alt="Habot Logo" className="h-14" />
          </Link>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Simple Menu Item */}
          <Link to="/find-suppliers" className="text-gray-700 hover:text-blue-500 font-medium">
            Find Suppliers
          </Link>

          {/* Menu Item with Submenu */}
          <div className="relative group">
            <Link
              to="/service"
              className="text-gray-700 hover:text-blue-500 font-medium flex items-center space-x-1"
            >
              <span>Find Service Tags</span>
              <IoIosArrowDown className="transform transition-transform duration-500 group-hover:rotate-180" />
            </Link>

            {/* Submenu */}
            <div className="absolute left-0 w-48 bg-white shadow-lg border rounded hidden group-hover:block z-10">
              <Link
                to="/service/service1"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Service 1
              </Link>
              <Link
                to="/service/service2"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Service 2
              </Link>
              <Link
                to="/service/service3"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Service 3
              </Link>
            </div>
          </div>

          {/* Button */}
          <Link
            to="/"
            className="hidden md:inline-block px-4 py-2 bg-white font-bold text-customGreen rounded hover:bg-customGreen hover:text-white border-2 border-customGreen transition"
          >
            Login / Sign Up
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Display when mobileMenuOpen is true */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link
            to="/find-suppliers"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Find Suppliers
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Find Service Tags
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Login / Sign Up
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
