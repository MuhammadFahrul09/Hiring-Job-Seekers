import React from "react";
import NavbarHome from "../../../components/Navbar-Home";
import ProfileCompanySection from "../../../section_page/ProfilCompSection";
import Footer from "../../../section_page/Footer";
import { useEffect } from "react";


const ProfilCompany =() =>{
    
    return(
        <div>
            <NavbarHome/>
            <ProfileCompanySection/>
            <Footer/>
        </div>
    )
}
export default ProfilCompany