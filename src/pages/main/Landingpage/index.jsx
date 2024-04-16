import React from 'react'
import Navbar from '../../../section_page/navbar'
import Hero from '../../../section_page/hero'
import Talentsection from '../../../section_page/talents_section/main'
import Skill from '../../../section_page/Skill'
import About from '../../../section_page/about'
import Banner from '../../../section_page/Banner-Section'
import Footer from '../../../section_page/Footer'

function Landingpage() {
    return(
        <>
        <div>
            <Navbar />
            <Hero />
            <Talentsection />
            <Skill />
            <About />
            <Banner/>
            <Footer/>
        </div>
        </>
    )
}

export default Landingpage