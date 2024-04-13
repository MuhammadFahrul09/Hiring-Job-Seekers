import React from "react";
import CardDetailPortofolio from "../../components/CardDetailPortofolio";
import CardInfoDetail from "../../components/CardDetailProfile";


const PortofolioSection = () => {
    return(
        <div>
            <div className="hidden md:flex md:bg-[#5E50A1] md:h-[370px] md:w-full"></div>
                <div className="bg-[#E5E5E5] flex justify-center h-auto pb-24">
                     <div className="container">
                        <div className="md:mt-[-300px] mt-[70px] mb-5 text-xl font-semibold w-full md:flex md:justify-between">
                            <div className="md:w-[29%]">
                                <CardInfoDetail/>      
                            </div>
                        <div className="md:w-[69%]">
                            <CardDetailPortofolio/>
                        </div>
                        </div>
                    <div/>
                </div>  
             </div>
        </div>
    
    )
        
    
}
export default PortofolioSection