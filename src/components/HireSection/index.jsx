import React from "react";
import CardInfoDetail from "../CardDetailProfile";

const HireSection = () =>{
    return(
        <div className="bg-[#E5E5E5] flex justify-center h-auto pb-24">
            <div className="container">
                <div
                    className="w-full mt-10 mb-5 text-xl font-semibold md:flex md:justify-between">
                    <div className="md:w-[29%]">
                        <CardInfoDetail/>
                    </div>
                    <div className="md:w-[60%]">
                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <p className="text-3xl font-semibold text-[#1F2A36] mb-5">Hubungi Lous Tomlinson</p>
                                <p className="text-xl font-normal mb-12 text-[#46505C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et
                                    dui rhoncus auctor.</p>
                            </div>
                            <form className="flex flex-col">
                                <div className="flex flex-col">
                                    <label className="text-base font-normal text-[#9EA0A5] mb-1">Tujuan tentang pesan ini</label>
                                    <input placeholder="Projek" className="p-4 mb-6 text-lg font-normal rounded"/>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-base font-normal text-[#9EA0A5] mb-1">pesan</label>
                                    <textarea className="h-[201px] font-normal text-lg"/>
                                </div>
                                <button className="w-full p-4 mt-12 text-white btn-submit font-base bg-yellow" type="submit">
                                    Hire
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HireSection