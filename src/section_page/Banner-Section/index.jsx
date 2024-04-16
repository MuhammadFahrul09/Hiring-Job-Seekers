import React from "react";

const Banner = () =>{
    return(
        <section className="py-20">
                <div className="w-full flex justify-center h-[300px]">
                    <div className="flex justify-center w-[100%] h-[100%] p-10">
                        <div
                            className="flex justify-between items-center w-[90%] bg-banner bg-no-repeat bg-cover rounded-tl-[40px] rounded-br-[40px] rounded-tr-lg rounded-b-lg">
                            <div className="text-[25px] m-5 lg:text-[36px] lg:ml-[40px] text-[#FFFFFF]">
                                Lorem ipsum
                                <br />
                                dolor sit amet
                            </div>
                            <div className="flex m-5">
                                <div>
                                    <button
                                        className="bg-[#FFFFFF] hover:bg-[#5E50A1] text-[#5E50A1] font-semibold hover:text-white py-4 px-6 border border-[#5E50A1] hover:border-transparent rounded mr-5">
                                        Mulai Dari Sekarang
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}
export default Banner