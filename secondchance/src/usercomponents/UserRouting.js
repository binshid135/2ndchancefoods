import React from 'react'
import { Routes,Route } from 'react-router-dom'
import UserHome from './UserHome'
import Recipes from './Recipes'
import Cart from './Cart'
import PaymentSuccess from './PaymentSuccess'
import MyOrders from './MyOrders'
import Breakfast from './Breakfast'
import Dinner from './Dinner'
import Lunch from './Lunch'

const UserRouting = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<UserHome />}/>
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/breakfast' element={<Breakfast />} />
        <Route path='/lunch' element={<Lunch />} />
        <Route path='/dinner' element={<Dinner />} />

        <Route path='/cart' element={<Cart />} />
        <Route path='/successpage' element={<PaymentSuccess />} />
        <Route path='/myorders' element={<MyOrders />} />
    </Routes>
    </>
  )
}

export default UserRouting