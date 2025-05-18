import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './components/Landing'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { useState } from 'react'
import { useEffect } from 'react'
import { axiosInstance } from './utils/axiosInstance'
import Profile from './components/Profile'

const App = () => {
  const [user,setUser] = useState(null)

  useEffect(() => {
    const fetch = async () => {
        let res = await axiosInstance.get('/auth/profile')
    setUser(res.data.user)
    }
    fetch()
  }, [])
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' index element={<Landing user={user}/>} />
      <Route path='/dashboard'  element={user && <Dashboard />} />
      <Route path='/profile'  element={user && <Profile user={user}/>} />
      <Route path='/register'  element={<Register />} />
      <Route path='/login' element={<Login />} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App