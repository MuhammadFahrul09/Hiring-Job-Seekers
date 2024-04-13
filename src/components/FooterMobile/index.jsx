import React from "react";
import { useNavigate } from "react-router-dom";

const FooterMobile = () =>{
    const navigate = useNavigate();
    return(
        <div className="fixed bottom-0 flex w-full bg-transparent shadow md:hidden">
            <div
                className="h-20 rounded-t-[30px] bg-Purple p-7 flex w-full justify-between">
                <img src="/assets/image/home-icon.png" 
                onClick={()=> navigate('/home')}
                alt="" className="w-6 h-6"/>
                <img src="/assets/image/search.png" 
                onClick={()=> navigate("/searchmobile")}
                alt="" className="w-6 h-6"/>
                <img src="/assets/image/chat-icon.png" alt="" className="w-6 h-6" onClick={()=> navigate("/chatpage")}/>
                <img src="/assets/image/avatar-icon.png" alt="" className="w-6 h-6"/>
            </div>
            
        </div>
    )
}

export default FooterMobile