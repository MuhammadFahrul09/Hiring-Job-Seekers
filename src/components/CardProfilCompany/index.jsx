import React from "react";
import api from "../../config/api";
import { useNavigate } from "react-router-dom";

function CardInfoDetailCompany() {
const navigate = useNavigate();
const HandleLogOut = ()=>{
    // api.get(`/auth/logout`
      
    //         )
    //         .then((res)=>{
    //             localStorage.setItem('resfreshToken', refreshToken)
    //             navigate('/login')
    //           })
    //           .catch((err)=>{
    //             console.log(err.response);
    //           })
        }
    return (
        <div className="flex flex-col">
            <div className="w-full mb-10 bg-white rounded-lg md:pb-60 ">
                <div className="md:bg-[#5E50A1] md:h-[200px] md:rounded-t-lg">
                </div>
                <div
                    className="card-profil flex-col justify-center items-center px-5 py-10 md:p-0 md:mt-[-75px]">
                    <div className="flex flex-col ">
                        <div className="flex justify-center w-full mr-5">
                            <img
                                className="w-[150px]"
                                src="/assets/image/profile-picture.png"
                                alt="smhfbdhf" />
                        </div>
                        <div className="flex flex-col mt-5 md:items-center">
                            <p className="my-5 text-2xl font-semibold text-black">PT. Martabat Jaya Abadi</p>
                            <p className="text-[#9EA0A5] mb-3 font-normal text-base">Financial</p>
                            <div className="flex flex-col text-base font-normal md:items-center">
                                <div className="flex items-center mb-3">
                                    <img
                                        src="assets/image/map-pin.png"
                                        alt="maps"
                                        className="w-4 h-4 mr-2" />
                                    <p className="text-[#9EA0A5]">Bandung</p>
                                </div>
                                {/* <div className="flex items-center mb-3">
                                            <img src="assets/phone-icon.png")} alt="maps" className="w-4 h-4 mr-2"/>
                                            <p className="text-[#9EA0A5]">0812 - 3456 - 789</p>
                                        </div> */
                                }
                                <p className="text-[#9EA0A5] mb-10 md:text-center md:w-[60%]">Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida
                                    sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                            </div>
                            <button className="btn-primary py-4 text-base font-semibold w-full md:w-[30%] bg-Purple text-white">
                                Edit Profile
                            </button>
                            <button className=" mt-4 btn-primary py-4 text-base font-semibold w-full md:w-[30%] bg-Purple text-white">
                                Keluar
                            </button>
                        </div>
                        <div className="mt-10 sosmed">
                            <div className="flex w-full my-4 md:flex md:justify-center">
                                <img
                                    className="w-[24px] mr-5 "
                                    src="assets/image/mail-icon.svg"
                                    alt="smhfbdhf" />
                                <p className="text-[#9EA0A5] font-normal text-base">Louistommo@gmail.com</p>
                            </div>
                            <div className="flex w-full my-4 md:flex md:justify-center">
                                <img
                                    className="w-[24px] mr-5"
                                    src="assets/image/instagram.png"
                                    alt="smhfbdhf" />
                                <p className="text-[#9EA0A5] font-normal text-base">Louistommo@gmail.com</p>
                            </div>
                            <div className="flex w-full my-4 md:flex md:justify-center">
                                <img
                                    className="w-[24px] mr-5"
                                    src="assets/image/github.png"
                                    alt="smhfbdhf" />
                                <p className="text-[#9EA0A5] font-normal text-base">Louistommo@gmail.com</p>
                            </div>
                            <div className="flex w-full my-4 md:flex md:justify-center">
                                <img
                                    className="w-[24px] mr-5"
                                    src="assets/image/Vector.png"
                                    alt="smhfbdhf" />
                                <p className="text-[#9EA0A5] font-normal text-base">Louistommo@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardInfoDetailCompany