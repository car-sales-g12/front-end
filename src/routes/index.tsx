import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login/index"
import { Register } from "../pages/Register/index"
import { HomePage } from "../pages/HomePage"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="" element={<HomePage/>}/>
        </Routes>
    )
}
