import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { StyledMain } from "./style"

export const HomePage = () => {
    return (
        <>
        <div>
            <Header/>
                <StyledMain>
                    <section className='welcomeBox'>
                    </section>
                </StyledMain>
            <Footer/>
        </div>
        </>
    )
}