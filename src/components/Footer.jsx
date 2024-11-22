import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from '../img/logo2.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center">
          <img src={logo} alt="DC Odontología" className="h-48" />
          
          <div className="flex items-center gap-6 mb-6">
            <a
              href="https://www.instagram.com/dc.odontologiaok?igsh=MTNjYzZ1MnZlZmxieQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://wa.me/1137792454"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-500 transition-colors"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>

          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} DC Odontología. Todos los derechos reservados
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;