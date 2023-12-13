import React, { useEffect, useState } from 'react';
import './Admins_view.css'

const Admins_views = () => {
    const [admins, setAdmins] = useState([]);
    const [editingAdmin, setEditingAdmin] = useState(null);

    useEffect(() => {
        const fetchAdmins = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/admins');

            if (!response.ok) {
            throw new Error('Error al obtener los administradores');
            }

            const data = await response.json();
            setAdmins(data);
        } catch (error) {
            console.error('Error:', error);
        }
        };

        fetchAdmins();
    }, []);

    const handleEditClick = (admin) => {
        setEditingAdmin(admin);
    };

    const handleDeleteAdmin = async (id) => {
        try {
        const response = await fetch(`http://localhost:3001/api/v1/admins/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Error al eliminar el administrador');
        }

        // Actualizar la lista de administradores después de eliminar
        setAdmins((prevAdmins) => prevAdmins.filter((admin) => admin.id !== id));
        } catch (error) {
        console.error('Error:', error);
        }
    };

    const handleCancelEdit = () => {
        setEditingAdmin(null);
    };
    
    const handleUpdateAdmin = async (id) => {
        try {
        const response = await fetch(`http://localhost:3001/api/v1/admins/${id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(editingAdmin),
        });

        if (!response.ok) {
            throw new Error('Error al actualizar el administrador');
        }

        // Actualizar la lista de clientes después de la actualización
        setAdmins((prevAdmins) =>
            prevAdmins.map((admin) =>
            admin.id === id ? { ...admin, ...editingAdmin } : admin
            )
        );

        // Salir del modo de edición
        setEditingAdmin(null);
        } catch (error) {
        console.error('Error:', error);
        }
    };

    return (
        <>
            <div>
                <h2>Lista de Administradores</h2>
                <div className='admin_container'>
                    <ul>
                        {admins.map((admin) => (
                        <li className='each_item' key={admin.id}>
                            {editingAdmin && editingAdmin.id === admin.id ? (
                            // Formulario de edición
                            <>
                                <label htmlFor='name'>Nombre: </label>
                                <input
                                type='text'
                                id='name'
                                value={editingAdmin.name}
                                onChange={(e) =>
                                    setEditingAdmin({
                                    ...editingAdmin,
                                    name: e.target.value,
                                    })
                                }
                                />

                                <br />
                                <br />

                                {/* Agrega más campos según la estructura de tu API */}
                                <label htmlFor='email'>Email: </label>
                                <input
                                type='text'
                                id='email'
                                value={editingAdmin.email}
                                onChange={(e) =>
                                    setEditingAdmin({
                                    ...editingAdmin,
                                    email: e.target.value,
                                    })
                                }
                                />

                                <br />
                                <br />

                                <label htmlFor='created_at'>Creado: </label>
                                <input
                                type='text'
                                id='created_at'
                                value={editingAdmin.created_at}
                                onChange={(e) =>
                                    setEditingAdmin({
                                    ...editingAdmin,
                                    created_at: e.target.value,
                                    })
                                }
                                />

                                <br />
                                <br />

                                <button onClick={() => handleUpdateAdmin(admin.id)}>
                                Guardar
                                </button>
                                <button onClick={handleCancelEdit}>Cancelar</button>
                            </>
                            ) : (
                            // Vista normal
                            <>
                                <p>Nombre: {admin.name}</p>
                                <p>Email: {admin.email}</p>
                                <p>Creado: {admin.created_at}</p>
                                {/* Agrega más campos según la estructura de tu API */}
                                <button onClick={() => handleEditClick(admin)}>Editar</button>
                                <button onClick={() => handleDeleteAdmin(admin.id)}>Eliminar</button>
                            </>
                            )}
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Admins_views;