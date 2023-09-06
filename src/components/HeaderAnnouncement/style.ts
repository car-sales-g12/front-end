import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 5rem;
  top: 0;
  position:fixed;
  z-index:10;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--color-grey-10);
  border-bottom: 1px solid var(--color-grey-6);

  padding: 0 16px;

  .first-acess {
    display: none;
    border-left: 1px solid var(--color-grey-6);
    min-height: 100%;
    gap: 0.5rem;
    padding: 0px 0px 0px 1rem;
    align-items: center;

    .button-login {
      background-color: transparent;
      border: none;
      color: var(--color-brand-1);
      font-weight: 600;
      font-family: "Inter", sans-serif;
      display: flex;
      align-items: center;
      padding: 0.4rem 0.7rem;
    }
    .button-cadastro {
      background-color: transparent;
      border: 1px solid var(--color-grey-6);
      color: var(--color-grey-0);
      font-weight: 600;
      font-family: "Inter", sans-serif;
      border-radius: 4px;
      display: flex;
      align-items: center;
      padding: 0.4rem 0.7rem;
    }
  }
  .menu {
    display: flex;
  }
  @media (min-width: 450px) {
    .first-acess {
      display: flex;
    }
    .menu {
      display: none;
    }
  }
`;

export const Modal = styled.div`
padding: 1.5rem 0.3rem;
display: flex;
flex-direction: column;
gap: 1rem;

.button-login {
  background-color: transparent;
  border: none;
  color: var(--color-grey-2);
  font-weight: 600;
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
  padding: 0.4rem 0.7rem;
}
.button-cadastro {
  background-color: transparent;
  border: 1px solid var(--color-grey-6);
  color: var(--color-grey-0);
  font-weight: 600;
  font-family: "Inter", sans-serif;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  padding: 0.6rem 0rem;
  margin: 0 auto;
}

@media (min-width: 450px) {
    display: none;
}
`