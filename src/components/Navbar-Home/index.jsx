import React from 'react'

const NavbarHome = () => {
    return(
        <div>
            <nav className="hidden px-6 py-8 lg:flex">
    <div className="container mx-auto">
      <div className="flex justify-between">
        <div>
          <img src="/assets/image/Logo.svg" />
        </div>
        <div className="flex justify-between gap-5">
          <img src="/assets/image/bell-icon.svg" />
          <img src="/assets/image/mail-icon.svg" />
          <img src="/assets/image/Mask Group.svg" />
        </div>
      </div>
    </div>
  </nav>
        </div>
    )
}

export default NavbarHome