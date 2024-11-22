import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const BotonesRedesSociales = () => {
    return (
    <div className="fixed right-4 bottom-4 flex flex-col gap-4 z-50">
      <a
        href="https://www.instagram.com/dc.odontologiaok?igsh=MTNjYzZ1MnZlZmxieQ=="
        target="_blank"
        className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full text-white hover:scale-110 transition-transform"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://wa.me/1137792454"
        target="_blank"
        className="bg-green-500 p-3 rounded-full text-white hover:scale-110 transition-transform"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default BotonesRedesSociales;