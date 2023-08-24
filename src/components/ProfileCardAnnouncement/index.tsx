import { StyledProfileCard } from "./StyledProfileCard";

interface profileProps{
name:string | undefined,
userDescription:string | undefined,
urlImg:string | undefined
}

export const ProfileCardAnnouncement = ({
  name,
  userDescription,
  urlImg
}:profileProps) => {
  return (
    <StyledProfileCard>
      <img src={urlImg} alt={name} />
      <h2>{name}</h2>
      <p>
        {userDescription}
      </p>
      <button className="buttonProfile">Ver todos os anúncios</button>
    </StyledProfileCard>
  );
};
