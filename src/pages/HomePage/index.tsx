import { useEffect, useState } from "react";
import CarList from "../../components/CarList";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { StyledMain } from "./style";
import { api } from "../../services/api";
import { HeaderSeller } from "../../components/Header copy";
import car from "./../../assets/Group 28.svg";

export const HomePage = () => {
  const id = localStorage.getItem("user_id");
  const [user, setUser] = useState<any>();
  useEffect(() => {
    try {
      const getUser = async () => {
        const response = await api.get(`/user/${id}`);
        setUser(response);
        console.log(response);
      };
      getUser();
    } catch (error) {}
  }, []);

  return (
    <>
      {user ? (
        <HeaderSeller>
          <div className="flex gap-5 items-center">
            <img
              className="w-[60px] h-[60px] rounded-full object-cover"
              src={user.data.perfilImg}
              alt="foto de perfil"
            />
            <span className="text-grey-scale-grey-2">{user.data.name}</span>
          </div>
        </HeaderSeller>
      ) : (
        <Header />
      )}
      <div className="relative w-full h-[544px] font-inter">
        <img
          src={car}
          alt="foto de carro"
          className="w-full object-cover h-full"
        />
        <div className="absolute top-[50%]  left-[50%] flex flex-col text-white translate-x-[-50%] translate-y-[-50%]">
          <span className="font-bold text-[2rem] mb-2 sm:text-[3rem] self-center"> Motors Shop</span>
          <span className="font-bold sm:text-[1.5rem]">
            A melhor plataforma de anúncios de carros do país
          </span>
        </div>
      </div>
      <StyledMain className="">
        <CarList />
      </StyledMain>
      <Footer />
    </>
  );
};
