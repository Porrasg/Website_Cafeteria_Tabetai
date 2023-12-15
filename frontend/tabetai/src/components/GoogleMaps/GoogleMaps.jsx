import React from 'react';
import './GoogleMaps.css'

const GoogleMaps = () => {
  return (
    <div className='map-container'>
        <iframe
                className='map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1482.0121932530515!2d-84.7334004861875!3d9.984148434072871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa031a866c3c061%3A0x59f9256b4df3f9cc!2sX7M8%2BRFG%2C%20Provincia%20de%20Puntarenas%2C%20El%20Roble%2C%20El%20Roble%202!5e0!3m2!1ses-419!2scr!4v1702584647935!5m2!1ses-419!2scr"
                width="800"
                height="600"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
        ></iframe>
    </div>
  );
};

export default GoogleMaps;
