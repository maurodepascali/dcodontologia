import React from 'react';
import logo from '../img/logo2.png';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-container">
          <div className="hero-text">
            <div>
              <img src={logo} alt="Logo" className="hero-logo" />
            </div>
            <h1 className="hero-title">
              Cuidamos tu sonrisa
            </h1>
            <p className="hero-subtitle">
              Odontología estética y rehabilitación integral
            </p>
            <a
              href="https://wa.me/1137792454"
              target="_blank"
              className="cta-button"
            >
              Agenda tu cita
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;