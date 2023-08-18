import styled from "styled-components";

export const StyledCommentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 44px;
  width: 752px;
  max-width: 100%;
  padding-right: 44px;
  padding-left: 44px;
  padding-top: 0px;
  padding-bottom: 36px;
  background-color: transparent;
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
