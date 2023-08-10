import styled from 'styled-components';

export const CarFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Option = styled.div<{ selected: boolean }>`
  cursor: pointer;
  padding: 5px;
  border-radius: 3px;
  background-color: ${props => (props.selected ? '#3498db' : 'transparent')};
  color: ${props => (props.selected ? '#fff' : '#000')};
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const RangeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const RangeInput = styled.input`
  width: 100%;
`;