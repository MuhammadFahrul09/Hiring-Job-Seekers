import React from "react";

const CardCompanyEdit = (props) => {
    const {name} = props;
    return(
        <>
        <div className="flex ">
        <div className="w-full px-5 py-5 mb-10 bg-white rounded-lg ">
          <div className="flex-col items-center justify-center py-10 card-profil">
            <div className="flex flex-col ">
              <div className="flex justify-center w-full mr-5">
                <img
                  className="w-[150px] rounded-full"
                  src="/assets/image/profile-picture.png"
                  alt="smhfbdhf"
                />
              </div>
              <div className="">
                <div className="text-[#9EA0A5] flex justify-center mt-5">
                  Edit
                </div>
                <p className="my-5 text-3xl font-semibold text-black">{name}</p>
                <p className="mb-2 text-black">Financial</p>
                <div className="text-base font-normal">
                  <p className="text-[#9EA0A5] mb-3">Bandung</p>
                  <p className="text-[#9EA0A5]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat orci, mollis nec gravida sed, ornare quis
                    urna. Curabitur eu lacus fringilla, vestibulum risus at.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="w-full px-8 py-4 mb-10 text-white btn-primary bg-Purple">Save</button>
        <button className="bg-transparent text-[#5E50A1] border border-[#5E50A1] rounded py-4 px-8 w-full mb-10">
          Back
        </button>
      </div>
        </>
    )
}
export default CardCompanyEdit