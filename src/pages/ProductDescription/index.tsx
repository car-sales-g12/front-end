import { useEffect, useState } from "react";
import { DescriptionCar } from "../../components/DescriptionCarAnnouncement";
import { ProfileCardAnnouncement } from "../../components/ProfileCardAnnouncement";
import { CommentList } from "../../components/commentListAnnouncement";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Footer } from "../../components/Footer";
import { PostCommentAnnouncement } from "../../components/PostCommentAnnouncement";
import jwtDecode from "jwt-decode";
import {CarPicture } from "../../components/CarPictureAnnouncement";
import { CarInfo } from "../../components/CarInfoAnnouncenment";
import {StyledPage, CentralizedContainer } from "./style";
import { HeaderAnnouncement } from "../../components/HeaderAnnouncement";
import { CarAllPicturesList } from "../../components/CarAllPicturesList";
import { ImageModal } from "../../components/ImageModel";

interface Car {
  id: number;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  km: number;
  color: string;
  good_deal: boolean;
  value: number;
  description: string;
  cover_img: string;
  user: {
    birth_date: string;
    createdAt: string;
    description: string;
    email: string;
    id: number;
    is_seller: boolean;
    name: string;
    telephone: string;
    updatedAt: string;
    perfilImg: string;
  };
}
interface Comments {
  id:number,
  updatedAt:string,
  comment: string;
  createdAt: string;
  user: {
    id: number;
    name: string;
    perfilImg: string;
  };
}
interface user{
  id: number;
  name: string;
  perfilImg: string;
}
interface carPictures{
  id:number;
  url:string;
}

export const ProductDescription = () => {
  const { announceid } = useParams();
  const [car, setCar] = useState<Car>();
  const [carPictures, setCarPictures] = useState<carPictures[]>([]);
  const [loggedUser,setLoggedUser]=useState<user>()
  const [comments, setComments] = useState<Comments[]>([]);
  const token = localStorage.getItem('Token');
  let userId: unknown = null
  
  if (token !== null) {
    userId = (jwtDecode(token) as unknown).id || null;
  }
  const [imgModal,setImgModal]=useState('')
  const [showImageModal,setShowImageModal]=useState(false)

  useEffect(() => {
    try {
      api.get(`/announcement/${announceid}`).then((response) => {
        const carData = response.data;
        setCar(carData);
      });
      api.get(`/image/${announceid}`).then((response) => {
        const carData = response.data;
        setCarPictures(carData)
      });
      api.get(`comment/${announceid}`).then((response) => {
        const comments = response.data;
        setComments(comments);
      });
      api.get(`/user/${userId}`).then((response) => {
        const user = response.data;
        setLoggedUser(user)
      });

     
    } catch (error) {
      console.error("Error fetching car data:", error);
    }

  }, [comments,announceid,userId]);

  

  return (
    <>
      <HeaderAnnouncement>
          <div className="flex gap-5 items-center">
            <img
              className="w-[60px] h-[60px] rounded-full object-cover"
              src={loggedUser?.perfilImg}
              alt="foto de perfil"
            />
            <span className="text-grey-scale-grey-2">{loggedUser?.name}</span>
          </div>
        </HeaderAnnouncement>
    <StyledPage>
      <CentralizedContainer>
      <CarPicture carUrl={car?.cover_img}/>
      <CarInfo phone={car?.user.telephone} model={car?.model} km={car?.km} year={car?.year} price={car?.value}/>
      <CarAllPicturesList showModal={setShowImageModal} setimg={setImgModal} images={carPictures}/>
      <DescriptionCar description={car?.description} />
      <ProfileCardAnnouncement
      OwnerId={car?.user.id}
        isOwner={car?.user.id === loggedUser?.id}
        name={car?.user.name}
        userDescription={car?.user.description}
        urlImg={car?.user.perfilImg}
      />
      <CommentList allComments={comments} />
      <PostCommentAnnouncement name={loggedUser?.name} profileimg={loggedUser?.perfilImg}/>
      {
        showImageModal &&
        (<ImageModal showImageModal={setShowImageModal } urlImgmodal={imgModal}/>)}

      </CentralizedContainer>
      <Footer />
    </StyledPage>
 
    
    </>
  );
};
