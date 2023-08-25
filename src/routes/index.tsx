import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login/index"
import { Register } from "../pages/Register/index"
import { HomePage } from "../pages/HomePage"
import { SellerDashboard } from "../pages/SellerPage"
import SellerPage from "../pages/SellerPagePublic"

import { ProductDescription } from "../pages/ProductDescription"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/seller-page/:userId" element={<SellerPage />} />
            <Route path="/productdescription/:announceid" element={<ProductDescription/>}/>
            <Route path="/seller-dashboard" element={<SellerDashboard/>}/>
            <Route path="" element={<HomePage/>}/>

        </Routes>
    )
}
