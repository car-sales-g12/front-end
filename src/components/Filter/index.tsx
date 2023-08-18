// import React, { useState } from 'react';
// import { OptionContainer, PriceKmDiv, RangeInputContainer } from './style';

// export interface FilterOptions {
//   brand: string;
//   model: string;
//   color: string;
//   year: string;
//   fuel: string;
//   km: [number, number];
//   value: [number, number];
// }

// interface CarFilterProps {
//   onApplyFilter: (filters: FilterOptions) => void;
// }

// const CarFilter: React.FC<CarFilterProps> = ({ onApplyFilter }) => {
//   const brand = [
//     'general Motors',
//     'Fiat',
//     'Ford',
//     'Honda',
//     'Porsche',
//     'Volswagen',
//   ];

//   const model = [
//     'Civic',
//     'Corolla',
//     'Cruze',
//     'Fit',
//     'Gol',
//     'Ka',
//     'Onix',
//     'Porsche 718',
//   ];

//   const color = ['Blue', 'White', 'Gray', 'Silver', 'Black', 'Green'];

//   const year = [2022, 2021, 2018, 2015, 2013, 2012, 2010];

//   const fuel = ['Elétrico', 'Flex', 'Híbrido'];

//   const [selectedMarca, setSelectedMarca] = useState<string>('');
//   const [selectedModelo, setSelectedModelo] = useState<string>('');
//   const [selectedCor, setSelectedCor] = useState<string>('');
//   const [selectedAno, setSelectedAno] = useState<string>('');
//   const [selectedCombustivel, setSelectedCombustivel] = useState<string>('');
//   const [selectedKm, setSelectedKm] = useState<[number, number]>([0, 700000]);
//   const [selectedPreco, setSelectedPreco] = useState<[number, number]>([0, 1000000000]);

//   const handleOptionClick = (
//     currentValue: string,
//     setValue: React.Dispatch<React.SetStateAction<string>>
//   ) => {
//     setValue(currentValue === '' ? '' : currentValue);
//     console.log(`Valor selecionado: ${currentValue}`);
//   };
//   const handleRangeChange = (
//     value: [number, number],
//     setValue: React.Dispatch<React.SetStateAction<[number, number]>>
//   ) => {
//     setValue(value);
//   };

//   const applyFilter = () => {
//     const filters: FilterOptions = {
//       brand: selectedMarca,
//       model: selectedModelo,
//       color: selectedCor,
//       year: selectedAno,
//       fuel: selectedCombustivel,
//       km: selectedKm,
//       value: selectedPreco,
//     };

//     onApplyFilter(filters);
//   };

