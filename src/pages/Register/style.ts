import { styled } from "styled-components";

export const SytlesMainRegister = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0.7rem;
  font-family: "Inter", sans-serif;
  > section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--color-white-fixed);
    margin: 0 auto;
    padding: 1rem;
    border: none;
    border-radius: 4px;
    max-width: 460px;
    width: 100%;
    font-family: "Inter", sans-serif;

    > form {
      display: flex;
      flex-direction: column;
      font-family: "Inter", sans-serif;

      > div {
        min-width: 100%;
        font-family: "Inter", sans-serif;
        > label {
          display: flex;
          flex-direction: column;
          font-size: 0.7rem;
          font-weight: 500;
          gap: 6px;
          color: var(--color-grey-1);
          font-family: "Inter", sans-serif;

          > input {
            border: 2px solid var(--color-grey-7);
            padding: 0.5rem 0.7rem;
            border-radius: 4px;
            color: var(--color-grey-3);
            font-family: "Inter", sans-serif;
          }
        }
      }
      .div-is-seller {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.2rem;
      }
      > p {
        color: var(--color-grey-3);
        font-size: 0.7rem;
        font-family: "Inter", sans-serif;
      }
      > h3 {
        font-family: "Inter", sans-serif;
        font-size: 0.8rem;
        margin-bottom: 1.5rem;
      }
      > button {
        min-width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: var(--color-brand-1);
        border: none;
        border-radius: 4px;
        color: var(--color-white-fixed);
        padding: 0.8rem;
        font-size: 1rem;
        margin-top: 2rem;
        font-family: "Inter", sans-serif;
        font-weight: 700;
      }
    }
    > h3 {
      font-size: 0.7rem;
      color: var(--color-grey-2);
      text-align: center;
      font-family: "Inter", sans-serif;
    }
  }
`;

export const FormAdress = styled.div`
  div {
    display: flex;
    flex-direction: column;
  }
  label {
    display: flex;
    flex-direction: column;
    font-size: 0.7rem;
    font-weight: 500;
    gap: 6px;
    color: var(--color-grey-1);
    font-family: "Inter", sans-serif;
  }
  input {
    border: 2px solid var(--color-grey-7);
    padding: 0.5rem 0.7rem;
    border-radius: 4px;
    color: var(--color-grey-3);
    font-family: "Inter", sans-serif;
  }
  p {
    color: var(--color-grey-3);
    font-size: 0.7rem;
    font-family: "Inter", sans-serif;
  }
`;

export const StyledButton = styled.button<{ active: boolean }>`
    min-width: 47%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 4px;
    padding: 0.8rem;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    border: ${(props) => (props.active ? "none" : "1px solid var(--color-grey-4)")};
    background-color: ${(props) => (props.active ? "var(--color-brand-1)" : "var(--color-white-fixed)")};
    color: ${(props) => (props.active ? "var(--color-white-fixed)" : "var(--color-grey-0)")};    
    font-weight: 700;
`