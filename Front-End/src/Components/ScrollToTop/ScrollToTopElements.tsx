import styled from "styled-components";

export const ToTop = styled.div`
  position: fixed;
  left: 94vw;
  bottom: 4vw;
  height: 1em;
  font-size: 3rem;
  z-index: 99;
  cursor: pointer;
  color: yellowgreen;
  opacity: 50%;

  @media screen and (max-width: 768px) {
    left: 85vw;
  }
`;
