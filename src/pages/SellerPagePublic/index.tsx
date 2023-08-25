import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';

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
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
      });

    api.get(`/user/${userId}`)
      .then(response => {
        setSellerInfo(response.data);
      })
      .catch(error => {
        console.error('Error fetching seller info:', error);
      });
  }, [userId]);

  return (
    <div>
      <div>
        {sellerInfo && (
          <div>
            <h2>{sellerInfo.name.split(' ').map(word => word.charAt(0)).join('')}</h2>
            <h3>{sellerInfo.name}</h3>
            <div>{sellerInfo.description}</div>
          </div>
        )}

        <div>
          <h1>Anúncios</h1>
          <ul>
            {cars.map((car) => (
              <li key={car.id}>
                <div>
                  <img src={car.cover_img} alt={`${car.brand} - ${car.model}`} />
                  <span>{car.active.toString()}</span>
                </div>
                <div>
                  <h2>{`${car.brand} - ${car.model}`}</h2>
                  <p>{car.description}</p>
                  <span>{`${car.km} km | ${car.year} | R$ ${car.value}`}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SellerPage;