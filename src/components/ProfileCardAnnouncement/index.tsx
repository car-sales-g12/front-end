import { StyledProfileCard } from "./StyledProfileCard";
import Photo from "../../assets/Photo.svg";

export const ProfileCardAnnouncement = () => {
  return (
    <StyledProfileCard>
      <img src={Photo} alt="foto perfil" />
      <h2>Samuel leao</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </p>
      <button className="buttonProfile">Ver todos os anuncions</button>
    </StyledProfileCard>
  );
};
