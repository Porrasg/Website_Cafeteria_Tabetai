import React from 'react'
// import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import InfoImg from '../../components/InfoImg/InfoImg'
import Slogan from '../../components/Slogan/Slogan'
// import GoogleMaps from '../../components/GoogleMaps/GoogleMaps'
import Schelude from '../../components/Schedule/Schelude'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import Carousel from '../../components/Carousel/Carousel'

function Home() {
    return (
        <div>   
            <header>
                <Navbar></Navbar>
            </header>       

            <section>
                <InfoImg></InfoImg>
            </section>
            
            <section>
                <Slogan></Slogan>
            </section>

            <section>
                <Carousel></Carousel>
            </section>

            {/* <section>
                <GoogleMaps></GoogleMaps>
            </section> */}

            <section>
            <Menu></Menu>
            </section>

            <section>
            <Schelude></Schelude>
            </section>

            <section>
                <Footer></Footer>
            </section>
        </div>
    )
}
export default Home