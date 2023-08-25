import { IoIosArrowUp } from "react-icons/io";
import { FooterContainer } from "./style";

export const Footer = () => {
  return (
    <FooterContainer className="">
      <p className="name">
        Motors <span>shop</span>
      </p>
      <p className="copyright">© 2023 - Todos direitos reservados.</p>
      <button onClick={() => window.scrollTo(0, 0)} className="homeButton">
        <IoIosArrowUp />
      </button>
    </FooterContainer>
  );
};
