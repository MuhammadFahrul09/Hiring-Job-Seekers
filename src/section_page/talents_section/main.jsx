import React from 'react'

const Talentsection = () => {
    return(
        <>
        <section className="pt-20">
    <div className="container mx-auto">
      <div className="flex flex-col text-center sm:text-left lg:flex-row lg:justify-between md:text-center">
        <div className="w-full px-4">
          <img
            className="max-w-full min-w-[300px] mx-auto"
            src="/assets/image/bg1.png"
            alt=""
          />
        </div>
        <div className="items-center w-full px-4">
          <h1 className="font-semibold font-openSans text-Black lg:text-3xl lg:leading-normal lg:w-[500px] text-center lg:text-left">
            Kenapa harus mencari tallent di peworld
          </h1>
          <div className="flex justify-center gap-5 mx-auto mt-10 lg:justify-start">
            <img src="/assets/image/bullet.svg" alt="" />
            <a className="font-semibold text-gray-300 font-openSans">
              Lorem ipsum dolor sit amet.
            </a>
          </div>
          <div className="flex justify-center gap-5 mx-auto mt-10 lg:justify-start">
            <img src="/assets/image/bullet.svg" alt="" />
            <a className="font-semibold text-gray-300 font-openSans">
              Lorem ipsum dolor sit amet.
            </a>
          </div>
          <div className="flex justify-center gap-5 mx-auto mt-10 lg:justify-start">
            <img src="/assets/image/bullet.svg" alt="" />
            <a className="font-semibold text-gray-300 font-openSans">
              Lorem ipsum dolor sit amet.
            </a>
          </div>
          <div className="flex justify-center gap-5 mx-auto mt-10 lg:justify-start">
            <img src="/assets/image/bullet.svg" alt="" />
            <a className="font-semibold text-gray-300 font-openSans">
              Lorem ipsum dolor sit amet.
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}

export default Talentsection