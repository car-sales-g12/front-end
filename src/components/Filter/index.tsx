import React, { useState } from 'react';

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
  const brand = [
    'general Motors',
    'Fiat',
    'Ford',
    'Honda',
    'Porsche',
    'Volswagen',
  ];

  const model = [
    'Civic',
    'Corolla',
    'Cruze',
    'Fit',
    'Gol',
    'Ka',
    'Onix',
    'Porsche 718',
  ];

  const color = ['Blue', 'White', 'Gray', 'Silver', 'Black', 'Green'];

  const year = [2022, 2021, 2018, 2015, 2013, 2012, 2010];

  const fuel = ['Elétrico', 'Flex', 'Híbrido'];

  const [selectedMarca, setSelectedMarca] = useState<string>('');
  const [selectedModelo, setSelectedModelo] = useState<string>('');
  const [selectedCor, setSelectedCor] = useState<string>('');
  const [selectedAno, setSelectedAno] = useState<string>('');
  const [selectedCombustivel, setSelectedCombustivel] = useState<string>('');
  const [selectedKm, setSelectedKm] = useState<[number, number]>([0, 700000]);
  const [selectedPreco, setSelectedPreco] = useState<[number, number]>([0, 1000000]);

  const handleOptionClick = (
    currentValue: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setValue(currentValue === '' ? '' : currentValue);
    console.log(`Valor selecionado: ${currentValue}`);
  };
  const handleRangeChange = (
    value: [number, number],
    setValue: React.Dispatch<React.SetStateAction<[number, number]>>
  ) => {
    setValue(value);
  };

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

  return (
    <div>
      <div>
        <label>Marca:</label>
        {brand.map((brands) => (
          <button
            key={brands}
            className={selectedMarca === brands ? 'option selected' : 'option'}
            onClick={() => handleOptionClick(brands, setSelectedMarca)}
          >
            {brands}
          </button>
        ))}
      </div>
      <div>
        <label>Modelo:</label>
        {model.map((models) => (
          <button
            key={models}
            className={selectedModelo === models ? 'option selected' : 'option'}
            onClick={() => handleOptionClick(models, setSelectedModelo)}
          >
            {models}
          </button>
        ))}
      </div>
      <div>
        <label>Cor:</label>
        {color.map((colors) => (
          <button
            key={colors}
            className={selectedCor.toLowerCase() === colors.toLowerCase() ? 'option selected' : 'option'}
            onClick={() => handleOptionClick(colors, setSelectedCor)}
          >
            {colors}
          </button>
        ))}
      </div>
      <div>
        <label>Ano:</label>
        <button
          className={selectedAno === '' ? 'option selected' : 'option'}
          onClick={() => handleOptionClick('', setSelectedAno)}
        >
        </button>
        {year.map((years) => (
          <button
            key={years}
            className={selectedAno === years.toString() ? 'option selected' : 'option'}
            onClick={() => handleOptionClick(selectedAno === years.toString() ? '' : years.toString(), setSelectedAno)}
          >
            {years}
          </button>
        ))}
      </div>
      <div>
        <label>Combustível:</label>
        {fuel.map((fuels) => (
          <button
            key={fuels}
            className={selectedCombustivel.toLowerCase() === fuels.toLowerCase() ? 'option selected' : 'option'}
            onClick={() => handleOptionClick(fuels, setSelectedCombustivel)}
          >
            {fuels}
          </button>
        ))}
      </div>
      <div>
        <label>Km:</label>
        <input
          type="range"
          min={0}
          max={700000}
          value={selectedKm[0]}
          onChange={(e) => handleRangeChange([Number(e.target.value), selectedKm[1]], setSelectedKm)}
        />
        <input
          type="range"
          min={0}
          max={700000}
          value={selectedKm[1]}
          onChange={(e) => handleRangeChange([selectedKm[0], Number(e.target.value)], setSelectedKm)}
        />
        <div>De {selectedKm[0]} km a {selectedKm[1]} km</div>
      </div>
      <div>
        <label>Preço:</label>
        <input
          type="range"
          min={0}
          max={1000000}
          value={selectedPreco[0]}
          onChange={(e) => handleRangeChange([Number(e.target.value), selectedPreco[1]], setSelectedPreco)}
        />
        <input
          type="range"
          min={0}
          max={1000000}
          value={selectedPreco[1]}
          onChange={(e) => handleRangeChange([selectedPreco[0], Number(e.target.value)], setSelectedPreco)}
        />
        <div>De R${selectedPreco[0]} a R${selectedPreco[1]}</div>
      </div>
      <button onClick={applyFilter}>Aplicar Filtro</button>
    </div>
  );
};

export default CarFilter;