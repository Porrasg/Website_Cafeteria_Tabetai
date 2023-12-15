import React from 'react'
import { Link } from 'react-router-dom';
import Signup from '../../Signup/Signup'

function Form_admin() {
    return (
        <div>
            <h2>Registrar Administradores </h2>
            <Signup></Signup>
            <a href="/admins_vistas" className="boton_admins">Ver todos los administradores</a> 
        </div>
    )
}

export default Form_admin