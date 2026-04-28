import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import {Toaster} from "react-hot-toast"
import { AuthContext } from '../context/AuthContext.jsx'
import ChangePassword from './pages/ChangePassword.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'


function App() {
  const { authUser, isAdmin } = useContext(AuthContext);
  return (
    <div className="bg-[url('/bgImage.svg')] bg-cover bg-no-repeat bg-center ">
      <Toaster />
      <Routes>
        <Route path='/' element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path='/profile' element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
        <Route path='/change-password' element={<ChangePassword />} />
        <Route path='/admin' element={isAdmin ? <AdminDashboard /> : <Navigate to='/' /> }/>
      </Routes>
    </div>
  )
}

export default App