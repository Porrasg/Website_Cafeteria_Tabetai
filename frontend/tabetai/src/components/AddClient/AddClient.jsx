import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './AddClient.css';

const AddClient = () => {
  const [full_name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [redirectToReservar, setRedirectToReservar] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/v1/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({client:{full_name, email, phone_number} }),
      });

      console.log('aaaaaaaaaaaa', response)

      if (!response.ok) {
        throw new Error('Error: ' + response.statusText);
      }

      const data = await response.json();
      console.log('SuccessDATAAAAAAAAAAA:', data);
      console.log(data.id)

      localStorage.setItem("ReservaId",data.id)



      // Establecer el estado para redirigir a /reservar
      setRedirectToReservar(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Si redirectToReservar es verdadero, redirigir a /reservar
  if (redirectToReservar) {
    // Use the Navigate component instead of Redirect
    return <Navigate to="/reservar" />;
  }

  return (
    <>
      <div className='personal'>
        <h1>Información Personal</h1>
      </div>
      <form className='form-client' onSubmit={handleSubmit}>
        <label className='label-client'>
          Nombre completo:
          <input className='input-client' type="text" value={full_name} onChange={(e) => setFullName(e.target.value)} />
        </label>
        <label className='label-client'>
          Email:
          <input className='input-client' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className='label-client'>
          Número de telefono:
          <input className='input-client' type="tel" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>

        <button className='enviar' type="submit">Siguiente</button>
      </form>
    </>
  );
};

export default AddClient;