import styled from "styled-components";

export const AboutBody = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 3.5rem 0 3.5rem;
  min-height: 100%;
  height: fit-content;
  padding-bottom: 7rem;
  position: relative;

  &:before {
    content: "<About>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 1.8rem;
    margin-left: -1.5em;
    position: absolute;

    @media screen and (max-width: 768px) {
      margin-top: -0.5em;
      margin-left: 0;
      left: 0.5em;
    }
  }

  &:after {
    content: "</About>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 1.8rem;
    position: absolute;
    bottom: 0px;
    right: 0.5em;

    @media screen and (max-width: 768px) {
      left: 0.5em;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0px 1rem 0 1rem;
    padding-bottom: 6rem;
  }
`;

export const AboutContainer = styled.div`
  padding-top: 3em;
  padding-left: 3.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;

  @media screen and (max-width: 768px) {
    padding-top: 1em;
    padding-left: 0;
    align-self: center;
    width: auto;
  }
`;

export const StyledHeading = styled.h1`
  display: flex;
  font-size: 4em;
  align-items: center;
  color: yellowgreen;

  @media screen and (max-width: 768px) {
    align-self: center;
    font-size: 2.5em;
  }

  @media screen and (min-width: 768px) {
    padding-top: 1em;
    padding-left: 0;
    align-self: center;
    width: auto;

    &:after {
      content: "";
      flex: 1;
      background-color: #fff;
      margin-left: 0.8em;
      height: 1px;
    }
  }
`;

export const TextSection = styled.div`
  font-size: 1.3em;
  padding-top: 1.3em;
  line-height: 1.4em;
  color: white;
`;

export const Photo = styled.img`
  justify-content: center;
  align-items: center;
  height: 400px;
  width: auto;
  border-radius: 12%;
  transition: 0.3s ease-in;
  align-self: center;
  margin-top: 6.6em;

  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
    transform: scale(1.2);
  }

  @media screen and (max-width: 768px) {
    filter: none;
    margin-top: 0;

    &:hover {
      filter: none;
      transform: none;
    }
  }
`;
