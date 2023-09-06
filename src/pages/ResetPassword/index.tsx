import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { FormResetPassword } from "../../components/Forms/resetPassword";
import { SytlesMainResetPassword } from "./styles";

export const ResetPassword = () => {
    const navigate = useNavigate()
    
    return (
        <>
            <Header />
            <SytlesMainResetPassword className="h-screen flex items-center justify-center bg-grey-scale-grey-8">
                <section>
                    <h1>Crie sua nova senha</h1>
                    <FormResetPassword/>
                    <button onClick={() => navigate('/')}>Voltar ao inicio</button>
                </section>
            </SytlesMainResetPassword>
        </>
    )
}