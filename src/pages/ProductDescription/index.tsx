import { useEffect, useState } from "react";
import { DescriptionCar } from "../../components/DescriptionCarAnnouncement";
import { ProfileCardAnnouncement } from "../../components/ProfileCardAnnouncement";
import { CommentList } from "../../components/commentListAnnouncement";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Footer } from "../../components/Footer";
import { PostCommentAnnouncement } from "../../components/PostCommentAnnouncement";
import { Header } from "../../components/Header";
import jwtDecode from "jwt-decode";
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

export const ProductDescription = () => {
  const { announceid } = useParams();
  const [car, setCar] = useState<Car>();
  const [loggedUser,setLoggedUser]=useState<user>()
  const [comments, setComments] = useState<Comments[]>([]);
  const token=localStorage.getItem('Token') || {}
  const userId=jwtDecode(token).id


  useEffect(() => {
    try {
      api.get(`/announcement/${announceid}`).then((response) => {
        const carData = response.data;
        setCar(carData);
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
    <Header/>
      <ProfileCardAnnouncement
        name={car?.user.name}
        userDescription={car?.user.description}
        urlImg={car?.user.perfilImg}
      />
      <DescriptionCar description={car?.description} />
      <CommentList allComments={comments} />
      <PostCommentAnnouncement name={loggedUser?.name} profileimg={loggedUser?.perfilImg}/>
      <Footer />
    </>
  );
};
