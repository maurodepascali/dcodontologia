import React from 'react';
import odontologa from '../img/odontologa.png';

const Nosotros = () => {
  return (
    <section className="about-section py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src={odontologa} 
                alt="Dra. [Nombre]" 
                className="rounded-lg shadow-xl w-full object-cover"
                style={{height: '600px'}}
              />
              <div className="absolute -bottom-6 -right-2 md:max-w-[80%] bg-primary-500 text-white py-4 px-6 rounded-lg shadow-lg">
                <p className="font-semibold text-base md:text-lg whitespace-nowrap">Dra. Constanza Agostina Darchuk</p>
                <p className="text-sm md:text-base">Odontóloga</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Experta en Odontología Estética y Rehabilitación Integral
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Con una sólida formación académica y años de experiencia, me especializo 
                en brindar tratamientos personalizados que combinan la excelencia técnica 
                con un enfoque cálido y humano.
              </p>
              <p>
                Mi compromiso es ayudarte a lograr y mantener una sonrisa saludable y 
                hermosa, utilizando las técnicas más avanzadas y un enfoque integral 
                que considera tus necesidades específicas.
              </p>
              <ul className="list-none space-y-2 mt-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Especialista en Rehabilitación Oral
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Posgrado en Estética Dental
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Actualización constante en técnicas innovadoras
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;