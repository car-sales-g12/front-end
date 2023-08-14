import { styled } from 'styled-components'

export const SytlesMainLogin = styled.main`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    background-color: var(--color-brand-4);
    padding: 0.7rem;
    font-family: 'Inter', sans-serif;
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
        font-family: 'Inter', sans-serif;

        > form {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            font-family: 'Inter', sans-serif;

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
                color: var(--color-grey-3);
                font-size: 0.7rem;
                font-family: 'Inter', sans-serif;
            }
            > h2 {
                color: var(--color-grey-2);
                font-size: 0.7rem;
                padding-right: 1rem;
                font-family: 'Inter', sans-serif;
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
                font-family: 'Inter', sans-serif;
            }
        }
        > h3 {
            font-size: 0.7rem;
            color: var(--color-grey-2);
            text-align: center;
            font-family: 'Inter', sans-serif;
        }
        > button {
            min-width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: transparent;
            border: 1px solid;
            border-radius: 4px;
            color: var(--color-grey-0);
            padding: 0.8rem;
            font-size: 1rem;
            font-family: 'Inter', sans-serif;
        }
    }
`