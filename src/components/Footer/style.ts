import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-grey-0);

  .name {
    font-size: 20px;
    margin-left: 40px;
    color: var(--color-white-fixed);
  }

  span {
    font-size: 14px;
  }

  .copyright {
    text-align: center;
    font-size: 12px;
    color: var(--color-grey-4);
  }

  .homeButton {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 40px;
    cursor: pointer;
    background-color: var(--color-grey-1);
    border-radius: 5px;
    color: var(--color-white-fixed);
  }

  @media (max-width: 480px) {
    height: unset;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    .title {
      margin: 15px auto 0px auto;
    }

    .homeButton {
      margin: 0px auto 15px auto;
    }
  }
`;