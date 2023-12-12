import React from 'react';
import './Menu.css';
import Menuu from '../../img/MinimalistMenu.png';
// import Navbar from '../Navbar/Navbar';

function Menu() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <br />
        <div className='tittle_container'>
          <h1>Nuestro Menú</h1>
          <h3>Elige la mejor opción para tu paladar</h3>
          <br />
        </div>

        <div className='img_container'>
          <img className='imgmenu' src={Menuu} alt="menu" />
        </div>
        <br />
    </div>
  );
}

export default Menu;
