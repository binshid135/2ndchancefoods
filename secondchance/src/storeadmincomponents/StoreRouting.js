import React from 'react'
import { Routes,Route } from 'react-router-dom'
import InventoryHome from './InventoryHome'
import SalesHome from './SalesHome'
import OrderHome from './OrderHome'
import PaymentHome from './PaymentHome'

const StoreRouting = () => {
  return (
    <>
    <Routes>
        <Route path='/store-admin-home' element={<InventoryHome />}/>
        <Route path='/store-sales' element={<SalesHome />} />
        <Route path='/store-orders' element={<OrderHome />} />
        <Route path='/store-payments' element={<PaymentHome />} />
    </Routes>
    </>
  )
}

export default StoreRouting