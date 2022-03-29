import styled from "styled-components";

export const WorkBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 7rem 0 7rem;
  min-height: 100%;
  gap: 2em;
  padding-bottom: 10rem;
  position: relative;
  align-items: center;

  &:before {
    content: "<Work>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 1.8rem;
    left: 0.5em;
    position: absolute;

    @media screen and (max-width: 768px) {
      margin-left: 0;
      margin-top: -0.5em;
      left: 0.5em;
      align-items: center;
      justify-content: center;
      align-self: center;
    }
  }

  &:after {
    content: "</Work>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 1.8rem;
    position: absolute;
    right: 0.5em;
    bottom: 0px;

    @media screen and (max-width: 768px) {
      left: 0.5em;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0px 2rem 0 2rem;
    gap: 1em;
    align-items: center;
  }
`;

export const WorkContainer = styled.div`
  padding-top: 5em;
  padding-left: 3.5rem;
  display: flex;

  @media screen and (max-width: 768px) {
    padding-top: 1em;
    padding-left: 0;
    align-self: center;
    width: auto;
  }
`;
