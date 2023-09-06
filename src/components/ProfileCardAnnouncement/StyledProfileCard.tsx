import styled from "styled-components";

export const StyledProfileCard = styled.div`
  width: 420px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  border-radius: 4px;
  padding: 34px;
  position:absolute;
  top:140px;
  right:-300px;
  background-color:var(--color-grey-10);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 

  img {
    width: 104px;
    height: 104px;
    background-color: var(--color-grey-1);
    border-radius: 50%;
  }
  h2 {
    color: var(--color-grey-1);
    font-size: 20px;
  }
  p {
    color: var(--color-grey-2);
    font-size: 18px;
    line-height: 150%;
    margin: 0px;
    text-align: center;
  }

  .buttonProfile {
    border: none;
    background-color: var(--color-grey-0);
    color: var(--color-white-fixed);
    font-size: 20px;
    border-radius: 4px;
    font-weight: 500;
    padding: 12px 28px;
  }
  @media (max-width:600px){
    position:relative;
    right:0px;
    top:0px;
    margin:20px auto;
  }
`;
