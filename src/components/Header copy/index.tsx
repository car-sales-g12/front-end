import { useState } from "react"
import MotorShop from "../../assets/MotorShop.svg"
import { HeaderContainer, Modal } from "./style"
import { BiMenu, BiX } from 'react-icons/bi'
import { useNavigate } from "react-router-dom"

export const HeaderSeller = () => {
    const navigate = useNavigate()
    const [buttonMenu, setButtonMenu] = useState(false)
    return (
        <>
            <HeaderContainer>
                <div className="logo">
                    <img src={MotorShop} alt="logo" />
                </div>
                <div className="first-acess">
                    <button className="button-login" onClick={() => navigate('/login')}>Fazer Login</button>
                    <button className="button-cadastro" onClick={() => navigate('/register')}>Cadastrar</button>
                </div>
                <div onClick={() => setButtonMenu(!buttonMenu)} className="menu">
                    {buttonMenu ? <BiX /> : <BiMenu />}
                </div>
            </HeaderContainer>
            {buttonMenu ? <Modal>
                <button className="button-login" onClick={() => navigate('/login')}>Fazer Login</button>
                <button className="button-cadastro" onClick={() => navigate('/register')}>Cadastrar</button></Modal> : null}
        </>
    )
}