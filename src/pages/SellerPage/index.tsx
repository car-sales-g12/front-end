/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import jwt_decode from "jwt-decode";
import { HeaderSeller } from "../../components/Header copy";
import { Footer } from "../../components/Footer";

interface SellerInfo {
  name: string;
  description: string;
  perfilImg: string;
}

interface Announcement {
  id: number;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  km: string;
  active: boolean;
  color: string;
  good_deal: boolean;
  value: string;
  description: string;
  cover_img: string;
}

export const SellerDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [sellerInfo, setSellerInfo] = useState<SellerInfo | null>(null);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const token = localStorage.getItem("Token");

  useEffect(() => {
    const fetchSellerData = async () => {
      try {
        if (token) {
          const decodedToken: any = jwt_decode(token);
          if (decodedToken && "id" in decodedToken) {
            const userId = decodedToken.id;
            const userResponse = await api.get(`/user/${userId}`);
            setSellerInfo(userResponse.data);

            const announcementsResponse = await api.get(
              `/announcement/user/${userId}`
            );
            setAnnouncements(announcementsResponse.data);
          }
        }
      } catch (error) {
        // Handle error
      }
    };
    console.log(sellerInfo);
    fetchSellerData();
  }, [token]);

  return (
    <div>
      <HeaderSeller>
        <div className="flex gap-5 items-center">
          <img
            className="w-[60px] h-[60px] rounded-full object-cover"
            src={sellerInfo?.perfilImg}
            alt="foto de perfil"
          />
          <span className="text-grey-scale-grey-2">{sellerInfo?.name}</span>
        </div>
      </HeaderSeller>
      <div className="scroll-smooth bg-grey-scale-grey-8 font-inter">
        <div className="">
          {sellerInfo && (
            <div className="flex items-center justify-center bg-brand-brand-1 relative h-48">
              <div className=" bg-white w-[80%] absolute bottom-[-12rem] h-[350px] shadow rounded px-4 py-8  flex flex-col">
                <div className="h-[50%]">
                  <div className="relative">
                    <img
                      src={sellerInfo.perfilImg}
                      className="w-[104px] h-[104px] rounded-full object-cover"
                    />
                  </div>
                  <div className="flex gap-3 mt-3">
                    <h3 className="font-bold">{sellerInfo.name}</h3>
                    <span className="bg-brand-brand-4 text-brand-brand-2 px-2 py-1 rounded font-bold text-xs self-center">
                      Anunciante
                    </span>
                  </div>
                </div>
                <div className="h-[50%] flex flex-col justify-between mt-3">
                  <div className="text-grey-scale-grey-3">
                    {sellerInfo.description}
                  </div>
                  <button
                    className="text-brand-brand-2 border-brand-brand-2 rounded border-[2px] px-3 py-2 w-fit"
                    onClick={() => navigate("/create-listing")}
                  >
                    Criar Anúncio
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="mt-[15rem]">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container">
              {announcements.length > 0 ? (
                announcements.map((announcement) => (
                  <li
                    key={announcement.id}
                    className="w-[312px] h-[356px] flex flex-col mb-4"
                  >
                    <div className="h-[40%] w-full relative">
                      <img
                        className="h-full object-cover w-full bg-grey-scale-grey-7"
                        src={announcement.cover_img}
                        alt="foto do carro"
                      />
                      {announcement.active ? (
                        <span className="absolute top-3 left-3 px-2 bg-brand-brand-1 text-white rounded">
                          Ativo
                        </span>
                      ) : (
                        <span className="absolute top-3 left-3 px-2 bg-grey-scale-grey-4 text-white rounded">
                          Inativo
                        </span>
                      )}
                    </div>
                    <div className="h-[60%] flex flex-col justify-around">
                      <h2 className="font-bold">{`${announcement.brand} - ${announcement.model}`}</h2>
                      <p className="text-grey-scale-grey-3">
                        {announcement.description}
                      </p>
                      <div className="flex flex-row justify-between">
                        <div className="flex gap-4">
                          <span className="bg-brand-brand-4 text-brand-brand-2 px-1 rounded font-medium">
                            {announcement.km} km
                          </span>
                          <span className="bg-brand-brand-4 text-brand-brand-2 px-1 rounded font-medium">
                            {announcement.year}
                          </span>
                        </div>
                        <span className="font-bold">
                          R$ {announcement.value}
                        </span>
                      </div>
                      <span className="flex gap-4">
                        <button className="px-2 border-2 border-black rounded text-sm">
                          Editar
                        </button>
                        <button className="px-2 border-2 border-black rounded">
                          Ver Detalhes
                        </button>
                      </span>
                    </div>
                  </li>
                ))
              ) : (
                <span className="h-[500px]">você ainda não tem anúncios</span>
              )}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
