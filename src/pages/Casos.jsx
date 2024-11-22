import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import sinarreglo from '../img/sinarreglo.jpg'
import arreglo from '../img/arreglo.jpg'

// Sección de Casos de Éxito
const Casos = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  const cases = [
    {
        id: 1,
        title: "Carillas Dentales",
        description: "Transformación completa con carillas de porcelana",
        beforeImg: sinarreglo,
        afterImg: arreglo,
        details: "Este tratamiento se realizó utilizando carillas de porcelana de alta calidad para lograr una transformación natural y duradera. El proceso incluyó una planificación digital detallada y un diseño personalizado para conseguir la sonrisa deseada.",
        duration: "3 sesiones",
        procedure: "Carillas de porcelana",
      },
      {
          id: 2,
          title: "Carillas Dentales",
          description: "Transformación completa con carillas de porcelana",
          beforeImg: sinarreglo,
          afterImg: arreglo,
          details: "Este tratamiento se realizó utilizando carillas de porcelana de alta calidad para lograr una transformación natural y duradera. El proceso incluyó una planificación digital detallada y un diseño personalizado para conseguir la sonrisa deseada.",
          duration: "3 sesiones",
          procedure: "Carillas de porcelana",
        },
        {
          id: 3,
          title: "Carillas Dentales",
          description: "Transformación completa con carillas de porcelana",
          beforeImg: sinarreglo,
          afterImg: arreglo,
          details: "Este tratamiento se realizó utilizando carillas de porcelana de alta calidad para lograr una transformación natural y duradera. El proceso incluyó una planificación digital detallada y un diseño personalizado para conseguir la sonrisa deseada.",
          duration: "3 sesiones",
          procedure: "Carillas de porcelana",
        },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Transformaciones Reales
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Resultados que cambian vidas y devuelven la confianza
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((case_) => (
            <motion.div
              key={case_.id}
              className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg"
              whileHover={{ y: -5 }}
              onClick={() => setSelectedCase(case_)}
            >
              <div className="relative h-[400px]">
                <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-0">
                  <img
                    src={case_.beforeImg}
                    alt="Antes"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                    Antes
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100">
                  <img
                    src={case_.afterImg}
                    alt="Después"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    Después
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                <h3 className="text-white text-xl font-bold mb-2">{case_.title}</h3>
                <p className="text-gray-200 text-sm">{case_.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
  {selectedCase && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 overflow-y-auto py-4"
      onClick={() => setSelectedCase(null)}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white rounded-xl w-[95%] max-w-4xl mx-auto my-2 p-4 md:p-6"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">{selectedCase.title}</h3>
          <button
            onClick={() => setSelectedCase(null)}
            className="p-1"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Imágenes */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500 mb-2">Antes</p>
                    <div className="relative rounded-lg overflow-hidden bg-gray-100 h-[250px]">
                      <img
                        src={selectedCase.beforeImg}
                        alt="Antes"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500 mb-2">Después</p>
                    <div className="relative rounded-lg overflow-hidden bg-gray-100 h-[250px]">
                      <img
                        src={selectedCase.afterImg}
                        alt="Después"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

        {/* Detalles */}
        <div className="mt-4">
          <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
            Detalles del tratamiento
          </h4>
          <p className="text-sm md:text-base text-gray-600">{selectedCase.details}</p>
          
          <div className="mt-4 space-y-3 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <h5 className="font-medium text-gray-900 text-sm mb-1">Duración</h5>
              <p className="text-gray-600 text-sm">{selectedCase.duration}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <h5 className="font-medium text-gray-900 text-sm mb-1">Procedimiento</h5>
              <p className="text-gray-600 text-sm">{selectedCase.procedure}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
      </div>
    </section>
  );
};

export default Casos;