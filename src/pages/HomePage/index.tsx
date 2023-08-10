
import CarList from "../../components/CarList"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { StyledMain } from "./style"

export const HomePage = () => {
    return (
        <>
        <div>
            <Header/>
                <StyledMain>
                    <CarList/>
                </StyledMain>
            <Footer/>
        </div>
        </>
    )
}