//   return (
//     <div>
//       <OptionContainer>
//         <label>Marca</label>
//         {brand.map((brands) => (
//           <button
//             key={brands}
//             className={selectedMarca === brands ? 'option selected' : 'option'}
//             onClick={() => handleOptionClick(brands, setSelectedMarca)}
//           >
//             {brands}
//           </button>
//         ))}
//       </OptionContainer>
//       <OptionContainer>
//         <label>Modelo</label>
//         {model.map((models) => (
//           <button
//             key={models}
//             className={selectedModelo === models ? 'option selected' : 'option'}
//             onClick={() => handleOptionClick(models, setSelectedModelo)}
//           >
//             {models}
//           </button>
//         ))}
//       </OptionContainer>
//       <OptionContainer>
//         <label>Cor</label>
//         {color.map((colors) => (
//           <button
//             key={colors}
//             className={selectedCor.toLowerCase() === colors.toLowerCase() ? 'option selected' : 'option'}
//             onClick={() => handleOptionClick(colors, setSelectedCor)}
//           >
//             {colors}
//           </button>
//         ))}
//       </OptionContainer>
//       <OptionContainer>
//         <label>Ano</label>
//         <button
//           className={selectedAno === '' ? 'option selected' : 'option'}
//           onClick={() => handleOptionClick('', setSelectedAno)}
//         >
//         </button>
//         {year.map((years) => (
//           <button
//             key={years}
//             className={selectedAno === years.toString() ? 'option selected' : 'option'}
//             onClick={() => handleOptionClick(selectedAno === years.toString() ? '' : years.toString(), setSelectedAno)}
//           >
//             {years}
//           </button>
//         ))}
//       </OptionContainer>
//       <OptionContainer>
//         <label>Combustível</label>
//         {fuel.map((fuels) => (
//           <button
//             key={fuels}
//             className={selectedCombustivel.toLowerCase() === fuels.toLowerCase() ? 'option selected' : 'option'}
//             onClick={() => handleOptionClick(fuels, setSelectedCombustivel)}
//           >
//             {fuels}
//           </button>
//         ))}
//       </OptionContainer>
//       <OptionContainer>
//         <label>Km</label>
//         <PriceKmDiv><span>{selectedKm[0]}km</span><span>{selectedKm[1]}km</span></PriceKmDiv>
//         <RangeInputContainer>
//         <input
//           type="range"
//           min={0}
//           max={700000}
//           value={selectedKm[0]}
//           onChange={(e) => handleRangeChange([Number(e.target.value), selectedKm[1]], setSelectedKm)}
//         />
//         <input
//           type="range"
//           min={0}
//           max={700000}
//           value={selectedKm[1]}
//           onChange={(e) => handleRangeChange([selectedKm[0], Number(e.target.value)], setSelectedKm)}
//         />
//         </RangeInputContainer>
//       </OptionContainer>
//       <OptionContainer>
//         <label>Preço</label>
//         <PriceKmDiv>
//           <span>R${selectedPreco[0]}</span><span>R${selectedPreco[1]}</span>
//         </PriceKmDiv>
//         <RangeInputContainer>
//         <input
//           type="range"
//           min={0}
//           max={1000000000}
//           value={selectedPreco[0]}
//           onChange={(e) => handleRangeChange([Number(e.target.value), selectedPreco[1]], setSelectedPreco)}
//         />
//         <input
//           type="range"
//           min={0}
//           max={1000000000}
//           value={selectedPreco[1]}
//           onChange={(e) => handleRangeChange([selectedPreco[0], Number(e.target.value)], setSelectedPreco)}
//         />
//         </RangeInputContainer>
//       </OptionContainer>
//       <button onClick={applyFilter}>Limpar Filtro</button>
//     </div>
//   );
// };

// export default CarFilter;

import React, { useState } from 'react';
import { FilterButton, OptionContainer, PriceKmDiv, RangeInputContainer } from './style';

export interface FilterOptions {
  brand: string;
  model: string;
  color: string;
  year: string;
  fuel: string;
  km: [number, number];
  value: [number, number];
}

interface CarFilterProps {
  onApplyFilter: (filters: FilterOptions) => void;
}

