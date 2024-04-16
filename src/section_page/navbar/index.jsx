import React from 'react'
import { Link } from 'react-router-dom'

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
          <Link to="/optionlogin">
          <button className="px-4 py-2 text-sm font-semibold bg-white rounded-md font-openSans text-Purple border-Purple">
            Masuk
          </button>
          </Link>
          <Link to="/optionregister">
          <button className="px-4 py-2 text-sm font-semibold text-white border-none rounded-md bg-Purple font-openSans">
            Daftar
          </button>
          </Link>
        </div>
      </div>
    </div>
  </nav>
 </>
    )
}

export default Navbar