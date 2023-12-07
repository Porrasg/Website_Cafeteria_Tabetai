// Info_img.jsx

import React from 'react';
import './Info_img.css';
import imagenLogo from '../../img/Untitled.png';
import { Link } from 'react-router-dom';

const InfoImg = () => {
    return (
        <div className='info-container'>
            <img className='info-image' src={imagenLogo} alt="" />
            <div className='info-content'>
                    
                <div className='buttons'>
                    <Link to="/cliente_reservar" className="floating-button">
                        <button className="cta">
                            <span>Reservar</span>
                        </button>
                    </Link>
                    <div className='tresbuttons' >
                        <button className='button-inicio'>
                            <div className='schedule'>
                                <span>
                                    <lord-icon className="icon"
                                        src="https://cdn.lordicon.com/mwikjdwh.json"
                                        trigger="hover">
                                    </lord-icon>
                                </span>
                                <br />
                                <span>Horario</span>
                                <p>Conoce nuestros horarios</p>
                            </div>
                        </button>

                        <button className='button-inicio'>
                            <div className='menu'>
                                <span>
                                    <lord-icon className="icon"
                                        src="https://cdn.lordicon.com/zyzoecaw.json"
                                        trigger="hover">
                                    </lord-icon>
                                </span>
                                <br />
                                <span>Menú</span>
                                <p>Date una idea de qué pedir</p>
                            </div>
                        </button>

                        <button className='button-inicio'>
                            <div className='location'>
                                <span>
                                    <lord-icon className="icon"
                                        src="https://cdn.lordicon.com/cnpvyndp.json"
                                        trigger="hover">
                                    </lord-icon>
                                </span>
                                <br />
                                <span>Ubicación</span>
                                <p>¿Ya sabes dónde estamos ubicados?</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoImg;
