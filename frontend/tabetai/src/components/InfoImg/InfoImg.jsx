// Info_img.jsx

import React from 'react';
import './InfoImg.css';
import imagenLogo from '../../img/Untitled.png';
import { Link } from 'react-router-dom';
import { BiAlarm } from "react-icons/bi";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { BiFoodMenu } from "react-icons/bi";

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
                        <a href='/horario'>
                            <button className='button-inicio'>
                                <div className='schedule'>
                                    <span className='icons'>
                                        <BiAlarm />
                                    </span>
                                    <br />
                                    <span>Horario</span>
                                    <p>Conoce nuestros horarios</p>
                                </div>
                            </button>
                        </a>

                        <a href='/menu'>
                            <button className='button-inicio'>
                                <div className='menu'>
                                    <span className='icons'>
                                        <BiFoodMenu />
                                    </span>
                                    <br />
                                    <span>Menú</span>
                                    <p>Date una idea de qué pedir</p>
                                </div>
                            </button>
                        </a>

                        <a href='/ubicacion'>
                            <button className='button-inicio'>
                                <div className='location'>
                                    <span className='icons'>
                                        <LiaMapMarkedAltSolid />
                                    </span>
                                    <br />
                                    <span>Ubicación</span>
                                    <p>¿Sabes dónde nos ubicados?</p>
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoImg;
