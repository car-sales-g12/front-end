import styled from "styled-components";


export const StyledDescriptionCar = styled.div`
  width: 751px;
  max-width: 100%;
  padding: 36px 44px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: max-content;
  border-radius: 4px;
  h2 {
    color: var(--color-grey-1);
    font-size: 20px;
    margin: 0px;
  }
  p {
    color: var(--color-grey-2);
    font-size: 18px;
    line-height: 150%;
    margin: 0px;
  }
  @media (max-width:425px){
    padding:36px 28px ;

  }
`;
