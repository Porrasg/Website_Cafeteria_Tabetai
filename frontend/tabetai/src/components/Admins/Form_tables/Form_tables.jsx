import React from 'react'

function Form_tables() {

    


    return (
        <>
            <div>
                <h2>Agregar Nuevas Mesas</h2>
                {/* <form >
                    Email: <input type="email" name='email' placeholder="email" />
                    <br/>
                    Password: <input type="password" name='password' placeholder="password" />
                    <br/>
                    Name: <input type="name" name='name' placeholder="name" />
                    <br/>
                    <input type='submit' value="Submit" />
                </form> */}
                <form action="/tu_ruta_de_procesamiento" method="post">
                    <label for="name_table">Nombre de la tabla:</label>
                    <input type="text" id="name_table" name="name_table" required/>
                    <br/>

                    <label for="spaces">Espacios:</label>
                    <input type="number" id="spaces" name="spaces" required/>
                    <br/>

                    <label for="status">Estado:</label>
                    <select id="status" name="status" required>
                        <option value="activo">available</option>
                        <option value="inactivo">reserved</option>
                    </select>
                    <br/>

                    <input type="submit" value="Enviar"/>
                </form>
                <a href="/admin_mesas" className="boton_admins">Ver todas las mesas</a> 
            </div>
        </>
    )
}

export default Form_tables