import { FormRegister } from "../../components/Forms/register"
import { Header } from "../../components/Header"
import { SytlesMainRegister } from "./style"

export const Register = () => {
    return (
        <>
            <Header />
            <SytlesMainRegister className="flex items-center justify-center mt-[5rem] bg-grey-scale-grey-8">
                <section>
                    <h1>Cadastro</h1>
                    <FormRegister />
                </section>
            </SytlesMainRegister>
        </>
    )
}
