import React from 'react'
import Signup from '../../Signup/Signup'

function Form_admin() {
    return (
        <div>
            <h2>Registrar Administradores </h2>
            {/* <form >
                Email: <input type="email" name='email' placeholder="email" />
                <br/>
                Password: <input type="password" name='password' placeholder="password" />
                <br/>
                Name: <input type="name" name='name' placeholder="name" />
                <br/>
                <input type='submit' value="Submit" />
            </form> */}
            <Signup></Signup>
            <a href="/admins_vistas" className="boton_admins">Ver todos los administradores</a> 
        </div>
    )
}

export default Form_admin