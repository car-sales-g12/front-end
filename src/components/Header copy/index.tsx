import { useState } from "react";
import MotorShop from "../../assets/MotorShop.svg";
import { HeaderContainer, Modal } from "./style";
import { BiMenu, BiX } from "react-icons/bi";

export const HeaderSeller = ({ children }: any) => {
  const [buttonMenu, setButtonMenu] = useState(false);
  return (
    <>
      <HeaderContainer>
        <div className="logo">
          <img src={MotorShop} alt="logo" />
        </div>
        <div className="first-acess">{children}</div>
        <div onClick={() => setButtonMenu(!buttonMenu)} className="menu">
          {buttonMenu ? <BiX /> : <BiMenu />}
        </div>
      </HeaderContainer>
      {buttonMenu ? <Modal>{children}</Modal> : null}
    </>
  );
};