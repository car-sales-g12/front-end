import { StyledCarInfo } from "./StyledCarInfoAnnoucement";
interface carProps{
    model:string | undefined,
    km:number | undefined,year:string | undefined,price:number | undefined,
    phone:string | undefined
}

export const CarInfo=({model,km,year,price,phone}:carProps)=>{
    const handleClick = () => {
        if (phone) {
          const whatsappUrl = `https://api.whatsapp.com/send?phone=+55${phone}&text=Ol%C3%A1%20vi%20seu%20anuncio%20e%20estou%20interessado`
          ;
          window.open(whatsappUrl, '_blank');
        }
      };

    return (
        <StyledCarInfo>
            <h2> {model} </h2>
            <div className="middle">
            <div className="spanDiv">
                <span>{year}</span>
                <span>{km} km</span>
            </div>
            <p>R$ {price}</p>
            </div>
        
           
            <button onClick={()=>{
                handleClick()
            }}>comprar</button>
        </StyledCarInfo>
    )
}