import {BrowserRouter, Routes, Route} from 'react-router-dom'
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


function Router() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/optionlogin" element={<Optionlogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chatpage" element={<ChatPage />} />
        <Route path="/user-edit" element={<UserEdit />} />
        <Route path="/searchmobile" element={<SearcMobile />} />
        <Route path="/notifikasi" element={<Notifikasi />} />
        <Route path="/profil-porto" element={<ProfilPortofolio />} />
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default Router
