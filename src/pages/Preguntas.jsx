// PreguntasFrecuentes.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const PreguntasFrecuentes = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Cuidados Generales",
      questions: [
        {
          question: "¿Cada cuánto tiempo debo realizar una limpieza dental?",
          answer: "Se recomienda realizar una limpieza dental profesional cada 6 meses. Sin embargo, algunos pacientes pueden necesitar limpiezas más frecuentes según su salud bucal y factores de riesgo específicos."
        },
        {
          question: "¿Cuál es la técnica correcta de cepillado?",
          answer: "El cepillado debe realizarse en un ángulo de 45 grados, con movimientos suaves y circulares, durante al menos 2 minutos. Es importante cepillar todas las superficies de los dientes y usar hilo dental diariamente."
        },
        {
          question: "¿Qué hacer en caso de una emergencia dental?",
          answer: "En caso de emergencia dental, comuníquese inmediatamente con nosotros. Para un diente caído, consérvelo en leche o saliva; para dolor intenso, puede tomar analgésicos y aplicar frío."
        }
      ]
    },
    {
      category: "Tratamientos Estéticos",
      questions: [
        {
          question: "¿El blanqueamiento dental es seguro?",
          answer: "Sí, el blanqueamiento dental es seguro cuando es realizado por profesionales. Utilizamos productos aprobados y técnicas modernas que no dañan el esmalte dental."
        },
        {
          question: "¿Cuánto duran las carillas dentales?",
          answer: "Las carillas dentales pueden durar entre 10-15 años con el cuidado adecuado. Es importante mantener una buena higiene bucal y asistir a revisiones regulares."
        },
        {
          question: "¿Las carillas dañan los dientes?",
          answer: "Las carillas requieren una preparación mínima del diente y, cuando son realizadas correctamente, no causan daño. El procedimiento es reversible y preserva la estructura dental natural."
        }
      ]
    },
    {
      category: "Ortodoncia",
      questions: [
        {
          question: "¿Cuánto tiempo dura el tratamiento de ortodoncia?",
          answer: "La duración varía según cada caso, típicamente entre 12-24 meses. Factores como la complejidad del caso y el cumplimiento del paciente influyen en el tiempo total."
        },
        {
          question: "¿Los brackets son dolorosos?",
          answer: "Puede haber molestias leves los primeros días después de la colocación o ajustes, pero el dolor no es significativo y se puede manejar con analgésicos comunes."
        }
      ]
    },
    {
      category: "Procedimientos",
      questions: [
        {
          question: "¿Los tratamientos de conducto son dolorosos?",
          answer: "No, utilizamos anestesia local y técnicas modernas que hacen el procedimiento indoloro. Muchos pacientes reportan que es similar a recibir un empaste."
        },
        {
          question: "¿Cuánto tiempo dura una limpieza dental?",
          answer: "Una limpieza dental profesional típicamente dura entre 30-60 minutos, dependiendo del estado de la salud bucal y la cantidad de sarro acumulado."
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-4">Preguntas Frecuentes</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Resolvemos tus dudas sobre tratamientos y cuidados dentales
        </p>

        <div className="space-y-6">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <h3 className="text-xl font-semibold px-6 py-4 bg-primary-50 text-primary-700">
                {category.category}
              </h3>
              <div className="divide-y divide-gray-100">
                {category.questions.map((faq, index) => (
                  <div key={index} className="border-l-4 border-transparent hover:border-primary-500">
                    <button
                      className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors"
                      onClick={() => setOpenIndex(openIndex === `${categoryIndex}-${index}` ? null : `${categoryIndex}-${index}`)}
                    >
                      <h4 className="font-medium pr-8">{faq.question}</h4>
                      {openIndex === `${categoryIndex}-${index}` ? (
                        <Minus className="flex-shrink-0 text-primary-500" />
                      ) : (
                        <Plus className="flex-shrink-0 text-gray-400" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openIndex === `${categoryIndex}-${index}` && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-4 text-gray-600">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreguntasFrecuentes;