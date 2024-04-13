import React from "react";

const About = () => {
    return(
        <>
            <section className="pt-20">
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
  </section>
        </>
    )
}

export default About