const CarFilter: React.FC<CarFilterProps> = ({ onApplyFilter }) => {
  const brand = ['general Motors', 'Fiat', 'Ford', 'Honda', 'Porsche', 'Volswagen'];
  const model = ['Civic', 'Corolla', 'Cruze', 'Fit', 'Gol', 'Ka', 'Onix', 'Porsche 718'];
  const color = ['Blue', 'White', 'Gray', 'Silver', 'Black', 'Green'];
  const year = [2022, 2021, 2018, 2015, 2013, 2012, 2010];
  const fuel = ['Elétrico', 'Flex', 'Híbrido'];

  const [selectedMarca, setSelectedMarca] = useState<string>('');
  const [selectedModelo, setSelectedModelo] = useState<string>('');
  const [selectedCor, setSelectedCor] = useState<string>('');
  const [selectedAno, setSelectedAno] = useState<string>('');
  const [selectedCombustivel, setSelectedCombustivel] = useState<string>('');
  const [selectedKm, setSelectedKm] = useState<[number, number]>([0, 700000]);
  const [selectedPreco, setSelectedPreco] = useState<[number, number]>([0, 1000000000]);


  const applyFilter = () => {
    const filters: FilterOptions = {
      brand: selectedMarca,
      model: selectedModelo,
      color: selectedCor,
      year: selectedAno,
      fuel: selectedCombustivel,
      km: selectedKm,
      value: selectedPreco,
    };

    onApplyFilter(filters);
  };

  const clearFilter = () => {
    setSelectedMarca('');
    setSelectedModelo('');
    setSelectedCor('');
    setSelectedAno('');
    setSelectedCombustivel('');
    setSelectedKm([0, 700000]);
    setSelectedPreco([0, 1000000000]);

    const applyButton = document.getElementById("applyButton");
    if (applyButton) {
      applyButton.innerText = "Aplicar Filtro";
      applyButton.removeEventListener("click", clearFilter);
      applyButton.addEventListener("click", applyFilter);
    }

    onApplyFilter({
      brand: '',
      model: '',
      color: '',
      year: '',
      fuel: '',
      km: [0, 700000],
      value: [0, 1000000000],
    });
  };

  const handleOptionClick = (
    currentValue: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setValue(currentValue === '' ? '' : currentValue);
    console.log(`Valor selecionado: ${currentValue}`);
    applyFilter(); 
  };

  return (
    <div>
      <OptionContainer>
        <label>Marca</label>
        {brand.map((brands) => (
          <button
            key={brands}
            className={selectedMarca === brands ? 'option selected' : 'option'}
            onClick={() => handleOptionClick(brands, setSelectedMarca)}
          >
            {brands}
          </button>
        ))}
      </OptionContainer>
      <OptionContainer>
        <label>Modelo</label>
        {model.map((models) => (
          <button
            key={models}
            className={selectedModelo === models ? 'option selected' : 'option'}
            onClick={() => handleOptionClick(models, setSelectedModelo)}
          >
            {models}
          </button>
        ))}
      </OptionContainer>
      <OptionContainer>
        <label>Cor</label>
        {color.map((colors) => (
          <button
            key={colors}
            className={
              selectedCor.toLowerCase() === colors.toLowerCase()
                ? 'option selected'
                : 'option'
            }
            onClick={() => handleOptionClick(colors, setSelectedCor)}
          >
            {colors}
          </button>
        ))}
      </OptionContainer>
      <OptionContainer>
        <label>Ano</label>
        <button
          className={selectedAno === '' ? 'option selected' : 'option'}
          onClick={() => handleOptionClick('', setSelectedAno)}
        >
        </button>
        {year.map((years) => (
          <button
            key={years}
            className={
              selectedAno === years.toString() ? 'option selected' : 'option'
            }
            onClick={() =>
              handleOptionClick(
                selectedAno === years.toString() ? '' : years.toString(),
                setSelectedAno
              )
            }
          >
            {years}
          </button>
        ))}
      </OptionContainer>
      <OptionContainer>
        <label>Combustível</label>
        {fuel.map((fuels) => (
          <button
            key={fuels}
            className={
              selectedCombustivel.toLowerCase() === fuels.toLowerCase()
                ? 'option selected'
                : 'option'
            }
            onClick={() => handleOptionClick(fuels, setSelectedCombustivel)}
          >
            {fuels}
          </button>
        ))}
      </OptionContainer>
      <OptionContainer>
        <label>Km</label>
        <PriceKmDiv>
          <span>{selectedKm[0]}km</span>
          <span>{selectedKm[1]}km</span>
        </PriceKmDiv>
        <RangeInputContainer>
          <input
            type="range"
            min={0}
            max={700000}
            value={selectedKm[0]}
            onChange={(e) =>
              setSelectedKm([Number(e.target.value), selectedKm[1]])
            }
          />
          <input
            type="range"
            min={0}
            max={700000}
            value={selectedKm[1]}
            onChange={(e) =>
              setSelectedKm([selectedKm[0], Number(e.target.value)])
            }
          />
        </RangeInputContainer>
      </OptionContainer>
      <OptionContainer>
        <label>Preço</label>
        <PriceKmDiv>
          <span>R${selectedPreco[0]}</span>
          <span>R${selectedPreco[1]}</span>
        </PriceKmDiv>
        <RangeInputContainer>
          <input
            type="range"
            min={0}
            max={1000000000}
            value={selectedPreco[0]}
            onChange={(e) =>
              setSelectedPreco([Number(e.target.value), selectedPreco[1]])
            }
          />
          <input
            type="range"
            min={0}
            max={1000000000}
            value={selectedPreco[1]}
            onChange={(e) =>
              setSelectedPreco([selectedPreco[0], Number(e.target.value)])
            }
          />
        </RangeInputContainer>
      </OptionContainer>
      {selectedMarca ||
        selectedModelo ||
        selectedCor ||
        selectedAno ||
        selectedCombustivel ||
        (selectedKm[0] !== 0 || selectedKm[1] !== 700000) ||
        (selectedPreco[0] !== 0 || selectedPreco[1] !== 1000000000) ? (
          <FilterButton onClick={clearFilter}>Limpar Filtros</FilterButton>
        ) : null}
    </div>
  );
};

export default CarFilter;