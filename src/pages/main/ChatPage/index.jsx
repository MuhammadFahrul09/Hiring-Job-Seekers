import React from "react";
import NavbarHome from "../../../components/Navbar-Home";
import FooterMobile from "../../../components/FooterMobile";
import ChatSection from "../../../section_page/Chat-Section";


const ChatPage = () =>{
    return(
        <div>
            <NavbarHome />
            <ChatSection/>
            <FooterMobile/>
        </div>
        
      
    )
}

export default ChatPage