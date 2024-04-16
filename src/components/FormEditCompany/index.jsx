import React from "react";
import Input from "../Input";

const FormCompanyEdit = () => {
    return(
        <>
        <div className="flex ">
          <div className="w-full px-5 py-5 mb-10 bg-white rounded-lg ">
            <div className="w-full md:w-[100%] text-base md:text-lg">
              <div className="text-[22px] mb-5 mx-5">Data Diri</div>
                <hr className="mt-10 " />
              <div className="mt-10 ml-5 mr-5 ">
                <div className="mb-4">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Nama Perusahaan
                  </span>
                  <Input
                    className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                    type="text"
                    placeholder="Masukan nama perusahan"
                  />
                </div>
                <div className="mb-4">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Description
                  </span>
                  <Input
                    className="h-[140px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                    id="username"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div className="mb-4">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Email
                  </span>
                  <Input
                    className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                    id="username"
                    type="text"
                    placeholder="Insert email"
                  />
                </div>
                <div className="mb-4">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Instagram
                  </span>
                  <Input
                    className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                    id="username"
                    type="text"
                    placeholder="Insert instagram"
                  />
                </div>
                <div className="mb-4">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Phone
                  </span>
                  <Input
                    className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                    id="username"
                    type="text"
                    placeholder="Insert phone"
                  />
                </div>
                <div className="mb-4">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Linkedin
                  </span>
                  <Input
                    className="h-[50px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[13px] font-light"
                    id="username"
                    type="text"
                    placeholder="Insert linkedin"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default FormCompanyEdit