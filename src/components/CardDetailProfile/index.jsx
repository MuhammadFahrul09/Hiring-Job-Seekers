import React from "react";

const CardInfoDetail = ()=> {
    const img = 'assets/image/card-profile.png'

    // const {button, sosmed} = props
    // const skill = [
    //     {
    //         tittle: "PHP"
    //     },{
    //         tittle: "javascript"
    //     },{
    //         tittle: "golang"
    //     },{
    //         tittle: "Kotlin"
    //     },{
    //         tittle: "C++"
    //     },{
    //         tittle: "C++"
    //     },{
    //         tittle: "React"
    //     },{
    //         tittle: "Veu.js"
    //     }
    // ]
    const classSkill = "btn-secondary px-3 py-1 mr-3 my-3 text-sm border-Black"
    return(
        
            <div className="flex ">
                <div className="w-full px-5 py-5 mb-10 bg-white rounded-lg ">
                     <div className="flex-col items-center justify-center py-10 card-profil">
                                <div className="flex flex-col ">
                                    <div className="flex justify-center w-full mr-5">
                                        <img
                                            className="w-[150px]"
                                            src={img}
                                            alt="smhfbdhf"/>
                                    </div>
                                    <div className="">
                                        <p className="my-5 text-3xl font-semibold text-black">Mohammed</p>
                                        <p className="mb-2 text-black">Developer</p>
                                        <p className="text-[#9EA0A5] mb-3 font-normal text-base">Web Dev</p>
                                        <div className="text-base font-normal">
                                            <div className="flex items-center mb-3">
                                                <img src="/assets/image/map-pin.png" alt="maps" className="w-4 h-4 mr-2"/>
                                                <p className="text-[#9EA0A5]">Sulsel</p>
                                            </div>
                                            <div className="flex items-center mb-3">
                                                <img src="/assets/image/phone-icon.png" alt="maps" className="w-4 h-4 mr-2"/>
                                                <p className="text-[#9EA0A5]">08998787</p>
                                            </div>
                                            <p className="text-[#9EA0A5] mb-3">ff</p>
                                            <p className="text-[#9EA0A5] mb-10">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
                                                Curabitur eu lacus fringilla, vestibulum risus at.</p>
                                        </div>
                                        <div >
                                         {/* {button}  */}
                                        </div>
                                        <div className="skill">
                                            <p className="mb-5 font-semibold text-black tesxt-2xl">Skill</p>  
                                            <button className={classSkill}>php</button>
                                        </div>
                                    </div>
                                    {/* {sosmed} */}
                                </div>
                            </div>
                </div>
        </div>
    )
}
    
    export default CardInfoDetail
    

