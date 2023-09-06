import { SetStateAction,Dispatch } from "react";
import { StyledCardList } from "./StyledCarAllPictures"


interface imagesProps{
    id:number | undefined;
    url:string ;
}

interface pictureProps{
    images:imagesProps[],
    setimg: Dispatch<SetStateAction<string>>
    showModal:Dispatch<SetStateAction<boolean>>

}
export const CarAllPicturesList=({images,setimg,showModal}:pictureProps)=>
{


    const handleClick=(url:string)=>{
        showModal(true)
        setimg(url)
    }   
    return <StyledCardList>

        <h2>Fotos</h2>
        
        {
                images.length === 0 ? (
                    <p>Não há imagens para ser mostradas no momento...
                    </p>
                ) :
                (
                    images.map((image, index) => (
                        <li key={index} onClick={()=>{
                            handleClick(image.url)
                        }}>
                            <img src={image.url} alt="Carro foto" />
                        </li>
                    ))
                )
            }
        
    </StyledCardList>
}