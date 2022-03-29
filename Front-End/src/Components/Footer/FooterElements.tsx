import styled from "styled-components";

export const FooterBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 3.5rem 0 3.5rem;
  background-color: #202020;
  min-height: 6em;
  height: fit-content;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    padding: 0;
  }
`;

export const FooterText = styled.div`
  padding: 0 3.5em 0 3.5em;
  color: white;
  font-size: 1em;
  align-self: center;
  text-align: center;
`;
