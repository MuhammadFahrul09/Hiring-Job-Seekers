import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return(
        <>
            <section className="flex items-center justify-center min-h-screen py-10 bg-Grey1">
    <div className="relative flex flex-col m-6 space-y-8 md:flex-row md:space-y-0 ">
      <div className="relative">
        <img
          src="/assets/image/bg-overlay.png"
          alt=""
          className="w-[650px] h-[650px] hidden md:block object-cover"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 hidden p-6 md:block">
          <img
            src="/assets/image/logo-2.svg"
            alt=""
            className="w-[96px] h-[44px]"
          />
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 hidden p-6 ml-14 mt-36 md:block">
          <span className="mb-3 text-[40px] font-semibold leading-normal text-white font-openSans w-[300px]">
            Temukan developer
            <br /> berbakat &amp; terbaik <br />
            di berbagai bidang
            <br /> keahlian
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center p-8 md:p-14">
        <span className="mb-3 text-3xl font-semibold font-openSans text-Black ">
          Halo, Pewpeople
        </span>
        <span className="mb-3 text-lg font-normal font-openSans text-Black ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </span>
        <div className="py-4">
          <span className="mb-2 text-sm font-normal border font-openSans">
          Nama
          </span>
          <input
            type="text"
            className="w-full h-[50px] p-2 mt-3 bg-white border rounded-md placeholder:font-light placeholder:text-Grey2 active:border active:border-Purple text-Grey2 border-Input"
            name="name"
            id="name"
            placeholder="Masukan nama panjang"
          />
        </div>
        <div className="py-4">
          <span className="mb-2 text-sm font-normal font-openSans text-Grey2">
          Email
          </span>
          <input
            type="email"
            className="h-[50px] w-full p-2 mt-3 bg-white border rounded-md placeholder:font-light placeholder:text-Grey2 text-Grey2 border-Input"
            name="mail"
            id="mail"
            placeholder="Masukan alamat email"
          />
        </div>
        <div className="py-4">
          <span className="mb-2 text-sm font-normal font-openSans text-Grey2">
          No handphone
          </span>
          <input
            type="text"
            className="h-[50px] w-full p-2 mt-3 bg-white border rounded-md placeholder:font-light placeholder:text-Grey2 text-Grey2 border-Input"
            name="phone"
            id="phone"
            placeholder="Masukan no handphone"
          />
        </div>
        <div className="py-4">
          <span className="mb-2 text-sm font-normal font-openSans text-Grey2">
            Kata Sandi
          </span>
          <input
            type="password"
            className="h-[50px] w-full p-2 mt-3 bg-white border rounded-md placeholder:font-light placeholder:text-Grey2 text-Grey2 border-Input"
            name="pass"
            id="pass"
            placeholder="Masukan kata sandi"
          />
        </div>
        <div className="py-4">
          <span className="mb-2 text-sm font-normal font-openSans text-Grey2">
            Konfirmasi Kata Sandi
          </span>
          <input
            type="password"
            className="h-[50px] w-full p-2 mt-3 bg-white border rounded-md placeholder:font-light placeholder:text-Grey2 text-Grey2 border-Input"
            name="pass"
            id="pass"
            placeholder="Masukan konfirmasi katasandi"
          />
        </div>
        <span className="text-lg font-normal text-right font-openSans text-Black">
          Lupa Kata Sandi?
        </span>
        <div className="mt-6">
          <button className="w-full p-4 text-lg font-bold text-white border-none rounded-md bg-yellow font-openSans">
            Masuk
          </button>
        </div>
        <div className="mt-6 text-center">
            <span className="font-openSans text-Black font-normal text-[16px]">Anda sudah punya akun?
            <Link to="/login"> 
            <span className="font-openSans text-yellow font-normal text-[16px] cursor-pointer">Masuk disini
            </span>
            </Link>
            </span>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}

export default Register