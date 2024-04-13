import React from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate
    return(
        <>
            <div>
            <div className="hidden md:flex">
                <div className="flex justify-center bg-[#5E50A1] w-full h-[90px]">
                    <div className="container flex items-center ">
                        <p className="text-3xl font-bold text-white">Top Jobs</p>
                    </div>
                </div>
            </div>
            <div className="flex md:hidden bg-[]">
                <div className="flex justify-center bg-[#5E50A1] w-full h-[180px] relative rounded-br-3xl">
                    <img
                        src="/assets/image/bell-icon-white.png"
                        alt=""
                        className="absolute w-8 right-7 top-[70px]"
                        onClick={()=> navigate('/notifikasi')}
                        />
                    <img
                        src="/assets/image/shadow-header.png"
                        alt=""
                        className="absolute bottom-0 w-full rounded-br-3xl"/>
                    <div className="container flex flex-col ">
                        <img src="/assets/image/Union.png"  alt="" className="w-[94px] mb-9"/>
                        <div>
                            <p className="text-lg text-white">Sen, 21 April 2020</p>
                            <p className="text-2xl text-white semibold">Hai, Mohammad!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header