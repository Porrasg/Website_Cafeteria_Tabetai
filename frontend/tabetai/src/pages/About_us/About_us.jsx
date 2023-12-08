import React from 'react'
// import About from '../../components/About/About.jsx'
import Navbar from '../../components/Navbar/Navbar'
import AboutUsImg from '../../components/AboutUsImg/AboutUsImg'
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
                <AboutUsImg></AboutUsImg>
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