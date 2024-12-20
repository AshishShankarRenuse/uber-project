import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Start from './pages/Start'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectedWrapper from './pages/CaptainProtectedWarpper'

const App = () => {
  return (
    <div>
      <Routes>
         <Route path='/' element={<Start />} />
         <Route path='/signup' element={<UserSignup />} />
         <Route path='/login' element={<UserLogin />} />
         <Route path='/captain-signup' element={<CaptainSignup />} />
         <Route path='/captain-login' element={<CaptainLogin />} />

         <Route path='/home' element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>} />

          <Route path='/users/logout' element={
            <UserProtectedWrapper>
              <UserLogout />
            </UserProtectedWrapper>} />  

          <Route path='/captain-home' element={
            <CaptainProtectedWrapper>
              <CaptainHome />
            </CaptainProtectedWrapper>} />
      </Routes>
    </div>
  )
}

export default App
