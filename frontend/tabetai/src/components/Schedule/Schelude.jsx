import React from 'react';
import './Schelude.css';
import { FaRegClock } from 'react-icons/fa';
// import Navbar from '../Navbar/Navbar';

function Schelude() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <br />
      <div className="font">
        <div className="container-wrapper">
          {/* Contenedor de Horario de Atención */}
          <div className="container">
            <FaRegClock size={50} color='white'/>
            <h1 className='parr'>Horario de Atención</h1>
            <h1 className='parr'>Cafeteria Tabetai</h1>
            <h3 className='parr3'>LUNES A JUEVES</h3>
            <p className='parrafo'>6:00 pm a 6:00 pm</p>
            <h3 className='parr3'>JUEVES A SÁBADO</h3>
            <p className='parrafo'>6:00 pm a 7:00 am</p>
            <h3 className='parr3'>DOMINGO</h3>
            <p className='parrafo'>Cerrado</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schelude;
