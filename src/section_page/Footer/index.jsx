import React from "react";
import { useNavigate } from "react-router-dom";
import FooterMobile from "../../components/FooterMobile";

const Footer = () =>{
    const navigate = useNavigate;
    return(
        <div>
            <div className="flex md:hidden">
                <FooterMobile/>
            </div>
            <div className="bottom-0 hidden md:flex">
                <section className="flex justify-center w-screen bg-[#5E50A1]">
                    <div className="container text-lg text-white">
                        <div className="flex flex-col pt-[70px] pb-10">
                            <div className="w-[30%]">
                                <img
                                    className="w-[178px] h-[50px] "
                                    src="/assets/image/logo-2.svg"
                                    alt="logo"/>
                                <p className="my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                                    euismod ipsum et dui rhoncus auctor.</p>
                            </div>
                            <hr className="h-[1.5px] my-8 mb  border-0 bg-white "></hr>
                            <div className="flex justify-between">
                                <p>2020 Pewworld. All right reserved</p>
                                <div className="flex">
                                    <p className="mr-20">Telepon</p>
                                    <p>Email</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Footer

