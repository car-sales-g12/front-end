import { styled } from 'styled-components';
import Photo from '../../assets/Photo.svg';

export const StyledMain = styled.div`
  .welcomeBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40rem;
    padding: 1rem;
    position: relative;
    overflow: hidden;
    color: var(--color-grey-10);
    background-image: url(${Photo});
    background-size: cover;
    background-position: 48% 61%;
    -webkit-background-size: cover;
  }

  .welcomeBox:after {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 8;
    background: -moz-linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0) 40%,
      #000 100%
    );
    background: -webkit-linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0) 40%,
      #000 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0) 40%,
      #000 100%
    );
  }

  /* .welcomeBox h1 {
    margin-bottom: 2rem;
  }
  .welcomeBox p {
    text-align: center;
  } */
`;