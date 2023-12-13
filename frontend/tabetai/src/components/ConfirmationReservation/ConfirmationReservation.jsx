import React, { useEffect, useState } from 'react';
import './ConfirmationReservation.css'

const LatestDataView = () => {
  const [latestReservation, setLatestReservation] = useState(null);
  const [latestClient, setLatestClient] = useState(null);

  const [editingReservation, setEditingReservation] = useState(null);
  const [editingClient, setEditingClient] = useState(null);

  useEffect(() => {
    const fetchLatestReservation = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/v1/reservations');

        if (!response.ok) {
          throw new Error('Error al obtener la última reservación');
        }

        const data = await response.json();
        // Suponiendo que la respuesta es una lista de reservaciones
        const lastReservation = data[data.length - 1];
        setLatestReservation(lastReservation);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const fetchLatestClient = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/v1/clients');

        if (!response.ok) {
          throw new Error('Error al obtener el último cliente');
        }

        const data = await response.json();
        // Suponiendo que la respuesta es una lista de clientes
        const lastClient = data[data.length - 1];
        setLatestClient(lastClient);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchLatestReservation();
    fetchLatestClient();
  }, []);

  const handleEditReservationClick = () => {
    setEditingReservation({ ...latestReservation });
  };

  const handleEditClientClick = () => {
    setEditingClient({ ...latestClient });
  };

  const handleDeleteReservation = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error al eliminar la reservación');
      }

      // Actualizar la última reserva después de eliminar
      setLatestReservation(null);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDeleteClient = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/v1/clients/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error al eliminar el cliente');
      }

      // Actualizar el último cliente después de eliminar
      setLatestClient(null);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCancelEditReservation = () => {
    setEditingReservation(null);
  };

  const handleCancelEditClient = () => {
    setEditingClient(null);
  };

  const handleUpdateReservation = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/v1/reservations/${latestReservation.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingReservation),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar la reservación');
      }

      // Actualizar la última reserva después de la actualización
      setLatestReservation(editingReservation);

      // Salir del modo de edición
      setEditingReservation(null);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleUpdateClient = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/v1/clients/${latestClient.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingClient),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el cliente');
      }

      // Actualizar el último cliente después de la actualización
      setLatestClient(editingClient);

      // Salir del modo de edición
      setEditingClient(null);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
<>
      <div className='xyz123'>
        <div>
          <h2>Abc Def</h2>
          <div className='client-container-123'>
            {latestClient ? (
              <div>
                {editingClient ? (
                  // Formulario de edición
                  <>
                    <label className='label-abc' htmlFor='full_name'>
                      Nombre:{' '}
                    </label>
                    <input
                      className='input-abc'
                      type='text'
                      id='full_name'
                      value={editingClient.full_name}
                      onChange={(e) => setEditingClient({ ...editingClient, full_name: e.target.value })}
                    />

                    <br />
                    <br />

                    <label className='label-abc' htmlFor='email'>
                      Email:{' '}
                    </label>
                    <input
                      className='input-abc'
                      type='text'
                      id='email'
                      value={editingClient.email}
                      onChange={(e) => setEditingClient({ ...editingClient, email: e.target.value })}
                    />

                    <br />
                    <br />

                    <label className='label-abc' htmlFor='phone_number'>
                      Telefono:{' '}
                    </label>
                    <input
                      className='input-abc'
                      type='text'
                      id='phone_number'
                      value={editingClient.phone_number}
                      onChange={(e) => setEditingClient({ ...editingClient, phone_number: e.target.value })}
                    />

                    <br />
                    <br />

                    <button className='button-abc' onClick={handleUpdateClient}>
                      Guardar
                    </button>
                    <button className='button-abc' onClick={handleCancelEditClient}>
                      Cancelar
                    </button>
                  </>
                ) : (
                  // Vista normal del cliente
                  <>
                    <p>Nombre: {latestClient.full_name}</p>
                    <p>Email: {latestClient.email}</p>
                    <p>Telefono: {latestClient.phone_number}</p>
                  </>
                )}
              </div>
            ) : (
              <p className='loading-xyz'>Cargando último cliente...</p>
            )}
          </div>
        </div>

        <div>
          <h2>Confirmación de la reservación</h2>
          <div className='reservation-container-123'>
            {latestReservation ? (
              <div>
                {editingReservation ? (
                  // Formulario de edición
                  <>
                    <label className='label-abc' htmlFor='party'>
                      Cantidad de personas:
                    </label>
                    <input
                      className='input-abc'
                      type='text'
                      id='party'
                      value={editingReservation.party}
                      onChange={(e) => setEditingReservation({ ...editingReservation, party: e.target.value })}
                    />

                    <br />
                    <br />

                    <label className='label-abc' htmlFor='date'>
                      Fecha:
                    </label>
                    <input
                      className='input-abc'
                      type='text'
                      id='date'
                      value={editingReservation.date}
                      onChange={(e) => setEditingReservation({ ...editingReservation, date: e.target.value })}
                    />

                    <br />
                    <br />

                    <label className='label-abc' htmlFor='hour'>
                      Hora:
                    </label>
                    <input
                      className='input-abc'
                      type='text'
                      id='hour'
                      value={editingReservation.hour}
                      onChange={(e) => setEditingReservation({ ...editingReservation, hour: e.target.value })}
                    />

                    <br />
                    <br />

                    <button className='button-abc' onClick={handleUpdateReservation}>
                      Guardar
                    </button>
                    <button className='button-abc' onClick={handleCancelEditReservation}>
                      Cancelar
                    </button>
                  </>
                ) : (
                  // Vista normal
                  <>
                    <p>Número de Reservación: {latestReservation.id}</p>
                    <p>Cantidad de personas: {latestReservation.party}</p>
                    <p>Fecha: {latestReservation.date}</p>
                    <p>Hora: {latestReservation.hour}</p>
                    <button className='button-abc' onClick={() => handleDeleteReservation(latestReservation.id)}>
                      Eliminar
                    </button>
                  </>
                )}
              </div>
            ) : (
              <p className='loading-xyz'>Cargando última reservación...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestDataView;

