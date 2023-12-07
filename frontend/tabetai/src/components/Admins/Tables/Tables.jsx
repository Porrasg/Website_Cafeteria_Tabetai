import React, { useEffect, useState } from 'react';


const Tables = () => {
    const [tables, setTables] = useState([]);
    const [editingTable, setEditingTable] = useState(null);

    useEffect(() => {
        const fetchTables = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/rest_tables');

            if (!response.ok) {
            throw new Error('Error al obtener las tablas');
            }

            const data = await response.json();
            setTables(data);
        } catch (error) {
            console.error('Error:', error);
        }
        };

        fetchTables();
    }, []);

    const handleEditClick = (table) => {
        setEditingTable(table);
    };

    const handleDeleteTable = async (id) => {
        try {
        const response = await fetch(`http://localhost:3001/api/v1/rest_tables/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Error al eliminar la mesa');
        }

        // Actualizar la lista de mesas después de eliminar
        setTables((prevTables) => prevTables.filter((table) => table.id !== id));
        } catch (error) {
        console.error('Error:', error);
        }
    };

    const handleCancelEdit = () => {
        setEditingTable(null);
    };
    
    const handleUpdateTable = async (id) => {
        try {
        const response = await fetch(`http://localhost:3001/api/v1/rest_tables/${id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(editingTable),
        });

        if (!response.ok) {
            throw new Error('Error al actualizar la mesa');
        }

        // Actualizar la lista de mesas después de la actualización
        setTables((prevTables) =>
            prevTables.map((table) =>
            table.id === id ? { ...table, ...editingTable } : table
            )
        );

        // Salir del modo de edición
        setEditingTable(null);
        } catch (error) {
        console.error('Error:', error);
        }
    };

    return (
        <>
            <div>
                <h2>Lista de Mesas</h2>
                <div className='tables_container'>
                    <ul>
                        {tables.map((table) => (
                        <li className='each_item' key={table.id}>
                            {editingTable && editingTable.id === table.id ? (
                            // Formulario de edición
                            <>
                                <label htmlFor='name_table'>Mesa: </label>
                                <input
                                type='text'
                                id='name_table'
                                value={editingTable.name_table}
                                onChange={(e) =>
                                    setEditingTable({
                                    ...editingTable,
                                    name_table: e.target.value,
                                    })
                                }
                                />

                                <br />
                                <br />

                                {/* Agrega más campos según la estructura de tu API */}
                                <label htmlFor='spaces'>Espacios: </label>
                                <input
                                type='text'
                                id='spaces'
                                value={editingTable.spaces}
                                onChange={(e) =>
                                    setEditingTable({
                                    ...editingTable,
                                    spaces: e.target.value,
                                    })
                                }
                                />

                                <br />
                                <br />

                                <label htmlFor='status'>Estado: </label>
                                <input
                                type='text'
                                id='status'
                                value={editingTable.status}
                                onChange={(e) =>
                                    setEditingTable({
                                    ...editingTable,
                                    status: e.target.value,
                                    })
                                }
                                />

                                <br />
                                <br />

                                <label htmlFor='reservation_id'>Id de la Reservación: </label>
                                <input
                                type='text'
                                id='reservation_id'
                                value={editingTable.reservation_id}
                                onChange={(e) =>
                                    setEditingTable({
                                    ...editingTable,
                                    reservation_id: e.target.value,
                                    })
                                }
                                />

                                <br />
                                <br />

                                <button onClick={() => handleUpdateTable(table.id)}>
                                Guardar
                                </button>
                                <button onClick={handleCancelEdit}>Cancelar</button>
                            </>
                            ) : (
                            // Vista normal
                            <>
                                <p>Número de Mesa: {table.id}</p>
                                <p>Mesa: {table.name_table}</p>
                                <p>Espacios: {table.spaces}</p>
                                <p>Estado: {table.status}</p>
                                {/* Agrega más campos según la estructura de tu API */}
                                <button onClick={() => handleEditClick(table)}>Editar</button>
                                <button onClick={() => handleDeleteTable(table.id)}>Eliminar</button>
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

export default Tables;