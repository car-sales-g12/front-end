import React, { useState, useEffect } from "react";
import CarFilter, { FilterOptions } from "../Filter";
import { api } from "../../services/api";
import { CarListContainer, Container, FilterContainer } from "./style";

interface SellerInfo {
  name: string;
  description: string;
  perfilImg: string;
}
interface User {
  id: number;
  name: string;
  perfilImg: string;
}
interface Car {
  id: number;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  km: number;
  active: boolean;
  color: string;
  good_deal: boolean;
  value: number;
  description: string;
  cover_img: string;
  user: User;
}

const CarList: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  useEffect(() => {
    api
      .get("/announcement/")
      .then((response) => {
        const carData = response.data.data;
        setCars(carData);
        setFilteredCars(carData);
      })
      .catch((error) => {
        console.error("Error fetching car data:", error);
      });
  }, []);

  const applyFilter = (filters: FilterOptions) => {
    const filtered = cars.filter((car) => {
      const brandMatch =
        !filters.brand ||
        car.brand.toLowerCase() === filters.brand.toLowerCase();
      const modelMatch =
        !filters.model ||
        car.model.toLowerCase() === filters.model.toLowerCase();
      const colorMatch =
        !filters.color ||
        car.color.toLowerCase() === filters.color.toLowerCase();
      const yearMatch =
        !filters.year || car.year.toString() === filters.year.toString();
      const fuelMatch =
        !filters.fuel || car.fuel.toLowerCase() === filters.fuel.toLowerCase();
      const kmMatch =
        !filters.km || (car.km >= filters.km[0] && car.km <= filters.km[1]);
      const priceMatch =
        !filters.value ||
        (car.value >= filters.value[0] && car.value <= filters.value[1]);
      console.log(priceMatch);

      return (
        brandMatch &&
        modelMatch &&
        colorMatch &&
        yearMatch &&
        fuelMatch &&
        kmMatch &&
        priceMatch
      );
    });
    setFilteredCars(filtered);
    console.log(filtered);
  };

  return (
    <Container className="container flex p-8 sm:p-0 flex-col sm:flex-row">
      <FilterContainer>
        <CarFilter onApplyFilter={applyFilter} />
      </FilterContainer>
      <CarListContainer className="mt-8 grid lg:grid-cols-2 gap-4 w-full xl:grid-cols-3">
        {filteredCars.map((filteredCars) => (
          <div key={filteredCars.id} className="w-[312px] h-[356px]">
            <div className="h-[40%] w-full relative">
              <img
                className="h-full object-cover w-full bg-grey-scale-grey-7"
                src={filteredCars.cover_img}
                alt="foto do carro"
              ></img>
              {filteredCars.good_deal && (
                <span className="absolute top-0 right-0 bg-random-random-7 text-white p-1 rounded">
                  $
                </span>
              )}
            </div>
            <div className="h-[60%] flex flex-col justify-around">
              <h2 className="font-bold">{`${filteredCars.brand} - ${filteredCars.model}`}</h2>
              <p className="text-grey-scale-grey-3">
                {filteredCars.description}
              </p>
              <span className="flex gap-4 itens-center">
                <img
                  src={filteredCars.user.perfilImg}
                  className="w-[32px] h-[32px] rounded-full border"
                />
                <span className="flex items-center">
                  {filteredCars.user.name}
                </span>
              </span>
              <div className="flex flex-row justify-between">
                <div className="flex gap-4">
                  <span className="bg-brand-brand-4 text-brand-brand-2 px-1 rounded font-medium">
                    {filteredCars.km} km
                  </span>
                  <span className="bg-brand-brand-4 text-brand-brand-2 px-1 rounded font-medium">
                    {filteredCars.year}
                  </span>
                </div>
                <span className="font-bold">R$ {filteredCars.value}</span>
              </div>
            </div>
          </div>
        ))}
      </CarListContainer>
    </Container>
  );
};

export default CarList;
