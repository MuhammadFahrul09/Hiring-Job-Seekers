import React from 'react'
import Navbar from '../../../section_page/navbar'
import Hero from '../../../section_page/hero'
import Talentsection from '../../../section_page/talents_section/main'
import Skill from '../../../section_page/Skill'
import About from '../../../section_page/about'

function Landingpage() {
    return(
        <>
        <div>
            <Navbar />
            <Hero />
            <Talentsection />
            <Skill />
            <About />
        </div>
        </>
    )
}

export default Landingpage