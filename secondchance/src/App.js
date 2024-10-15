
import React from 'react'
import UserRouting from './usercomponents/UserRouting'
import AdminRouting from './Admincomponents/AdminRouting'
import StoreRouting from './storeadmincomponents/StoreRouting'
import DeliveryRouting from './deliverycomponents/DeliveryRouting'
import RegisterRouting from './registercomponents/RegisterRouting'

const App = () => {
  return (
    <>
    <UserRouting />
    <AdminRouting />
    <StoreRouting />
    <DeliveryRouting />
    <RegisterRouting />
    </>
  )
}

export default App