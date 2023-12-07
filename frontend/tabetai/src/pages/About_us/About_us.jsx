import React from 'react'
// import About from '../../components/About/About.jsx'
import Navbar from '../../components/Navbar/Navbar'
import AboutUs_Img from '../../components/AboutUsImg/AboutUs_Img'
import TextAboutUs from '../../components/TextAboutUs/TextAboutUs'
import TeamCards1 from '../../components/TeamCards1/TeamCards1'
import Footer from '../../components/Footer/Footer'

function About_us() {
    return (
        <div>
            <header>
                <Navbar />
            </header>

            <section>
                <AboutUs_Img></AboutUs_Img>
            </section>

            <section>
                <TextAboutUs></TextAboutUs>
            </section>

            <section>
                <TeamCards1></TeamCards1>
            </section>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    )
};

export default About_us