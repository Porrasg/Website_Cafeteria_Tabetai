import React, { useEffect, useState } from 'react';
import './Reservations_views.css';

const ReservationsViews = () => {
    const [reservations, setReservations] = useState([]);
    const [editingReservation, setEditingReservation] = useState(null);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/v1/reservations');

                if (!response.ok) {
                    throw new Error('Error al obtener las reservaciones');
                }

                const data = await response.json();
                setReservations(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchReservations();
    }, []);

    const handleEditClick = (reservation) => {
        setEditingReservation(reservation);
    };

    const handleDeleteReservation = (id) => {
        const confirmation = window.confirm('¿Estás seguro que quieres eliminar esta reservación?');

        if (confirmation) {
            deleteReservation(id);
        }
    };

    const deleteReservation = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Error al eliminar la reservación');
            }

            // Actualizar la lista de reservaciones después de la eliminación
            setReservations((prevReservations) => prevReservations.filter((reservation) => reservation.id !== id));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleCancelEdit = () => {
        setEditingReservation(null);
    };

    const handleUpdateReservation = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editingReservation),
            });

            if (!response.ok) {
                throw new Error('Error al actualizar la reservación');
            }

            // Actualizar la lista de reservaciones después de la actualización
            setReservations((prevReservations) =>
                prevReservations.map((reservation) =>
                    reservation.id === id ? { ...reservation, ...editingReservation } : reservation
                )
            );

            // Salir del modo de edición
            setEditingReservation(null);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div>
                <h2>Lista de Reservaciones</h2>
                <div className='reservation_container'>
                    <ul>
                        {reservations.map((reservation) => (
                            <li className='each_item' key={reservation.id}>
                                {editingReservation && editingReservation.id === reservation.id ? (
                                    // Formulario de edición
                                    <>
                                        {/* Campos de edición */}
                                        <label htmlFor='party'>Cantidad de personas:</label>
                                        <input
                                            type='text'
                                            id='party'
                                            value={editingReservation.party}
                                            onChange={(e) =>
                                                setEditingReservation({
                                                    ...editingReservation,
                                                    party: e.target.value,
                                                })
                                            }
                                        />

                                        <br />
                                        <br />

                                        {/* Agrega más campos según la estructura de tu API */}
                                        <label htmlFor='date'>Fecha:</label>
                                        <input
                                            type='text'
                                            id='date'
                                            value={editingReservation.date}
                                            onChange={(e) =>
                                                setEditingReservation({
                                                    ...editingReservation,
                                                    date: e.target.value,
                                                })
                                            }
                                        />

                                        <br />
                                        <br />

                                        <label htmlFor='hour'>Hora:</label>
                                        <input
                                            type='text'
                                            id='hour'
                                            value={editingReservation.hour}
                                            onChange={(e) =>
                                                setEditingReservation({
                                                    ...editingReservation,
                                                    hour: e.target.value,
                                                })
                                            }
                                        />

                                        <br />
                                        <br />

                                        <button onClick={() => handleUpdateReservation(reservation.id)}>Guardar</button>
                                        <button onClick={handleCancelEdit}>Cancelar</button>
                                    </>
                                ) : (
                                    // Vista normal
                                    <>
                                        {/* Campos de visualización */}
                                        <p>Número de Reservación: {reservation.id}</p>
                                        <p>Cantidad de personas: {reservation.party}</p>
                                        <p>Fecha: {reservation.date}</p>
                                        <p>Hora: {reservation.hour}</p>
                                        <p>ID del cliente: {reservation.client_id}</p>
                                        {/* Agrega más campos según la estructura de tu API */}
                                        <button onClick={() => handleEditClick(reservation)}>Editar</button>
                                        <button onClick={() => handleDeleteReservation(reservation.id)}>Eliminar</button>
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

export default ReservationsViews;