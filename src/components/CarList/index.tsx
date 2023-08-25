import React, { useState, useEffect } from 'react';
import CarFilter, { FilterOptions } from '../Filter';
import { api } from '../../services/api';
import { BrandAndModelName, CarCard, CarDescription, CarImage, CarListContainer, Container, FilterContainer, KmYearElement, KmYearPriceContainer, PriceElement } from './style';
import { useNavigate } from 'react-router-dom';

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
  active: boolean;
  user: {
    id: number;
    name: string;
  }
}

const CarList: React.FC = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);


  useEffect(() => {
  
    api.get('/announcement/') 
      .then(response => {
        const carData = response.data.data;
        setCars(carData);
        setFilteredCars(carData);
      })
      .catch(error => {
        console.error('Error fetching car data:', error);
      });
  }, []);

  const applyFilter = (filters: FilterOptions) => {
    const filtered = cars.filter((car) => {
      const brandMatch = !filters.brand || car.brand.toLowerCase() === filters.brand.toLowerCase();
      const modelMatch = !filters.model || car.model.toLowerCase() === filters.model.toLowerCase();
      const colorMatch = !filters.color || car.color.toLowerCase() === filters.color.toLowerCase();
      const yearMatch = !filters.year || car.year.toString() === filters.year.toString();
      const fuelMatch = !filters.fuel || car.fuel.toLowerCase() === filters.fuel.toLowerCase();
      const kmMatch = !filters.km || (car.km >= filters.km[0] && car.km <= filters.km[1]);
      const priceMatch = !filters.value || (car.value >= filters.value[0] && car.value <= filters.value[1]);
      console.log(priceMatch)

      return brandMatch && modelMatch && colorMatch && yearMatch && fuelMatch && kmMatch && priceMatch;
    });
    setFilteredCars(filtered);
    console.log(filtered)
  };

  return (
    <Container>
      <FilterContainer>
      <CarFilter onApplyFilter={applyFilter} />
      </FilterContainer>  
      <CarListContainer>
        {filteredCars.filter(car => car.active === true).map((car: Car) => (
          <CarCard key={car.id}>
            <CarImage src={car.cover_img} alt={`${car.brand} ${car.model}`} style={{ maxWidth: '100px' }} />
            <span>{car.active.toString()}</span>
            <BrandAndModelName>{car.brand} - {car.model}</BrandAndModelName>
            <CarDescription>{car.description}</CarDescription>
            <span onClick={() => navigate(`/seller-page/${car.user.id}`)} key={car.user.id}>
            <h2>{car.user.name.split(' ').reduce((acc, word) => acc + word.charAt(0), '')}</h2>
            <h2>{car.user.name}</h2>
            </span>
            <KmYearPriceContainer>
            <KmYearElement>{car.km} km</KmYearElement>
            <KmYearElement>{car.year}</KmYearElement>
            <PriceElement>R${car.value}</PriceElement>
            </KmYearPriceContainer>
          </CarCard>
        ))}
      </CarListContainer>
    </Container>
  );
};

export default CarList;