// Contacts.js
import React from 'react';
import './Contacts.css';

import { FaPhoneSquareAlt } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import { MdOutgoingMail } from 'react-icons/md';

function Contacts() {
  return (
    <div className="contacts-container">
      <h1>Contacta con nosotros</h1>

      <div className="contact-section">
        <div className="contact-icon">
          <FaPhoneSquareAlt />
        </div>
        <div className="contact-info">
          <h2>Contacto telefónico</h2>
          <a href="">26630527</a>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-icon">
          <FaWhatsappSquare />
        </div>
        <div className="contact-info">
          <h2>Vía Whatsapp directo</h2>
          <a href="https://walink.co/312af0">8863-0527</a>
          <br />
          <a href="https://wa.link/mztsoq">8718-4584</a>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-icon">
        </div>
        <div className="contact-info">
          <h2>Redes Sociales</h2>
          <div className="social-icon">
            <AiFillInstagram />
          </div>
          <a href="https://www.instagram.com/tabetai_cr/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" className="social-link">
            Instagram
          </a>
          <p>@tabetai_cr</p>

          <br />

          <div className="social-icon">
            <FaTiktok />
          </div>
          <a href="#" className="social-link">
            Tiktok
          </a>
          <p>Tabetai</p>

          <br />

          <div className="social-icon">
            <FaSquareFacebook />
          </div>
          <a href="https://www.facebook.com/TabetaiCR?locale=es_LA" className="social-link">
            Facebook
          </a>
          <p>Tabetai</p>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-icon">
          <MdOutgoingMail />
        </div>
        <div className="contact-info">
          <h2>Otros medios</h2>
          <p>tabetai@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
