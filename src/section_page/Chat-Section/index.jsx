import React from "react";


const ChatSection = () =>{
    return(
       <div>
          <div className="h-screen px-4 mx-auto">        
                <div className="flex justify-start">
                <span className="mt-8 text-lg font-semibold font-openSans text-Grey2 ">Utama</span>
                </div>
              <div className="flex items-center justify-center w-full h-screen">
                <img className="object-center" src="assets/image/inbox.png" alt="inbox"/>
              </div>    
          </div>
       </div>
    )
}

export default ChatSection