import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Form_tables.css';

function Form_tables() {
    const [formData, setFormData] = useState({
        name_table: '',
        spaces: 0,
        status: 'available',
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        console.log(formData)
        try {
        const response = await fetch('http://localhost:3001/api/v1/rest_tables', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ rest_tables: formData }),
        });

        if (response.ok) {
            console.log('Mesa agregada correctamente');
            // Puedes hacer algo adicional después de un envío exitoso, como limpiar el formulario.
        } else {
            const errors = await response.json();
            console.error(errors);
            // Puedes manejar los errores de alguna manera, por ejemplo, mostrándolos al usuario.
        }
        } catch (error) {
        console.error('Error al enviar datos:', error);
        }
    };

    return (
        <>
        <div>
            <Link to="/login" >Anterior</Link>
            <h2 className='mesass'>Agregar Nuevas Mesas</h2>
            <div className='container_form'>
                <div className='addmesa'>
                    <form className="form-tab"  onSubmit={handleSubmit}>
                        <label htmlFor="name_table">Nombre de la Mesa:</label>
                        <input
                            type="text"
                            id="name_table"
                            name="name_table"
                            value={formData.name_table}
                            onChange={handleChange}
                            required
                        />
                        <br />

                        <label htmlFor="spaces">Espacios:</label>
                        <input
                            type="number"
                            id="spaces"
                            name="spaces"
                            value={formData.spaces}
                            onChange={handleChange}
                            required
                        />
                        <br />

                        <label htmlFor="status">Estado:</label>
                        <select
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            required
                        >
                            <option value="available">available</option>
                            <option value="reserved">reserved</option>
                        </select>
                        <br />

                        <input className='enviar' type="submit" value="Enviar" />
                    </form>
                    <a href="/admin_mesas" className="boton_admins">
                    Ver todas las mesas
                    </a>
                </div>
            </div>
            
        </div>
        </>
    );
}

export default Form_tables;