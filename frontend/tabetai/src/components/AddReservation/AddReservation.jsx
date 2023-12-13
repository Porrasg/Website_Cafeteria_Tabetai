import React, { useState,useEffect } from 'react';
import './AddReservation.css';
import { Navigate, Link } from 'react-router-dom';  // Agrega esta línea

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
      const response = await fetch('http://localhost:3001/api/v1/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({reservation: { date, hour, party, client_id} }),
      }
      );

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

  console.log("HOLAAAAAAAAAAAA",{
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


  const hours = Array.from({ length: 14 }, (_, index) => index + 6); // Crear un array con las horas desde 6:00 hasta 19:00
  const initialDate = new Date(); // Obtener la fecha actual como punto de partida
  // initialDate.setHours(6, 0, 0); // Establecer la hora inicial
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const handleHourChange = (e) => {
    const selectedHour = parseInt(e.target.value, 10);
    const newDate = new Date(selectedDate);
    newDate.setHours(selectedHour, 0, 0);

     newDate.setFullYear(selectedDate.getFullYear());
  newDate.setMonth(selectedDate.getMonth());
  newDate.setDate(selectedDate.getDate());
    
    console.log("Soy la hora",newDate.getHours())
    setSelectedDate(newDate);
    setHora(newDate);

  };

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
          {/* hacer el cambio en mi selectdate */}
          <select value={selectedDate.getHours()} onChange={handleHourChange}>
            {hours.map((hour) => (
            <option key={hour} value={hour}>
              {hour < 10 ? `0${hour}:00` : `${hour}:00`}
            </option>
            ))}
          </select>
        </label>

        <label className='label-client'>
          client:
          <input className='input-client' type="text" value={client_id} onChange={(e) => setClientID(e.target.value)} />
        </label>
        display none
        
        <div className='resback'>
          <Link to="/cliente_reservar" className='registrar atras'>Anterior</Link>
          <Link to="/confirmacion"> <button className='registrar' type="submit">Reservar</button></Link>
          </div>
      </form>
    </>
  );
};

export default AddReservation;