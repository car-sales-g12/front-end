import { StyledCarInfo } from "./styledCarInfo"
interface carInfoProps{
    carUrl:string | undefined;
}
export const CarPicture=({carUrl}:carInfoProps)=>{
    return (<StyledCarInfo>
       <img src={carUrl} alt="carro imagem" />
    </StyledCarInfo>
        
        )
}