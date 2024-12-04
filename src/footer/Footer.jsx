import React from 'react';
import { Link } from "react-router-dom"; // Import Link for routing
import './Footer.css'; // Import your custom CSS for footer styling
import logo from '../assets/footer-logo.png'; // Your logo image path
import { FaFacebookF, FaTwitter, FaLinkedinIn , FaInstagram } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
    return (
        <footer className="bg-bgColour text-white py-8 px-16">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-2 py-4 border-t border-b border-gray-600">
                {/* First Column - Logo */}
                <div className="d-flex flex-column align-items-md-start">
                <Link to="/">
                    <img src={logo} alt="Logo" className="w-25 mb-4 mt-8" />
                    </Link>
                    <p className="text-muted small text-gray-400">© R Singhania</p>
                </div>
                {/* Second Column - Quick Links */}
                <div className="flex flex-col">
                    <h3 className="font-semibold text-lg text-white mb-4">Company</h3>
                    <ul className=" text-gray-400">
                        <li><a href="/about" className="hover:text-customOrange">About</a></li>
                        <li><a href="/faq" className="hover:text-customOrange">FAQ</a></li>

                    </ul>
                </div>

                {/* Third Column - Quick Links */}
                <div className="flex flex-col">
                    <h3 className="font-semibold text-white text-lg mb-4">Terms</h3>
                    <ul className=" text-gray-400">
                        <li><a href="/data-privacy" className="hover:text-customOrange">Data Privacy</a></li>
                        <li><a href="/terms" className="hover:text-customOrange">Terms</a></li>
                        <li><a href="/accessibility" className="hover:text-customOrange">Accessibility</a></li>
                    </ul>
                </div>

                {/* Fourth Column - Quick Links */}
                <div className="flex flex-col">
                    <h3 className="font-semibold text-white text-lg mb-4">Related</h3>
                    <ul className="text-gray-400">
                        <li><a href="/find-buyers" className="hover:text-customOrange">Find Buyer</a></li>
                        <li><a href="/feedback" className="hover:text-customOrange">Feedback</a></li>

                    </ul>
                </div>

                {/* Fifth Column - Social Icons */}
                <div className="flex flex-col items-center md:items-end">
                    <div className="flex space-x-6 items-center my-auto">

                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white border rounded-2xl border-gray-600 p-1 hover:text-customOrange">
                            <FaLinkedinIn  size={16} />
                        </a>

                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white border rounded-2xl border-gray-600 p-1 hover:text-customOrange">
                            <FaTwitter size={16} />
                        </a>

                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white border rounded-2xl border-gray-600 p-1 hover:text-customOrange">
                            <FaFacebookF size={16} />
                        </a>
                        
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white border rounded-2xl border-gray-600 p-1 hover:text-customOrange">
                            <FaInstagram size={16} />
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
