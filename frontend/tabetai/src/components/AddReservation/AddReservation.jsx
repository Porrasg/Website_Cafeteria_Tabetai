import React, { useState,useEffect } from 'react';
import './AddReservation.css';
import { Navigate } from 'react-router-dom';  // Agrega esta línea

const AddReservation = () => {
  const [date, setFecha] = useState('');
  const [hour, setHora] = useState('');
  const [party, setOpcionesDropdown] = useState('');
  const [redirectToReservar, setRedirectToReservar] = useState(false); // Agregado para manejar la redirección
  const opciones = ['Selecciona el número de personas', '1 Persona', '2 Personas', '3 Personas', '4 Personas', '5 Personas', '6 Personas'];

  const [client_id, setClientID] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de los datos, como guardarlos en una base de datos o enviarlos a otra API.
    try {
      const response = await fetch('http://localhost:3001/api/v1/reservations', { // Cambiado a 'reservations'
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({reservation: { date, hour, party, client_id} }),
      });




      console.log("REESPUESTA SERVER",response)
      if (!response.ok) {
        throw new Error('Error: ' + response.statusText);
      }

      const data = await response.json();
      console.log('Success DATA RESERVACION:', data);

      // Establecer el estado para redirigir a /reservar
      // setRedirectToReservar(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // if (redirectToReservar) {
  //   // Redirige a /reservar si redirectToReservar es verdadero
  //   return <Navigate to="/FinalReservation" />;
  // }

  console.log({
    date,
    hour,
    party,
    client_id,
  });






  useEffect(() => {
    const valorID = localStorage.getItem("ReservaId");
    setClientID(valorID || ''); 
  }, []);


  console.log("LOCAL STORAGE",client_id)
  return (
    <>
      <div className='res'>
        <h1>Reservar</h1>
      </div>
      <form className='form-reser' onSubmit={handleSubmit}>
        <label className='label-reser'>
          Selecciona una opción:
          <select
            value={party}
            onChange={(e) => setOpcionesDropdown(e.target.value)}
          >
            {opciones.map((opcion, index) => (
              <option key={index} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </label>

        <label className='label-reser'>
          Fecha:
          <input
            className='input-reser'
            type="date"
            value={date}
            onChange={(e) => setFecha(e.target.value)}
          />
        </label>

        <label className='label-reser'>
          Hora:
          <input
            type="time"
            value={hour}
            onChange={(e) => setHora(e.target.value)}
          />
        </label>

        <label className='label-client'>
        client:
        <input className='input-client' type="text" value={client_id} onChange={(e) => setClientID(e.target.value)} />
      </label>
      display none
      

        <button className='registrar' type="submit">
          Reservar
        </button>
      </form>
      </>
  );
};

export default AddReservation;