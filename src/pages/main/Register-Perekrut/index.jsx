import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import Input from "../../../components/Input";
import api from "../../../config/api";
import axios from "axios";



const RegisterPerekrut = () => {  
  const navigate = useNavigate();
  const [form, setform] = useState({
    name: "",
    email: "",
    phone:"",
    password: "",
    company:"",
    position:""
  });

  
  const handleRegister = ()=>{
    api.post(`recruiters/register`,{
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password,
        company: form.company,
        position: form.position
    })
    .then(()=>{
      alert('selamat berhasil login')
      navigate('/login')
    })
    .catch((err)=>{
      console.log(err.response);
      alert(err.response.data.massage)
    })
    // .then((res)=>{
    //   alert('selamat berhasil login')
    //   navigate('/login')
    // })
    // .catch((err)=>{
    //   console.log(err.response);
    // })
  }
  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
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
        
        <Input
          form={form.name}
          label="Nama"
          type="text"
          name="name"
          placeholder="Masukkan Nama"
          onChange={handleChange}
        />
        <Input
          form={form.email}
          label="Email"
          type="email"
          name="email"
          placeholder="Masukan kata sandi"
          onChange={handleChange}
        />
        <Input
          form={form.company}
          label="Perusahaan"
          type="text"
          name="company"
          placeholder="Masukkan nama Perusahaan"
          onChange={handleChange}
        />
        <Input
          form={form.position}
          label="Jabatan"
          type="text"
          name="position"
          placeholder="Posisi di perusahaan Anda"
          onChange={handleChange}
        />
        <Input
          form={form.phone}
          label="No Hanphone"
          type="text"
          name="phone"
          placeholder="Masukkan nomor Handphone"
          onChange={handleChange}
        />
        <Input
          form={form.password}
          label="Password"
          type="password"
          name="password"
          placeholder="Masukan kata sandi"
          onChange={handleChange}
        />
        <span className="text-lg font-normal text-right font-openSans text-Black">
          Lupa Kata Sandi?
        </span>
        <div className="mt-6">
          <button onClick={handleRegister} className="w-full p-4 text-lg font-bold text-white border-none rounded-md bg-yellow font-openSans">
            Masuk
          </button>
        </div>
        <div className="mt-6 text-center">
            <span className="font-openSans text-Black font-normal text-[16px]">Anda belum punya akun?
            <Link to="/register">
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

export default RegisterPerekrut