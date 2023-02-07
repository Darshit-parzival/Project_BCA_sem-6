import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import './Main.css'
import AdminSignIn from './pages/Admin/AdminSignIn'
import Contact from './pages/Public/Contact'
import Forgot from './pages/Public/Forgot'
import Home from './pages/Public/Home'
import Index from './pages/Public/Index'
import SignIn from './pages/Public/SignIn'
import Signup from './pages/Public/Signup'

const Main = ({getIsAdminPanel}) => {
  const user = useSelector(state => state.user.user)
  return (
    <div className='main'>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/home' element={user!=="null" ? <Home /> : <SignIn />} />
        <Route path='/admin' element={<AdminSignIn getIsAdminPanel={getIsAdminPanel} />} />
        <Route path='/' element={<Index />} />
      </Routes>
    </div>
  )
}

export default Main