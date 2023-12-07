import React from 'react'
// import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Info_img from '../../components/Info_img/Info_img'
import Slogan from '../../components/Slogan/Slogan'
import GoogleMaps from '../../components/GoogleMaps/GoogleMaps'
import Schelude from '../../components/Schedule/Schelude'
import Menu from '../../components/Menu/Menu'

function Home() {
    return (
        <div>   
            <header>
                <Navbar></Navbar>
            </header>       

            <section>
                <Info_img></Info_img>
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

            <section>
            <Schelude></Schelude>
            </section>
        </div>
    )
}
export default Home