
import { StyledMain } from "./style";
import { Header } from "../../components/Header";
import CarList from "../../components/CarList";
import { Footer } from "../../components/Footer";
export const HomePage = () => {
    return (
        <>
        <div>
            <Header/>
                <StyledMain className="mt-[5rem]">
                    <CarList/>
                </StyledMain>
            <Footer/>
        </div>
        </>
    )
}
