import { useNavigate } from "react-router-dom"
import { FormLogin } from "../../components/Forms/login"
import { Header } from "../../components/Header"
import { SytlesMainLogin } from "./styles"

export const Login = () => {
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <SytlesMainLogin>

                <section>
                    <h1>Login</h1>
                    <FormLogin />
                    <h3>ainda não possui conta?</h3>
                    <button onClick={() => navigate('/register')}>Cadastrar</button>
                </section>
            </SytlesMainLogin>
        </>
    )
}