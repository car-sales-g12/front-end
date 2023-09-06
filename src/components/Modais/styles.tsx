import styled from "styled-components";

export const StyleModal = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    background-color: rgba(0,0,0,0.4);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        position: relative;
        background-color: var(--color-white-fixed);
        border: none;
        border-radius: 6px;
        margin: 0 auto;
        max-width: 290px;
        padding: 1rem 0.8rem;
        gap: 0.8rem;

        > h2 {
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--color-grey-1);
        font-family: 'Inter', sans-serif;
        }

        > p {
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--color-grey-2);
            font-family: 'Inter', sans-serif;
        }

        > button {
            background-color: var(--color-brand-1);
            border: none;
            border-radius: 4px;
            color: var(--color-white-fixed);
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
            font-weight: 500;
            font-family: 'Inter', sans-serif;
        }

        .modal-close-button{
            background-color: transparent;
            border: none;
            font-size: 1rem;
            font-weight: 600;
            color: var(--color-grey-2);
            position: absolute;
            top: 10px;
            right: 15px;
        }
    }
`;

export const StyleRecoverPasswordModal = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    background-color: rgba(0,0,0,0.4);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    padding: 1rem;

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        background-color: var(--color-white-fixed);
        border: none;
        border-radius: 6px;
        margin: 0 auto;
        max-width: 350px;
        width: 100%;
        padding: 1rem 0.8rem;
        gap: 0.8rem;

        > h1 {
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--color-grey-1);
        font-family: 'Inter', sans-serif;
        }

        > form {
            display: flex;
            flex-direction: column;
            font-family: 'Inter', sans-serif;
            width: 100%;
            position: relative;


            > div {
                min-width: 100%;
                font-family: 'Inter', sans-serif;
                > label {
                    display: flex;
                    flex-direction: column;
                    font-size: 0.7rem;
                    font-weight: 500;
                    gap: 6px;
                    color: var(--color-grey-1);
                    font-family: 'Inter', sans-serif;

                    > input {
                        border: 2px solid var(--color-grey-7);
                        padding: 0.5rem 0.7rem;
                        border-radius: 4px;
                        color: var(--color-grey-3);
                        font-family: 'Inter', sans-serif;
                    }
                }
            }
            > p {
                font-size: 0.7rem;
                font-weight: 500;
                color: var(--color-grey-2);
                font-family: 'Inter', sans-serif;
            }
            > button {
                border-radius: 4px;
                padding: 0.4rem 1rem;
                font-size: 0.7rem;
                font-weight: 500;
                font-family: 'Inter', sans-serif;
                border: 1px solid var(--color-grey-4);
                background-color: var(--color-white-fixed);
                color: var(--color-grey-0);
                margin-top:10px;
            }
            .modal-close-button{
                background-color: transparent;
                border: none;
                font-size: 1rem;
                font-weight: 600;
                color: var(--color-grey-2);
                position: absolute;
                top: -42px;
                right: 7px;
                padding: 0;
            }
        }
        > button {
            background-color: var(--color-brand-1);
            border: none;
            border-radius: 4px;
            color: var(--color-white-fixed);
            padding: 0.5rem 1rem;
            font-size: 0.7rem;
            font-weight: 500;
            font-family: 'Inter',sans-serif;
            width: 100%;
        }
    }
`

export const StyleEditAdModal = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    background-color: rgba(0,0,0,0.4);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    padding: 1rem;

    h1 {
      font-size: 1rem;
    font-weight: 600;
    color: var(--color-grey-1);
    }

    > div {
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
        max-height: 100%;
        overflow-y: auto;
        position: relative;
        
    > form {
      display: flex;
      flex-direction: column;
      font-family: "Inter", sans-serif;
      gap: 6px;

      > div {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        max-width: 100%;
        box-sizing: border-box;
        margin: 0.5rem 0rem;

        > div {
          font-family: "Inter", sans-serif;
          max-width: 48%;
            input {
              border: 2px solid var(--color-grey-7);
              padding: 0.5rem 0.7rem;
              border-radius: 4px;
              color: var(--color-grey-3);
              font-family: "Inter", sans-serif;
              margin-top: 0.3rem;
              max-width: 100%;
              font-size: 0.7rem;
            }
        }
        .div_description_img{
          min-width: 100%;
          > input {
          min-width: 100%;
          }
        }
      }
      .div_button_options {
        > button {
          min-width: 48%;
          border: none;
          border-radius: 4px;
          padding: 0.7rem 0.5rem;
          font-size: 1rem;
          margin-top: 1rem;
          font-family: "Inter", sans-serif;
          font-weight: 600;
          font-size: 0.7rem;
        }
        > button:nth-child(1) {
          background-color: var(--color-grey-6);
          color: var(--color-grey-2);
        }
        > button:nth-child(1):is(:hover, :focus){
          background-color: var(--color-brand-3);
        }
        
        > button:nth-child(2) {
          background-color: var(--color-brand-3);
          color: var(--color-brand-4);
        }
        > button:nth-child(2):is(:hover, :focus){
          background-color: var(--color-brand-1);
        }
      } 
      .div-is-active {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.2rem;
      }
      label {
        display: flex;
        flex-direction: column;
        font-size: 0.7rem;
        font-weight: 600;
        color: var(--color-grey-1);
        font-family: "Inter", sans-serif;
      }
      select {
        border: 2px solid var(--color-grey-7);
        padding: 0.5rem 0.7rem;
        border-radius: 4px;
        color: var(--color-grey-3);
        font-family: "Inter", sans-serif;
      }
      p {
        color: var(--color-grey-2);
        font-size: 0.6rem;
        font-family: "Inter", sans-serif;
        position: absolute;
        bottom: -20px;
      }
      h3 {
        font-family: "Inter", sans-serif;
        font-size: 0.8rem;
        font-weight: 600;
        margin: 1rem 0rem;
        color: var(--color-grey-0);
      }
      
      .button_add_galeria {
        background-color: var(--color-brand-4);
        color: var(--color-brand-1);
        padding: 0.6rem 0.5rem;
        margin-top: 0.5rem;
        font-size: .7rem;
        border-radius: 4px;
        border: none;
      }
      .button_add_galeria:is(:hover, :focus){
        background-color: var(--color-brand-3);
      }
    }
    > h3 {
      font-size: 0.7rem;
      color: var(--color-grey-2);
      text-align: center;
      font-family: "Inter", sans-serif;
    }
    }
    .modal-close-button{
      background-color: transparent;
      border: none;
      font-size: 1rem;
      font-weight: 600;
      color: var(--color-grey-2);
      position: absolute;
      top: 20px;
      right: 12px;
      padding: 0;
  }
`