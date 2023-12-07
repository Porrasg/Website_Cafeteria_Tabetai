import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
                <button className="menu-button" onClick={toggleMenu}>
                    ☰
                </button>
                <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                    <li className="navbar-item dropdown">
                        <div>
                            <a href="#" className="navbar-link pasteleria" id='nav-cat'>Pastelería</a>
                        </div>
                        <ul className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
                            <li><a href="#" className="navbar-link">Horario</a></li>
                            <li><a href="#" className="navbar-link">Ubicaciones</a></li>
                            <li><a href="#" className="navbar-link">Menú</a></li>
                        </ul>
                    </li>
                    <li><a href="/cliente_reservar" id='nav-cat'>Reservar</a></li>
                    <li><a href="/catalogo" id='nav-cat'>Catálogo</a></li>
                    <li><a href="/nosotros" id='nav-cat'>Nosotros</a></li>
                    <li><a href="/login" id='nav-cat'>Login</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
