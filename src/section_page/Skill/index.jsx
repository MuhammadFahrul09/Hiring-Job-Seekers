import React from 'react'

const Skill = () => {
    return (
        <>
           <section className="mt-20">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row">
        <div className="self-center w-full px-4">
          <h1 className="font-semibold font-openSans text-Black lg:text-3xl lg:leading-normal lg:w-[500px] text-center lg:text-left">
            Skill Tallent
          </h1>
          <p className="font-normal text-center text-gray-300 font-openSans lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
          <div className="flex justify-between mt-10">
            <div className="flex content-center gap-3">
              <img src="/assets/image/bullet-2.svg" alt="" />
              <a className="font-semibold text-gray-300 font-openSans">Java</a>
            </div>
            <div className="flex content-center gap-3">
              <img src="/assets/image/bullet-2.svg" alt="" />
              <a className="font-semibold text-gray-300 font-openSans">
                Golang
              </a>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <div className="flex content-center gap-3">
              <img src="/assets/image/bullet-2.svg" alt="" />
              <a className="font-semibold text-gray-300 font-openSans">
                Kotlin
              </a>
            </div>
            <div className="flex content-center gap-3">
              <img src="/assets/image/bullet-2.svg" alt="" />
              <a className="font-semibold text-gray-300 font-openSans">C++</a>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <div className="flex content-center gap-3">
              <img src="/assets/image/bullet-2.svg" alt="" />
              <a className="font-semibold text-gray-300 font-openSans">PHP</a>
            </div>
            <div className="flex content-center gap-3">
              <img src="/assets/image/bullet-2.svg" alt="" />
              <a className="font-semibold text-gray-300 font-openSans">Ruby</a>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <div className="flex content-center gap-3">
              <img src="/assets/image/bullet-2.svg" alt="" />
              <a className="font-semibold text-gray-300 font-openSans">
                Javascript
              </a>
            </div>
            <div className="flex content-center gap-3">
              <img src="/assets/image/bullet-2.svg" alt="" />
              <a className="font-semibold text-gray-300 font-openSans">
                10+ Bahasa lainnya
              </a>
            </div>
          </div>
        </div>
        <div className="w-full px-4">
          <img className="w-full mt-10" src="/assets/image/bg2.png" alt="" />
        </div>
      </div>
    </div>
  </section> 
        </>
    )
}

export default Skill