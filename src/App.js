import React from 'react';
import  Navbar  from './components/Navbar';
import  BotonesRedesSociales  from './components/BotonesRedesSociales';
import  Footer  from './components/Footer';
import  Hero  from './components/Hero';
import  Nosotros  from './pages/Nosotros';
import  Tratamientos  from './pages/Tratamientos';
import  Testimonios  from './pages/Testimonios';
import  Casos  from './pages/Casos';
import PreguntasFrecuentes from './pages/Preguntas';
import  Resenas  from './pages/Resenas';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="nosotros">
          <Nosotros />
        </section>
        <section id="tratamientos">
          <Tratamientos />
        </section>
        <section id="casos">
          <Casos />
        </section>
        <section id="preguntas">
          <PreguntasFrecuentes />
        </section>
        <BotonesRedesSociales />
      </main>
      <Footer />
    </div>
  );
};

export default App;