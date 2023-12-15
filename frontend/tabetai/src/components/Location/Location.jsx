import React from 'react'
import './Location.css';
import { FaLocationArrow } from 'react-icons/fa';
import { FaWaze } from 'react-icons/fa';
// import Navbar from '../Navbar/Navbar';

function Location() {
    return (
        <div>
            {/* <Navbar></Navbar> */}

            {/* Contenedor de Dónde Estamos */}
            <br />
            <div className="fontt">
                <div className="container-wrapperr">
                    <div className="container">
                        <FaLocationArrow size={40} color='white'/>
                        <h1 className='parr'>Dónde Estamos</h1>
                        <p className="country parrafoo">Costa Rica, Puntarenas, El Roble</p>
                        <p className="line-after-paragraphh parrafoo">
                        Nos puedes encontrar en El Roble, diagonal al restaurante La Cuchara de Gerald
                        </p>
                        <FaWaze size={50} color="white" />
                        <br />
                        <h2 className="waze parr2">Waze</h2>
                        <button className='btn-sch'>Haz clic para abrir app</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Location