import React, { useEffect, useState } from 'react';
import './Clients_views.css';

const ClientsViews = () => {
    const [clients, setClients] = useState([]);
    const [editingClient, setEditingClient] = useState(null);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/v1/clients');

                if (!response.ok) {
                    throw new Error('Error al obtener los clientes');
                }

                const data = await response.json();
                setClients(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchClients();
    }, []);

    const handleEditClick = (client) => {
        setEditingClient(client);
    };

    const handleDeleteClient = async (id) => {
        // Mostrar una alerta de confirmación
        const confirmDelete = window.confirm("¿Estás seguro que quieres eliminar al cliente?");
        
        if (confirmDelete) {
            try {
                const response = await fetch(`http://localhost:3001/api/v1/clients/${id}`, {
                    method: 'DELETE',
                });

                if (!response.ok) {
                    throw new Error('Error al eliminar el cliente');
                }

                // Actualizar la lista de clientes después de eliminar
                setClients((prevClients) => prevClients.filter((client) => client.id !== id));
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    const handleCancelEdit = () => {
        setEditingClient(null);
    };

    const handleUpdateClient = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/api/v1/clients/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editingClient),
            });

            if (!response.ok) {
                throw new Error('Error al actualizar el cliente');
            }

            // Actualizar la lista de clientes después de la actualización
            setClients((prevClients) =>
                prevClients.map((client) =>
                    client.id === id ? { ...client, ...editingClient } : client
                )
            );

            // Salir del modo de edición
            setEditingClient(null);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div>
                <h2>Lista de Clientes</h2>
                <div className='client_container'>
                    <ul>
                        {clients.map((client) => (
                            <li className='each_item' key={client.id}>
                                {editingClient && editingClient.id === client.id ? (
                                    // Formulario de edición
                                    <>
                                        <label htmlFor='full_name'>Nombre: </label>
                                        <input
                                            type='text'
                                            id='full_name'
                                            value={editingClient.full_name}
                                            onChange={(e) =>
                                                setEditingClient({
                                                    ...editingClient,
                                                    full_name: e.target.value,
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
                                            value={editingClient.email}
                                            onChange={(e) =>
                                                setEditingClient({
                                                    ...editingClient,
                                                    email: e.target.value,
                                                })
                                            }
                                        />

                                        <br />
                                        <br />

                                        <label htmlFor='phone_number'>Telefono: </label>
                                        <input
                                            type='text'
                                            id='phone_number'
                                            value={editingClient.phone_number}
                                            onChange={(e) =>
                                                setEditingClient({
                                                    ...editingClient,
                                                    phone_number: e.target.value,
                                                })
                                            }
                                        />

                                        <br />
                                        <br />

                                        <button onClick={() => handleUpdateClient(client.id)}>
                                            Guardar
                                        </button>
                                        <button onClick={handleCancelEdit}>Cancelar</button>
                                    </>
                                ) : (
                                    // Vista normal
                                    <>
                                        <p>Número de Cliente: {client.id}</p>
                                        <p>Nombre: {client.full_name}</p>
                                        <p>Email: {client.email}</p>
                                        <p>Telefono: {client.phone_number}</p>
                                        {/* Agrega más campos según la estructura de tu API */}
                                        <button onClick={() => handleEditClick(client)}>Editar</button>
                                        <button onClick={() => handleDeleteClient(client.id)}>Eliminar</button>
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

export default ClientsViews;
