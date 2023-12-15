import React, { useState, useEffect } from 'react';
import './AddReservation.css';
import { Navigate, Link } from 'react-router-dom';

const AddReservation = () => {
  // State variables to manage form data
  const [date, setFecha] = useState('');
  const [hour, setHora] = useState('');
  const [party, setOpcionesDropdown] = useState('');
  const [client_id, setClientID] = useState('');
  const [redirectToConfirmation, setRedirectToConfirmation] = useState(false);

  // Fetch client ID from local storage on component mount
  useEffect(() => {
    const valorID = localStorage.getItem("ReservaId");
    setClientID(valorID || ''); 
  }, []);

  // Array of hours for the time dropdown
  const hours = Array.from({ length: 14 }, (_, index) => index + 6);
  const initialDate = new Date();
  const [selectedDate, setSelectedDate] = useState(initialDate);

  // Function to handle hour change in the dropdown
  const handleHourChange = (e) => {
    const selectedHour = parseInt(e.target.value, 10);
    const newDate = new Date(selectedDate);
    newDate.setHours(selectedHour, 0, 0);

    newDate.setFullYear(selectedDate.getFullYear());
    newDate.setMonth(selectedDate.getMonth());
    newDate.setDate(selectedDate.getDate());

    setSelectedDate(newDate);
    setHora(newDate);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Submit reservation data
      const response = await fetch('http://localhost:3001/api/v1/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reservation: { date, hour, party, client_id } }),
      });

      if (!response.ok) {
        throw new Error('Error: ' + response.statusText);
      }

      const data = await response.json();
      console.log('RESERVAAAAAAA ENVIADA:', data);

      // Send email after confirming the reservation is saved successfully
      const emailResponse = await fetch('http://localhost:3001/api/v1/reservations/send_email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reservation: { date, hour, party, client_id } }),
      });

      if (!emailResponse.ok) {
        throw new Error('Error al enviar el correo electrónico: ' + emailResponse.statusText);
      }

      console.log('Correo electrónico enviado con éxito.');

      // Redirect to the confirmation page
      setRedirectToConfirmation(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // If redirectToConfirmation is true, navigate to the confirmation page
  if (redirectToConfirmation) {
    return <Navigate to="/confirmacion" />;
  }

  // Render the reservation form
  return (
    <>
      <div className='res'>
        <h1>Reservar</h1>
      </div>
      <form className='form-reser' onSubmit={handleSubmit}>
        <label className='label-reser'>
          Seleccione una opción:
          <select
            value={party}
            onChange={(e) => setOpcionesDropdown(e.target.value)}
          >
            {['Selecciona el número de personas', '1 persona', '2 personas', '3 personas', '4 personas', '5 personas', '6 personas'].map((option, index) => (
              <option key={index} value={option}>
                {option}
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
          <select value={selectedDate.getHours()} onChange={handleHourChange}>
            {hours.map((hour) => (
            <option key={hour} value={hour}>
              {hour < 10 ? `0${hour}:00` : `${hour}:00`}
            </option>
            ))}
          </select>
        </label>

        <label className='label-client-resr'>
          Cliente:
          <input className='input-client' type="text" value={client_id} onChange={(e) => setClientID(e.target.value)} />
        </label>
        
        <div className='resback'>
          <Link to="/cliente_reservar" className='registrar antes'>Anterior</Link>
          
          <Link to="/confirmation" className='registrar'>
            <button className='btn-reservar' type="submit" onClick={handleSubmit}>
              Reservar
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default AddReservation;
