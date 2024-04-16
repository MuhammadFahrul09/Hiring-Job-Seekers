import { useEffect } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Landingpage from '../pages/main/Landingpage'
import Optionlogin from '../pages/main/Optionlogin'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Home from '../pages/main/Home'
import ChatPage from '../pages/main/ChatPage'
import UserEdit from '../pages/main/UserEdit'
import SearcMobile from '../pages/main/Search-Mobile'
import Notifikasi from '../pages/main/Notifikasi'
import ProfilPortofolio from '../pages/main/Profil-portofolio'
import OptionRegister from '../pages/main/OptionRegister'
import RegisterPerekrut from '../pages/main/Register-Perekrut'
import HirePage from '../pages/main/Hire'
import ProfilCompany from '../pages/main/ProfilComp'
import CompEditPage from '../pages/main/CompEdit'


function Router() {
  // const navigate = useNavigate()

  useEffect(()=>{
    // const refreshToken = localStorage.getItem('refreshToken')
    // const role = localStorage.getItem('role')
    // console.log('okee')
    // if(refreshToken){
    //   if(role === 'worker'){
        // navigate('/profil-company')
      // } else {
        // navigate('/home')
      // }
    // }
  }, [])
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/optionlogin" element={<Optionlogin />} />
        <Route path="/optionregister" element={<OptionRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-perekrut" element={<RegisterPerekrut />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chatpage" element={<ChatPage />} />
        <Route path="/user-edit" element={<UserEdit />} />
        <Route path="/searchmobile" element={<SearcMobile />} />
        <Route path="/notifikasi" element={<Notifikasi />} />
        <Route path="/profil-porto" element={<ProfilPortofolio />} />
        <Route path="/profil-company" element={<ProfilCompany />} />
        <Route path="/hire-page" element={<HirePage />} />
        <Route path="/comp-edit" element={<CompEditPage />} />
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default Router
