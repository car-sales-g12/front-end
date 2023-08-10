import React, { useState } from 'react';

export interface FilterOptions {
  marca: string;
  modelo: string;
  cor: string;
  ano: number;
  combustivel: string;
  km: [number, number];
  preco: [number, number];
}

interface CarFilterProps {
  onApplyFilter: (filters: FilterOptions) => void;
}

const CarFilter: React.FC<CarFilterProps> = ({ onApplyFilter }) => {
  
  const marcas = [
    'general Motors',
    'Fiat',
    'Ford',
    'Honda',
    'Porsche',
    'Volswagen',
  ];

  const modelos = [
    'Civic',
    'Corolla',
    'Cruze',
    'Fit',
    'Gol',
    'Ka',
    'Onix',
    'Porsche 718',
  ];

  const cores = ['Azul', 'Branca', 'Cinza', 'Prata', 'Preto', 'Verde'];

  const anos = [2022, 2021, 2018, 2015, 2013, 2012, 2010];

  const combustiveis = ['Elétrico', 'Flex', 'Híbrido'];

  const [selectedMarca, setSelectedMarca] = useState('');
  const [selectedModelo, setSelectedModelo] = useState('');
  const [selectedCor, setSelectedCor] = useState('');
  const [selectedAno, setSelectedAno] = useState(0);
  const [selectedCombustivel, setSelectedCombustivel] = useState('');
  const [selectedKm, setSelectedKm] = useState<[number, number]>([0, 650000]);
  const [selectedPreco, setSelectedPreco] = useState<[number, number]>([10000, 550000]);

  const applyFilter = () => {
    const filters: FilterOptions = {
      marca: selectedMarca,
      modelo: selectedModelo,
      cor: selectedCor,
      ano: selectedAno,
      combustivel: selectedCombustivel,
      km: selectedKm,
      preco: selectedPreco,
    };

    

    onApplyFilter(filters);
  };

  const toggleOption = (currentValue: string, setValue: React.Dispatch<React.SetStateAction<string>>) => {
    setValue(currentValue === '' ? currentValue : '');
  };

  const handleRangeChange = (
    value: [number, number],
    setValue: React.Dispatch<React.SetStateAction<[number, number]>>
  ) => {
    setValue(value);
  };

  return (
    <div>
      <div>
        <label>Marca:</label>
        {marcas.map((marca) => (
          <div
            key={marca}
            className={selectedMarca === marca ? 'option selected' : 'option'}
            onClick={() => toggleOption(selectedMarca, setSelectedMarca)}
          >
            {marca}
          </div>
        ))}
      </div>
      <div>
        <label>Modelo:</label>
        {modelos.map((modelo) => (
          <div
            key={modelo}
            className={selectedModelo === modelo ? 'option selected' : 'option'}
            onClick={() => toggleOption(selectedModelo, setSelectedModelo)}
          >
            {modelo}
          </div>
        ))}
      </div>
      <div>
        <label>Cor:</label>
        {cores.map((cor) => (
          <div
            key={cor}
            className={selectedCor.toLowerCase() === cor.toLowerCase() ? 'option selected' : 'option'}
            onClick={() => setSelectedCor(selectedCor.toLowerCase() === cor.toLowerCase() ? '' : cor)}
          >
            {cor}
          </div>
        ))}
      </div>
      <div>
        <label>Ano:</label>
        <div
          className={selectedAno === 0 ? 'option selected' : 'option'}
          onClick={() => setSelectedAno(0)}
        >
          Qualquer
        </div>
        {anos.map((ano) => (
          <div
            key={ano}
            className={selectedAno === ano ? 'option selected' : 'option'}
            onClick={() => setSelectedAno(selectedAno === ano ? 0 : ano)}
          >
            {ano}
          </div>
        ))}
      </div>
      <div>
        <label>Combustível:</label>
        {combustiveis.map((combustivel) => (
          <div
            key={combustivel}
            className={selectedCombustivel.toLowerCase() === combustivel.toLowerCase() ? 'option selected' : 'option'}
            onClick={() => setSelectedCombustivel(selectedCombustivel.toLowerCase() === combustivel.toLowerCase() ? '' : combustivel)}
          >
            {combustivel}
          </div>
        ))}
      </div>
      <div>
        <label>Km:</label>
        <input
          type="range"
          min={0}
          max={650000}
          value={selectedKm[0]}
          onChange={(e) => handleRangeChange([Number(e.target.value), selectedKm[1]], setSelectedKm)}
        />
        <input
          type="range"
          min={0}
          max={650000}
          value={selectedKm[1]}
          onChange={(e) => handleRangeChange([selectedKm[0], Number(e.target.value)], setSelectedKm)}
        />
        <div>De {selectedKm[0]} km a {selectedKm[1]} km</div>
      </div>
      <div>
        <label>Preço:</label>
        <input
          type="range"
          min={10000}
          max={550000}
          value={selectedPreco[0]}
          onChange={(e) => handleRangeChange([Number(e.target.value), selectedPreco[1]], setSelectedPreco)}
        />
        <input
          type="range"
          min={10000}
          max={550000}
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