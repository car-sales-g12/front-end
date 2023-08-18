import styled from 'styled-components';

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

label {
  font-family: 'Lexend', sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  padding-top: 30px;
  padding-bottom: 30px;
}

button {
  font-family: 'Lexend', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    display: inline;
    padding: 0;
    background: none;
    border: none;
    color: var(--color-grey-3);
    text-align: left;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  
  }
`

export const RangeInputContainer = styled.div`
  display: flex;

  input[type='range'] {
    width: 35%;
    margin: 0;
    margin-right: -3px;

  }

`

export const PriceKmDiv = styled.div`
    width: 60%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding-bottom: 10px;

    span {
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      font-family: 'Lexend', sans-serif;
      color: var(--color-grey-3);
    }
`;

export const FilterButton = styled.button`
width: 279px;
border: 2px solid var(--color-brand-2);
border-radius: 4px;
background-color: var(--color-brand-2);
color: var( --color-white-fixed);
font-weight: 600;
font-size: 16px;
line-height: 20px;
padding: 10px;
cursor: pointer;
transition: background-color 0.3s, color 0.3s;

&:hover {
  background-color: #000;
  color: #fff;
}
`;