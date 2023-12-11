import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                            <Link to="#" className="pasteleria" id='nav-cat'>Pastelería</Link>
                        </div>
                        <ul className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
                            <li><Link to="/horario" className="navbar-link">Horario</Link></li>
                            <li><Link to="/ubicacion" className="navbar-link">Ubicaciones</Link></li>
                            <li><Link to="/menu" className="navbar-link">Menú</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/cliente_reservar" id='nav-cat'>Reservar</Link></li>
                    <li><Link to="/catalogo" id='nav-cat'>Catálogo</Link></li>
                    <li><Link to="/nosotros" id='nav-cat'>Nosotros</Link></li>
                    <li><Link to="/login" id='nav-cat'>Login</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
