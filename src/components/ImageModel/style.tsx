import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

export const ModalWrapper = styled.div`
  display: fixed;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Backdrop */
  &.visible {
    animation: ${slideDown} 0.5s ease-in-out forwards;
  }
  &.hidden {
    animation: ${slideUp} 0.5s ease-in-out forwards;
  }

  div {
    margin-top: 50px;
    position: relative;
    width: 500px;
    max-width: 90%;
    height: max-content;
    margin: 100px auto;
    span {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 18px;
      color: var(--color-white-fixed);
      cursor: pointer;
    }
    img {
      border-radius: 4px;
      object-fit: contain;
      width: 100%;
    }
  }
`;