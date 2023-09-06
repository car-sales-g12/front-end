import { ModalWrapper } from "./style"

interface modalProps{
    showImageModal:Dispatch<SetStateAction<boolean>>
    urlImgmodal:string
}

export const ImageModal=({
    showImageModal,urlImgmodal
}:modalProps)=>{
    return (
         <ModalWrapper>
            <div>
                <span onClick={()=>{
                    showImageModal(false)
                }}>Close</span>
                <img src={urlImgmodal} alt="carro" />
            
            </div>
         </ModalWrapper>   

    )
}