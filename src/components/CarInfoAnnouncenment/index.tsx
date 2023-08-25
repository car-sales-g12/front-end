import { StyledCarInfo } from "./StyledCarInfoAnnoucement";

interface carProps{
    model:string | undefined,
    km:string | undefined,year:string | undefined,price:string | undefined
}

export const CarInfo=({model,km,year,price}:carProps)=>{
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
        
           
            <button>comprar</button>
        </StyledCarInfo>
    )
}