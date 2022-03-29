import styled from "styled-components";

export const ProjectBody = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    transform: scale(0.7);
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: -4em;
  }

  @media screen and (max-width: 425px) {
    transform: scale(0.5);
    margin-top: -8em;
  }
`;

export const VideoHolder = styled.div`
  border-radius: 10px;

  &:before {
    content: "";
    position: absolute;
    background: linear-gradient(
      0deg,
      rgba(34, 193, 195, 1) 0%,
      rgba(154, 205, 49, 1) 100%
    );
    display: inline-block;
    width: 35rem;
    height: 20rem;
    border-radius: 10px;
    mix-blend-mode: screen;
    animation-name: fade-in;
    animation-duration: 1s;
    animation-fill-mode: forwards;

    @keyframes fade-in {
      from {
        opacity: 0%;
      }

      to {
        opacity: 70%;
      }
    }
  }

  &:hover::before {
    animation-name: fade-out;
    animation-duration: 1s;
    animation-fill-mode: forwards;

    @keyframes fade-out {
      from {
        opacity: 70%;
      }

      to {
        opacity: 0%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: fit-content;
    opacity: 30%;
  }
`;

export const Video = styled.video`
  width: 35rem;
  height: 20rem;
  object-fit: fit;
  border-radius: 10px;
  min-height: 100%;
  min-width: 100%;

  &:before {
    content: "";
    position: absolute;
    background: linear-gradient(
      0deg,
      rgba(34, 193, 195, 1) 0%,
      rgba(154, 205, 49, 1) 100%
    );
    width: 35rem;
    height: 20rem;
    border-radius: 10px;
    mix-blend-mode: screen;
    display: inline-block;
    animation-name: fade-in;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    box-sizing: inherit;

    @keyframes fade-in {
      from {
        opacity: 0%;
      }

      to {
        opacity: 80%;
      }
    }
  }

  &:hover::before {
    animation-name: fade-out;
    animation-duration: 1s;
    animation-fill-mode: forwards;

    @keyframes fade-out {
      from {
        opacity: 70%;
      }

      to {
        opacity: 0%;
      }
    }
  }
`;

export const DescriptionSide = styled.div<{ inversed: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 25em;
  height: 20em;
  z-index: 20;

  ${({ inversed }) =>
    inversed === false &&
    `
    align-items: flex-start;
  `};

  @media screen and (max-width: 768px) {
    position: absolute;
    align-items: flex-start;
  }
`;

export const ProjectName = styled.h1<{ inversed: boolean }>`
  color: white;
  padding-bottom: 1em;
  padding-right: 0.5em;

  ${({ inversed }) =>
    inversed === false &&
    `
    padding-left: 0.5em;
    padding-right: 0;
  `};

  @media screen and (max-width: 768px) {
    padding: 0;
    padding-bottom: 1em;
    padding-left: 0.5em;
    color: yellowgreen;
  }
`;

export const Description = styled.p`
  background-color: #333333;
  padding: 1.5em 1.5em 1.5em 1.5em;
  width: 26rem;
  border-radius: 30px;
  color: white;

  font-size: 0.9em;

  @media screen and (max-width: 768px) {
    background-color: transparent;
    padding: 0;
    padding-left: 1em;
  }
`;

export const TechStack = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 1em;
`;

export const TechStackItem = styled.div`
  color: gray;
  padding-right: 0.5em;
  padding-top: 0.5em;
  padding-left: 0.5em;
  font-size: 0.8em;

  @media screen and (max-width: 768px) {
    padding: 0;
    padding-left: 1.2em;
    font-weight: bold;
  }
`;
