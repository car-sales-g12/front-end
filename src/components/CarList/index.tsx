import React, { useState } from 'react';
import mockData from '../../services/mock';
import CarFilter, { FilterOptions } from '../Filter';

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  fuel: string;
  km: number;
  cor: string;
  good_deal: boolean;
  value: number;
  description: string;
  cover_img: string;
  user: {
    firstName: string;
    lastName: string;
  };
}

export const CarList: React.FC = () => {
  const [filteredCars, setFilteredCars] = useState<Car[]>(mockData);

  const applyFilter = (filters: FilterOptions) => {
    const filtered = mockData.filter((car) => {
      return (
        (filters.marca === '' || car.brand.toLowerCase() === filters.marca.toLowerCase()) &&
        (filters.modelo === '' || car.model.toLowerCase() === filters.modelo.toLowerCase()) &&
        (filters.cor === '' || car.cor.toLowerCase() === filters.cor.toLowerCase()) &&
        (filters.ano === 0 || car.year === filters.ano) &&
        (filters.combustivel === '' || car.fuel.toLowerCase() === filters.combustivel.toLowerCase()) &&
        (car.km >= filters.km[0] && car.km <= filters.km[1]) &&
        (car.value >= filters.preco[0] && car.value <= filters.preco[1])
      );
    });

    setFilteredCars(filtered);
  };

  return (
    <div>
      <CarFilter onApplyFilter={applyFilter} />
      <div>
        {filteredCars.map((car: Car) => (
          <div key={car.id} style={{ border: '1px solid #ccc', padding: '16px', margin: '16px' }}>
            <img src={car.cover_img} alt={`${car.brand} ${car.model}`} style={{ maxWidth: '100px' }} />
            <h3>marca: {car.brand}</h3>
            <h3>modelo: {car.model}</h3>
            <p>ano: {car.year}</p>
            <p>cor: {car.cor}</p>
            <p>valor: {car.value}</p>
            <p>description: {car.description}</p>
            <p>Seller: {car.user.firstName} {car.user.lastName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;