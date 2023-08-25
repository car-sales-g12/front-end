import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { HeaderSeller } from '../../components/Header copy';

interface Car {
  id: number;
  brand: string;
  model: string;
  cover_img: string;
  description: string;
  km: number;
  year: string;
  value: string;
  active: boolean;
  user: {
    id: number;
    name: string;
    description: string;
    perfilImg: string;
  };
}

const SellerPage: React.FC = () => {
  const { userId } = useParams();
  const [cars, setCars] = useState<Car[]>([]);
  const [sellerInfo, setSellerInfo] = useState<Car['user'] | null>(null);

  useEffect(() => {
    api.get(`/announcement/`)
      .then(response => {
        const allCars = response.data.data;
        const userCars = allCars.filter((car: Car) => car.user.id === Number(userId) && car.active);
        setCars(userCars);

        if (userCars.length > 0) {
          setSellerInfo(userCars[0].user);
        }
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
      });
  }, [userId]);

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
      <div className="bg-grey-scale-grey-8 font-inter">
        {sellerInfo && (
          <div className="bg-brand-brand-1 relative h-48">
            <div className="bg-white w-[80%] absolute bottom-[-12rem] h-[350px] shadow rounded px-4 py-8 flex flex-col">
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
              </div>
            </div>
          </div>
        )}
        <div className="mt-[15rem]">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container">
            {cars.length > 0 ? (
              cars.map((car) => (
                <li
                  key={car.id}
                  className="w-[312px] h-[356px] flex flex-col mb-4"
                >
                  <div className="h-[40%] w-full relative">
                    <img
                      className="h-full object-cover w-full bg-grey-scale-grey-7"
                      src={car.cover_img}
                      alt={`${car.brand} - ${car.model}`}
                    />
                    {car.active ? (
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
                    <h2 className="font-bold">{`${car.brand} - ${car.model}`}</h2>
                    <p className="text-grey-scale-grey-3">
                      {car.description}
                    </p>
                    <div className="flex flex-row justify-between">
                      <div className="flex gap-4">
                        <span className="bg-brand-brand-4 text-brand-brand-2 px-1 rounded font-medium">
                          {car.km} km
                        </span>
                        <span className="bg-brand-brand-4 text-brand-brand-2 px-1 rounded font-medium">
                          {car.year}
                        </span>
                      </div>
                      <span className="font-bold">
                        R$ {car.value}
                      </span>
                    </div>
                    <span className="flex gap-4">
                    </span>
                  </div>
                </li>
              ))
            ) : (
              <span className="h-[500px]">Nenhum carro a venda</span>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SellerPage;