import React from "react";
import { Link } from "react-router-dom";


const Notifikasi = () =>{
    return(
       <div>
          <div className="h-screen px-4 mx-auto">        
                <div className="flex items-center gap-3 pt-10">
                    <Link to='/home'>
                    <img className="w-[32px] h-[32px]" src="assets/image/arrow.png" alt="" />
                    </Link>
                    <span className="text-lg font-semibold font-openSans text-Grey2 ">Utama</span>
                </div>
              <div className="flex items-center justify-center w-full h-screen">
                <img className="object-center" src="assets/image/inbox.png" alt="inbox"/>
              </div>    
          </div>
       </div>
    )
}

export default Notifikasi