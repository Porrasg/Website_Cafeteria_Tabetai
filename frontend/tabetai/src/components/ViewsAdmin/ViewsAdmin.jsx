import React from 'react'
import './ViewsAdmin.css'


function ViewsAdmin() {
    return (
        <>
        <div className='container_regist'>
            <div className='registration-admin'>
                <a href="/admin_reservaciones" className="boton">Reservaciones</a>
                <a href="/admin_clientes" className="boton">Clientes</a>
                <a href="/mesas" className="boton">Mesas</a>
                <a href="/admins" className="boton">Administradores</a>
            </div>
        </div>
        </>
    )
}

export default ViewsAdmin