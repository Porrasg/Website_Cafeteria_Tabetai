import React from 'react';
import './Carousel.css';

import Cafe from '../../img/cafes.jpg';
import Milks from '../../img/milks.jpg';
import Postre from '../../img/postres.png';
import Queque from '../../img/queque.jpg';

function Carousel() {
    return (
        <div className='allCar'>
            <div id="carouselExampleIndicators" className="carousel slide carousel-container">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner caro-tam">
                    <div className="carousel-item active">
                        <img src={Cafe} className="d-block imagenes" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Milks} className="d-block imagenes" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Postre} className="d-block imagenes" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Queque} className="d-block imagenes" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
