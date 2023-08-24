import CarList from "../../components/CarList";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { StyledMain } from "./style";

export const HomePage = () => {
  return (
    <>
      <div>
        <Header />
        <StyledMain className="mt-[5rem]">
          <CarList />
        </StyledMain>
        <Footer />
      </div>
    </>
  );
};
