import React from "react";
import CardInfoDetailCompany from "../../components/CardProfilCompany";


function ProfileCompanySection() {
    return (
        <div className="bg-[#E5E5E5] flex justify-center h-auto pb-24">
            <div className="container">
                <div
                    className="w-full mt-10 mb-5 text-xl font-semibold md:flex md:justify-between">
                    <div className="md:w-full">
                        <CardInfoDetailCompany/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCompanySection