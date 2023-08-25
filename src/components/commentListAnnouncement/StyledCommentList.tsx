import styled from "styled-components";

export const StyledCommentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 44px;
  width: 752px;
  max-width: 100%;
  max-height: 700px;
  overflow-y:auto;
  padding-right: 44px;
  padding-left: 44px;
  padding-top: 0px;
  padding-bottom: 36px;
  background-color: var(--color-grey-10);
  margin:0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  margin-top: 20px;
  border-radius: 4px;


  .ul-title {
    color: var(--color-grey-1);
    font-size: 20px;
    position: relative;
    top: 30px;
  }
  @media (max-width:425px){
    padding:36px 28px ;

  }
`;
