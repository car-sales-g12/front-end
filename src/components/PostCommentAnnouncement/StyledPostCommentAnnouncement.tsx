import styled from "styled-components";

export const StyledPostComment = styled.div`
  width: 751px;
  max-width: 100%;
  padding: 36px 44px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  gap: 15px;
  .top_comment {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    width: 200px;
    z-index: 0;
  
    img {
      width: 40px;
      height: 40px;
      background-color: var(--color-grey-1);
      border-radius: 50%;
    }
    h2 {
      color: var(--color-grey-1);
      font-size: 16px;
      font-weight: 500;
    }
  }
  .commentArea{
    width: 100%;
    position: relative;
    height: max-content;
    textarea{
    resize: none;
    width: 100%;
    border-radius: 4px;
    border: 1px solid var(--color-grey-4);
    font-size: 16px;
    padding: 10px;
    color: var(--color-grey-3);
  }
  button{
    position: absolute;
    bottom: 20px;
    right:15px;
    border-radius: 4px;
    background-color: var(--color-brand-1);
    color:var(--color-white-fixed);
    border: none;
    padding: 12px 20px;
    font-size: 16px;

  }
  }
  .labelsComment{
    display: flex;
    flex-direction: row;
    width: max-content;
    max-width: 100%;
    gap:10px;
    flex-wrap: wrap;
    span{
        font-size: 14px;
        background-color: var(--color-grey-5);
        border-radius: 12px;
        padding: 5px 12px;
        max-width:100%;
        color: var(--color-grey-3);
        cursor: pointer;
    }
  }
  @media (max-width:425px){
    padding:36px 26px ;
    .commentArea{
        display:flex;
        flex-direction: column;
        height: max-content;
        gap: 20px;
      
        margin-bottom: 10px;
        textarea{
            padding-top: 15px;
            height: 160px;
        }
        button{
            position: static;
            width: max-content;
            font-size: 14px;
        }
    }
  }
`;
