import { FormRegister } from "../../components/Forms/register"
import { Header } from "../../components/Header"
import { SytlesMainRegister } from "./style"

export const Register = () => {
    return (
        <>
            <Header />
            <SytlesMainRegister>
                <section>
                    <h1>Cadastro</h1>
                    <FormRegister />
                </section>
            </SytlesMainRegister>
        </>

    )
}