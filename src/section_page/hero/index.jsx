import React from 'react'

const Hero = () => {
    return (
        <>
          <section className="pt-6">
    <div className="container mx-auto">
      <div className="flex flex-col text-center lg:flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse md:text-left ">
        <div className="self-center w-full px-4">
          <h1 className="text-3xl font-semibold leading-normal font-openSans text-Black lg:text-5xl lg:leading-normal lg:w-[500px]">
            Talenta terbaik negri untuk perubahan revolusi 4.0
          </h1>
          <p className="font-normal text-gray-300 font-openSans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
          <button className="px-6 py-4 mt-6 text-xs font-semibold text-white border-none rounded-md bg-Purple font-openSans ">
            Mulai Dari Sekarang
          </button>
        </div>
        <div className="self-end w-full px-4 ">
          <img
            className="max-w-full min-w-[300px] pt-4 mx-auto"
            src="/assets/image/hero.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>  
        </>
    )
}

export default Hero