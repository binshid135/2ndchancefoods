import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ProductHome from './ProductHome'
import UserManageHome from './UserManageHome'
import SalesAnalysisHome from './SalesAnalysisHome'
import MarketingManageHome from './MarketingManageHome'
import RevenueTrackHome from './RevenueTrackHome'
import ProductList from './ProductList'
import EditProducts from './EditProducts'
import CreateDelStaff from './CreateDelStaff'
import ViewStaffs from './ViewStaffs'


const AdminRouting = () => {
  return (
    <>
        <Routes>
            <Route path='/admin-product-manage' element={<ProductHome />} />
            <Route path='/admin-user-manage' element={<UserManageHome />} />
            <Route path='/sales-analysis' element={<SalesAnalysisHome />} />
            <Route path='/marketing-manage' element={<MarketingManageHome />} />
            <Route path='/revenue-tracking' element={<RevenueTrackHome />} />
            <Route path='/admin-products' element={<ProductList />}  />
            <Route path='/edit' element={<EditProducts />} />
            <Route path='/create-del-staff' element={<CreateDelStaff />} />
            <Route path='/view-staff' element={<ViewStaffs />} />
            
        </Routes>
    </>
  )
}

export default AdminRouting