import React from 'react'
import { Link } from 'react-router-dom';
import Signup from '../../Signup/Signup'

function Form_admin() {
    return (
        <div>
            <Link to="/login" >Anterior</Link>
            <h2 className='addAdmin'>Registrar Administradores </h2>
            <Signup></Signup>
        </div>
    )
}

export default Form_admin