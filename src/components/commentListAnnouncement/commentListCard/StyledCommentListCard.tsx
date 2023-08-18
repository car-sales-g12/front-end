import styled from "styled-components";

export const StyledCommentListCard = styled.li`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 12px;
  .top_comment {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    width: 200px;
    z-index: 0;
    img {
      width: 32px;
      height: 32px;
      background-color: var(--color-grey-1);
      border-radius: 50%;
    }
    h2 {
      color: var(--color-grey-1);
      font-size: 14px;
      font-weight: 500;
    }
    p {
      font-size: 12px;
      color: var(--color-grey-3);
    }
  }

  .bottom_comment {
    display: flex;
    flex-direction: row;
    align-items: top;
    gap: 15px;
    p {
      width: 100%;
      height: max-content;
      text-align: justify;
      font-size: 16px;
      color:var(--color-grey-2);
      line-height: 150%;
      margin: 0px;
    }
  }
`;
