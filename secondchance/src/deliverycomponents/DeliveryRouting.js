import React from 'react'
import { Routes,Route } from 'react-router-dom'
import OrderHomeDel from './OrderHomeDel'
import ConfirmHome from './ConfirmHome'
import OnWayHome from './OnWayHome'
import DeliveredHome from './DeliveredHome'

const DeliveryRouting = () => {
  return (
    <>
    <Routes>
        <Route path='/delivery-home' element={<OrderHomeDel />} />
        <Route path='/confirmed' element={<ConfirmHome />} />
        <Route path='/ontheway' element={<OnWayHome />} />
        <Route path='/delivered' element={<DeliveredHome />} />
    </Routes>
    </>
  )
}

export default DeliveryRouting