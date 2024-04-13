import React from 'react'



const Navbar = () => {
    return (
    <>
    <nav>
    <div className="container px-4 py-6 mx-auto md:px-6">
      <div className="flex justify-between">
        <div>
          <img src="/assets/image/Logo.svg"/>
        </div>
        <div className="hidden gap-4 sm:block">
          <button className="px-4 py-2 text-sm font-semibold bg-white rounded-md font-openSans text-Purple border-Purple">
            Masuk
          </button>
          <button className="px-4 py-2 text-sm font-semibold text-white border-none rounded-md bg-Purple font-openSans">
            Daftar
          </button>
        </div>
      </div>
    </div>
  </nav>
 </>
    )
}

export default Navbar