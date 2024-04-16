import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, HashNavigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const About = () => {
    return(
        <>
         <section className="p-[20px] bg-[#FAFBFC] lg:p-[50px] mt-20">
                <div
                    className="text-[20px] lg:text-[36px] font-semibold flex justify-center m-10">
                    Their opinion about Peworld
                </div>
                <div className="flex justify-center">
                    <div className="w-full justify-items-center">
                        <div className="justify-items-center z-[-10]">
                            <Swiper
                                spaceBetween={30}
                                hashNavigation={{
                                    watchState: true
                                }}
                                pagination={{
                                    clickable: true
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation, HashNavigation]}
                                className="mySwiper">
                                <SwiperSlide data-hash="slide1">
                                    <div className="flex justify-center">
                                        <img
                                            className="h-[40px] w-[40px] rounded-full border-8 border-[#FBB0175E] m-5 lg:h-[120px] lg:w-[120px]"
                                            src="/assets/image/avatar-icon.png"
                                            alt="logo-peworld" />
                                    </div>
                                    <div className="px-5">
                                        <h5 className="text-gray-900 text-[30px] font-medium mb-2 flex justify-center">
                                            Thomas Shelby
                                        </h5>
                                        <div className="flex justify-center mb-4 text-gray-700">
                                            Web Developer
                                        </div>
                                        <p className="flex justify-center mb-4 text-gray-700">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui
                                            rhoncus auctor.
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide data-hash="slide2">
                                    <div className="flex justify-center">
                                        <img
                                            className="h-[30px] w-[30px] rounded-full border-8 border-[#FBB0175E] m-5 lg:h-[120px] lg:w-[120px]"
                                            src="/assets/image/christian-buehner-DItYlc26zVI-unsplash 1.png"
                                            alt="logo-peworld" />
                                    </div>
                                    <div className="px-5">
                                        <h5 className="text-gray-900 text-[30px] font-medium mb-2 flex justify-center">
                                            Van Basten
                                        </h5>
                                        <div className="flex justify-center mb-4 text-gray-700">
                                            Web Developer
                                        </div>
                                        <p className="flex justify-center mb-4 text-center text-gray-700">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui
                                            rhoncus auctor.
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide data-hash="slide3">
                                    <div className="flex justify-center">
                                        <img
                                            className="h-[30px] w-[30px] rounded-full border-8 border-[#FBB0175E] m-5 lg:h-[120px] lg:w-[120px]"
                                            src="/assets/image/card-profile.png"
                                            alt="logo-peworld" />
                                    </div>
                                    <div className="px-5">
                                        <h5 className="text-gray-900 text-[30px] font-medium mb-2 flex justify-center">
                                            Muller
                                        </h5>
                                        <div className="flex justify-center mb-4 text-gray-700">
                                            Web Developer
                                        </div>
                                        <p className="flex justify-center mb-4 text-gray-700">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui
                                            rhoncus auctor.
                                        </p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="pt-20">
    <div className="container mx-auto">
      <div className="flex flex-col">
        <div className="w-full">
          <h1 className="font-semibold text-center font-openSans text-Black lg:text-3xl lg:leading-normal">
            Their opinion about peworld
          </h1>
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-5 mt-10 lg:flex-row">
            <div className="items-center p-5 mb-4 bg-white shadow-inner ">
              <img
                className="mx-auto border-4 border-solid rounded-full border-yellow"
                src="/assets/image/card-profile.png"
                alt=""
              />
              <h1 className="text-xl font-semibold text-center font-openSans text-Black">
                Harry Styles
              </h1>
              <h1 className="text-sm font-semibold text-center text-gray-300 font-openSans ">
                Web Developer
              </h1>
              <p className="text-sm font-normal font-openSans text-Grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
            </div>
            <div className="p-5 mb-4 text-center bg-white shadow-inner ">
              <img
                className="border-4 border-solid rounded-full border-yellow"
                src="/assets/image/card-profile.png"
                alt=""
              />
              <h1 className="text-xl font-semibold text-center font-openSans text-Black">
                Harry Styles
              </h1>
              <h1 className="text-sm font-semibold text-center text-gray-300 font-openSans ">
                Web Developer
              </h1>
              <p className="text-sm font-normal font-openSans text-Grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
            </div>
            <div className="p-5 mb-4 text-center bg-white shadow-inner ">
              <img
                className="border-4 border-solid rounded-full border-yellow"
                src="/assets/image/card-profile.png"
                alt=""
              />
              <h1 className="text-xl font-semibold text-center font-openSans text-Black">
                Harry Styles
              </h1>
              <h1 className="text-sm font-semibold text-center text-gray-300 font-openSans ">
                Web Developer
              </h1>
              <p className="text-sm font-normal font-openSans text-Grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
        </>
    )
}

export default About