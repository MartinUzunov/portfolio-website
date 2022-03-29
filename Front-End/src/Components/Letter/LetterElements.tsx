import styled from "styled-components";

export const CustomLetter = styled.div<{ animated?: boolean }>`
  color: white;
  font-size: 3.5em;
  display: inline-block;
  font-weight: bold;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-fill-mode: backwards;
  margin: 0 auto 0 auto;
  transform-origin: bottom;
  transition: all 1s ease-in-out;

  ${({ animated }) =>
    animated &&
    `
        color: yellowgreen;
        animation-name: bounce;
        animation-timing-function: cubic-bezier(0.235, 0.760, 0.420, 1);
    `}

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(1.2, 0.9) translateY(0);
    }
    30% {
      transform: scale(0.9, 1.1) translateY(-20px);
    }
    50% {
      transform: scale(1.05, 0.95) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(-7px);
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }
`;
