import MotorShop from "../../assets/MotorShop.svg"
import { HeaderContainer } from "./style"


export const Header = () => {

    return (
        <HeaderContainer>
            <div className="logo"> 
                <img src={MotorShop} alt="logo" />
            </div>
            <div className="first-acess">
                <button>Fazer Login</button>
                <button>Cadastrar</button>
            </div>
        </HeaderContainer>

    )
}