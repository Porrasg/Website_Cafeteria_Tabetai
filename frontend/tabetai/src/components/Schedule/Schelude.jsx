import React from 'react';
import './Schelude.css';
import { FaRegClock } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import { FaWaze } from 'react-icons/fa';

function Schelude() {
  return (
    <div>
      <div className="font">
        <div className="container-wrapper">
          {/* Contenedor de Horario de Atención */}
          <div className="container">
            <FaRegClock size={50} color='white'/>
            <h1>Horario de Atención</h1>
            <h1>Cafeteria Tabetai</h1>
            <h3>LUNES A JUEVES</h3>
            <p>6:00 pm a 6:00 pm</p>
            <h3>JUEVES A SÁBADO</h3>
            <p>6:00 pm a 7:00 am</p>
            <h3>DOMINGO</h3>
            <p>Cerrado</p>
          </div>

          {/* Contenedor de Dónde Estamos */}
          <div className="container">
            <FaLocationArrow size={40} color='white'/>
            <h1>Dónde Estamos</h1>
            <p className="country">Costa Rica, Puntarenas, El Roble</p>
            <p className="line-after-paragraphh">
              Nos puedes encontrar en El Roble, <br />
              diagonal al restaurante La Cuchara de Gerald
            </p>
            <FaWaze size={50} color="white" />
            <br />
            <h2 className="waze">Waze</h2>
            <button>Haz clic para abrir app</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schelude;
