import React from "react";


const Optionlogin = () => {
    return(
        <>
        <main className="block bg-[#F6F7F8] h-screen md:flex lg:flex">
        <section>
          <div className="block w-screen h-screen bg-cover bg-hero lg:hidden">
            <div className="h-[85%]  w-screen">
              <div className="">
                <div className="">
                  <img
                    className="pt-10 pl-5 lg:hidden m-"
                    src="/assets/image/logo-2.svg"
                  />
                </div>

                <div className="m-10 text-[36px] font-semibold text-white flex justify-center mt-[130px]">
                  Temukan developer <br /> berbakat & terbaik <br /> di berbagai
                  bidang <br /> keahlian
                </div>

                <div className="flex justify-center m-5 mt-[150px]">
                    <button className="bg-[#FFFF] hover:bg-[#5E50A1] text-[#5E50A1] font-bold py-2 px-4  h-[50px] w-[100%] rounded">
                    Masuk sebagai pekerja
                    </button> 
                </div>
                <div>
                  <div className="">
                    <div className="flex justify-center bg-[#FFFFF] text-[#FFFF] font-bold">
                      atau
                    </div>
                  </div>
                </div>
                <div className="flex justify-center m-5">
                    <button className="bg-[#FFFFF] border hover:bg-[#5E50A1] text-white font-bold py-2 px-4  h-[50px] w-[100%] rounded">
                    Masuk sebagai perekrut
                    </button>
                </div>

                <div className="flex justify-center m-7"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="hidden w-[0px] lg:flex lg:w-screen">
          <div className="m-[50px] align-center h-[85%] bg-hero from-violet-500 to-fuchsia-500 bg-no-repeat bg-cover">
            <div className="">
              <img
                className="hidden pt-10 pl-10 lg:flex"
                src="/assets/image/logo-2.svg"
              />
            </div>
            <div className="lg:text-[44px] m-[50px] mt-[130px] font-semibold text-white">
              Temukan developer <br /> berbakat & terbaik <br /> di berbagai
              bidang <br /> keahlian
            </div>
          </div>
        </section>
        <section className="hidden w-screen lg:flex lg:w-screen h-">
          <div className="h-[85%] lg:m-[50px] flex items-center">
            <div className="">
              <div className="">
                <img
                  className="pt-10 pl-5 lg:hidden"
                  src="/assets/image/Logo.svg"
                />
              </div>

              <div className=" hidden lg:flex lg:pl-5 lg:text-[32px] font-bold text-[#46505C]">
                Hello, Pewpeople
              </div>

              <div className="pl-5 pt-2 text-[14px] text-[#858D96]">
                Please choose login option below
              </div>

              <div className="flex justify-center m-5">
                  <button className="bg-[#5E50A1] text-white font-bold py-2 px-4  h-[50px] w-[100%] rounded">
                    Login as Employee
                  </button>
              </div>
              <div>
                <div className="">
                  <div className="flex justify-center bg-[#FFFFF] font-bold text-[#46505C]">
                    or
                  </div>
                </div>
              </div>
              <div className="flex justify-center m-5">
                  <button className="bg-[#FFFFF] text-[#5E50A1] border border-[#5E50A1] font-bold py-2 px-4 h-[50px] w-[100%] rounded">
                    Login as Employer
                  </button>
              </div>

              <div className="flex justify-center m-7"></div>
            </div>
          </div>
        </section>
      </main>
        </>
    )
}

export default Optionlogin