import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

`;

export const CarListContainer = styled.div`
  flex: 1;
`;

export const FilterContainer = styled.div`
  width: 454px;
  height: 1680px;
`;

export const CarCard = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  width: 312px;
  height: 420px;
  top: 1135px;
  left: 505px;
  gap: 48px;
  display: inline-block;
`;

export const CarImage = styled.img`
max-width: 312px;
height: 152px;
`;

export const BrandAndModelName = styled.h3`
font-family: 'Lexend', sans-serif;
font-weight: 600;
font-size: 16px;
line-height: 20px;
`;

export const CarDescription = styled.p`
font-family: 'Inter', sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 24px;
`;

export const KmYearPriceContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 10px;
`;

export const KmYearElement = styled.p`
  border: 1px solid #ccc;
  width: auto;
  height: 32px;
  border-radius: 4px;
  padding: 4px 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  background-color: var(--color-brand-4);
  color: var(--color-brand-1);
  overflow: hidden;
`;

export const PriceElement = styled.p`
font-family: 'Lexend', sans-serif;
font-weight: 500;
font-size: 16px;
line-height: 20px;
`;

export const PaginationContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
`;