import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import InfoImg from '../../components/InfoImg/InfoImg'
import Slogan from '../../components/Slogan/Slogan'
// import GoogleMaps from '../../components/GoogleMaps/GoogleMaps'
import Schelude from '../../components/Schedule/Schelude'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import Carousel from '../../components/Carousel/Carousel'

import Location from '../../components/Location/Location'

function Home() {
    return (
        <div className='todo'>   
            <header>
                <Navbar></Navbar>
            </header>       

            <section>
                <InfoImg></InfoImg>
            </section>
            
            <section>
                <Slogan></Slogan>
            </section>

            {/* <section>
                <GoogleMaps></GoogleMaps>
            </section> */}

            <section>
            <Menu></Menu>
            </section>

            <section className='carts'>
                <Schelude></Schelude>
                <Location></Location>
            </section>

            <section>
                <Carousel></Carousel>
            </section>

            <section>
                <Footer></Footer>
            </section>
        </div>
    )
}
export default Home

// import React from 'react'

// function Home() {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home