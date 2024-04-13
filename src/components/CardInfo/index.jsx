import React from "react";

const CardInfo = () =>{
    return(
        
        <div className="container py-10 mx-auto">
            <div className="flex flex-col w-full bg-white rounded">
                <div className="flex items-center justify-between px-6 py-10">
                    <div className="flex items-center">
                        <div>
                            <img className="border-4 border-none rounded-full " src="/assets/image/card-profile.png" alt=""/>
                        </div>
                        <div className="flex flex-col ml-5">
                            <h3 className="m-0 font-openSans font-bold text-Black text-[16px]">Louis Tomlinson</h3>
                            <h3 className="m-0 font-openSans font-normal text-Grey2 text-[14px] mt-[10px]">Web developer</h3>
                            <div className="flex gap-2">
                                <img src="/assets/image/maps.svg"/>
                                <h3 className="m-0 font-openSans font-normal text-Grey2 text-[14px]">Lorem ipsum</h3>
                            </div>
                            <div className="flex gap-3 mt-5">
                                <div>
                                    <button className="px-4 py-1 bg-orange-300 rounded font-openSans text-[10px] font-semibold text-white border border-orange-400 md:text-[10px] lg:text-[12px] outline-none">
                                        PHP
                                    </button>
                                </div>
                                <div>
                                    <button type="submit" className="px-4 py-1 bg-orange-300 rounded font-openSans text-[10px] font-semibold text-white border border-orange-400 md:text-[10px] lg:text-[12px] outline-none">
                                        Javascript
                                    </button>
                                </div>
                                <div>
                                    <button type="submit" className="px-4 py-1 bg-orange-300 rounded font-openSans text-[10px] font-semibold text-white border border-orange-400 md:text-[10px] lg:text-[12px] outline-none">
                                        HTML
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className=" m-2 mx-5 px-4 py-2 bg-Purple border-none rounded font-openSans font-semibold text-[16px] text-white hidden md:block">
                            Lihat Profile
                        </button>
                    </div>
                  </div>
            </div>    
        </div>
        
    )
}

export default CardInfo