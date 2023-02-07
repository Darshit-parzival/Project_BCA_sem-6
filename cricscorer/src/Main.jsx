import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import './Main.css'
import HostIndex from './pages/Controller/HostIndex'
import Master from './pages/Controller/Master'
import PlayersName from './pages/Controller/PlayersName'
import PlayersSelection from './pages/Controller/PlayersSelection'
import Toss from './pages/Controller/Toss'
import Contact from './pages/Public/Contact'
import Forgot from './pages/Public/Forgot'
import Home from './pages/Public/Home'
import Index from './pages/Public/Index'
import SignIn from './pages/Public/SignIn'
import Signup from './pages/Public/Signup'

const Main = () => {
  const user = useSelector(state => state.user.user)
  return (
    <div className='main'>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/home' element={user ? <Home /> : <SignIn />} />
        <Route path='/hostIndex' element={ <HostIndex /> } />
        <Route path='/playersName' element={ <PlayersName /> } />
        <Route path='/toss' element={ <Toss /> } />
        <Route path='/playersSelection' element={ <PlayersSelection /> } />
        <Route path='/master' element={ <Master /> } />
        <Route path='/' element={<Index />} />
      </Routes>
    </div>
  )
}

export default Main