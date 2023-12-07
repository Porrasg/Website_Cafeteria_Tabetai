import React from 'react'
import Team from '../../img/conference-1886025_1280.jpg'
import './TextAboutUs.css'

function TextAboutUs() {
  return (
    <div className='container-text-photo'>

        <div className='column-1'>
            <span className='left-text'> 
          
¡Bienvenidos a Tabetai, el rincón creativo de Puntarenas! Somos una pastelería especializada en pasteles decorados con historias únicas. Disfruta de nuestro café excepcional y bocadillos finos que complementan perfectamente nuestras delicias. En Tabetai, celebramos la comunidad puntarenense y cada visita es una oportunidad para compartir momentos especiales. Únete a nosotros para descubrir la magia de Tabetai, donde la creatividad y el sabor se encuentran en cada bocado y sorbo. ¡Te esperamos para vivir una experiencia única!
            </span>
        </div>

        <div className='column-2'>
            <img className='right-photo' src={Team} alt="" />
        </div>

    </div>
  )
}

export default TextAboutUs