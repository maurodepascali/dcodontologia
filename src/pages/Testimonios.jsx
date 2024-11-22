import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaGoogle, FaFacebook } from 'react-icons/fa';

const Experiencia = () => {
  const testimonials = [
    {
      id: 1,
      name: "María García",
      text: "Increíble experiencia desde el primer momento. Muy profesional y dedicada. Recomiendo totalmente a la Dra. Darchuk.",
      rating: 5,
      date: "15 de Marzo, 2024",
      platform: "google", // o "facebook"
      profileUrl: "https://g.co/...", // URL al perfil/reseña real
      verified: true
    },
    {
      id: 2,
      name: "María García",
      text: "Increíble experiencia desde el primer momento. Muy profesional y dedicada. Recomiendo totalmente a la Dra. Darchuk.",
      rating: 5,
      date: "15 de Marzo, 2024",
      platform: "google", // o "facebook"
      profileUrl: "https://g.co/...", // URL al perfil/reseña real
      verified: true
    },
    {
      id: 3,
      name: "María García",
      text: "Increíble experiencia desde el primer momento. Muy profesional y dedicada. Recomiendo totalmente a la Dra. Darchuk.",
      rating: 5,
      date: "15 de Marzo, 2024",
      platform: "google", // o "facebook"
      profileUrl: "https://g.co/...", // URL al perfil/reseña real
      verified: true
    },
    // Más testimonios...
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Testimonios de Pacientes
        </h2>
        <div className="flex justify-center gap-4 mb-8">
          <a 
            href="https://g.co/..." 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-primary-500 transition-colors"
          >
            <FaGoogle /> Ver todas las reseñas en Google
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="ml-4 flex-grow">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    {testimonial.platform === 'google' && (
                      <FaGoogle className="text-gray-400" />
                    )}
                  </div>
                  <p className="text-gray-500 text-sm">{testimonial.date}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <FaQuoteLeft className="absolute -top-2 -left-2 text-primary-200 w-8 h-8 opacity-50" />
                <p className="text-gray-600 italic pl-6">{testimonial.text}</p>
              </div>
              {testimonial.verified && (
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-gray-500">Reseña verificada</span>
                  <a 
                    href={testimonial.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 text-sm"
                  >
                    Ver reseña original →
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Sección de estadísticas */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">4.9</div>
            <p className="text-gray-600">Calificación promedio</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">150+</div>
            <p className="text-gray-600">Reseñas verificadas</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">98%</div>
            <p className="text-gray-600">Pacientes satisfechos</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">5 años</div>
            <p className="text-gray-600">De experiencia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;