import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import AdminLogin from './AdminLogin'

const RegisterRouting = () => {
  return (
    <>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminLogin /> } />
    </Routes>
    </>
  )
}

export default RegisterRouting