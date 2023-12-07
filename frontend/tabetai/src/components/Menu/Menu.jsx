import React from 'react'
import './Menu.css'
import Menu1 from '../../img/Menu1.png'

function Menu() {
  return (
    <div>
        <div className='tittle_container'>
        <h1>Nuestro Menú</h1>
        <h2>Elige la mejor opción para tu paladar</h2>
        <br />
        </div>

        <div className='img_container'>
        <img className='' src={Menu1} alt="" />
        </div>
        <br />

    </div>
  )
}

export default Menu