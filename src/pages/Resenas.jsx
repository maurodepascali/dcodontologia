// Resenas.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Resenas = () => {
  // Reseñas verificadas pre-cargadas
  const verifiedReviews = [
    {
      id: 1,
      name: "María García",
      rating: 5,
      date: "15 de Marzo, 2024",
      comment: "Excelente atención y profesionalismo. El resultado de mi tratamiento superó mis expectativas.",
      treatment: "Carillas Dentales",
      verified: true
    },
    // Añadir más reseñas verificadas
  ];

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dni: '',
    treatment: '',
    rating: 0,
    comment: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí podrías implementar:
    // 1. Envío a tu email
    // 2. Guardar en una base de datos con estado "pendiente"
    // 3. Validación de DNI/email contra una base de datos de pacientes
    alert("Gracias por tu reseña. Será revisada y publicada después de la verificación.");
    setShowForm(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">
          Experiencias de Nuestros Pacientes
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Conoce las experiencias reales de quienes confiaron en nosotros
        </p>

        {/* Grid de reseñas verificadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {verifiedReviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="relative mb-4">
                <FaQuoteLeft className="absolute top-0 left-0 text-primary-200 opacity-50 text-xl" />
                <p className="pl-8 text-gray-600 italic">{review.comment}</p>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <span className="text-sm text-primary-600">{review.treatment}</span>
                {review.verified && (
                  <span className="text-sm text-green-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verificada
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón para dejar reseña */}
        <div className="text-center">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-primary-500 text-white px-6 py-3 rounded-full hover:bg-primary-600 transition-colors"
          >
            Compartir mi experiencia
          </button>
        </div>

        {/* Formulario modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white rounded-xl p-6 w-full max-w-md my-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Comparte tu experiencia</h3>
              <button 
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nombre completo</label>
                  <input
                    type="text"
                    required
                    className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">DNI</label>
                  <input
                    type="text"
                    required
                    className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    value={formData.dni}
                    onChange={e => setFormData({...formData, dni: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Tratamiento realizado</label>
                  <select
                    className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    value={formData.treatment}
                    onChange={e => setFormData({...formData, treatment: e.target.value})}
                    required
                  >
                    <option value="">Selecciona un tratamiento</option>
                    <option value="Limpieza dental">Limpieza dental</option>
                    <option value="Carillas">Carillas</option>
                    <option value="Ortodoncia">Ortodoncia</option>
                    {/* Añadir más opciones */}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Calificación</label>
                  <div className="flex gap-2">
                    {[1,2,3,4,5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({...formData, rating: star})}
                        className="text-2xl"
                      >
                        <FaStar className={formData.rating >= star ? 'text-yellow-400' : 'text-gray-300'} />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Comentario</label>
                  <textarea
                    required
                    className="w-full p-2 border rounded-lg"
                    rows="4"
                    value={formData.comment}
                    onChange={e => setFormData({...formData, comment: e.target.value})}
                  ></textarea>
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
                  >
                    Enviar reseña
                  </button>
                  </div>
                <p className="text-xs text-gray-500 mt-4">
                  Tu reseña será revisada y publicada después de la verificación. Nos reservamos el derecho de moderar el contenido.
                </p>
              </form>
            </div>
          </div>
        )}

        {/* Estadísticas */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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

export default Resenas;