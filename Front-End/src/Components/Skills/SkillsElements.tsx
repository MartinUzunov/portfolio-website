import styled from "styled-components";

export const SkillsBody = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 3.5rem 0 3.5rem;
  min-height: 100%;
  position: relative;
  padding-bottom: 2em;

  &:before {
    content: "<Skills>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 1.8rem;
    margin-left: -1.5em;
    position: absolute;

    @media screen and (max-width: 768px) {
      margin-left: 0;
      left: 0.5em;
    }
  }

  &:after {
    content: "</Skills>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 1.8rem;
    position: absolute;
    bottom: 1em;
    right: 0.5em;

    @media screen and (max-width: 768px) {
      left: 0.5em;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 1em 0 1em;
    padding-bottom: 2em;
  }
`;

export const SkillsContainer = styled.div<{ justify?: string }>`
  padding-top: 5em;
  padding-left: 3.5rem;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 50%;
  ${({ justify }) =>
    justify &&
    `
      justify-content: center;
  `};

  @media screen and (max-width: 768px) {
    padding-top: 2em;
    padding-left: 0;
    align-self: center;
    width: auto;
  }
`;

export const Text = styled.div`
  font-size: 1.4em;
  padding-top: 1.3em;
  line-height: 1.4em;
  color: white;
`;
