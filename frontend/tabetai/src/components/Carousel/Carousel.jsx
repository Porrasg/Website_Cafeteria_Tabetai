import React from 'react'
import './Carousel.css';

import Cafe from '../../img/cafes.jpg';
import Milks from '../../img/milks.jpg';
import Postre from '../../img/postres.png';
import Queque from '../../img/queque.jpg';

function Carousel() {
    return (
        <div className='allCar'>
            <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner caro-tam">
                <div class="carousel-item active">
                    <img src={Cafe} class="d-block imagenes" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={Milks} class="d-block imagenes" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={Postre} class="d-block imagenes" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={Queque} class="d-block imagenes" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    )
}

export default Carousel