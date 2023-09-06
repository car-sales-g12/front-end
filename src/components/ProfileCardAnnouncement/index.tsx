import { StyledProfileCard } from "./StyledProfileCard";
import { useNavigate } from "react-router-dom";
interface profileProps{
name:string | undefined,
userDescription:string | undefined,
urlImg:string | undefined
isOwner:boolean,
OwnerId:number | undefined
}

export const ProfileCardAnnouncement = ({
  name,
  userDescription,
  urlImg,
  isOwner,
  OwnerId
}:profileProps) => {
const navigate=useNavigate()

const handleNavigate = (isOwner:boolean)=>{
  if(isOwner){
    navigate(`/seller-dashboard`)
    
  }
  else{
    navigate(`/seller-page/${OwnerId}`)
  }
}
  return (
    <StyledProfileCard>
      <img src={urlImg} alt={name} />
      <h2>{name}</h2>
      <p>
        {userDescription}
      </p>
      <button className="buttonProfile" onClick={()=>{
        handleNavigate(isOwner)
      }}>Ver todos os anúncios</button>
    </StyledProfileCard>
  );
};
