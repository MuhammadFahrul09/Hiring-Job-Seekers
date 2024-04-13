import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../section_page/Footer";
import NavbarHome from "../../../components/Navbar-Home";
import HomeSection from "../../../section_page/Home-Section";


const Home = () =>{
    return(
        <>
        <NavbarHome/>
        <Header />
        <HomeSection/>
        <Footer />
        </>
    )
}

export default Home