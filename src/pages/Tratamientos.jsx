import React from 'react';
import { motion } from 'framer-motion';
import rehabilitacion from '../img/rehabilitacion.jpg';

const Tratamientos = () => {
  const treatments = [
    {
      title: "Rehabilitación Oral",
      description: "Restauración completa de tu sonrisa",
      image: rehabilitacion,
    },
    {
      title: "Odontología General",
      description: "Cuidado integral de tu salud bucal",
      image: rehabilitacion,
    },
    {
      title: "Implantología",
      description: "Soluciones permanentes y naturales",
      image: rehabilitacion,
    },
    {
      title: "Restauradora Estética",
      description: "Belleza y funcionalidad en armonía",
      image: rehabilitacion,
    },
    {
      title: "Periodoncia",
      description: "Salud de tus encías",
      image: rehabilitacion,
    },
    {
      title: "Prótesis",
      description: "Recupera tu sonrisa completa",
      image: rehabilitacion,
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Nuestros Tratamientos
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Soluciones integrales para todas tus necesidades dentales
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="relative h-[250px] md:h-[300px] rounded-xl overflow-hidden shadow-lg cursor-pointer group bg-white"
          >
            {/* Imagen con mayor transparencia */}
            <img
              src={treatment.image}
              alt={treatment.title}
              className="absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay celeste más claro y transparente */}
            <div className="absolute inset-0 bg-[#7dd3fc]/30 group-hover:bg-[#7dd3fc]/40 transition-all duration-300" />
            
            <div className="relative h-full p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:scale-105 drop-shadow-lg">
                {treatment.title}
              </h3>
              <p className="text-white/90 text-sm transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 drop-shadow">
                {treatment.description}
              </p>
            </div>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tratamientos;