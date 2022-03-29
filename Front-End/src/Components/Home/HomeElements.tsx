import styled from "styled-components";
import memojiIcon from "../../Assets/memoji.png";
import { Link as LinkScroll } from "react-scroll";

export const HomeBody = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 3.5rem 0 3.5rem;
  min-height: 100%;
  padding-bottom: 4rem;
  position: relative;

  &:before {
    content: "<Home>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 1.8rem;
    margin-left: -1.5em;
    position: absolute;

    @media screen and (max-width: 768px) {
      margin-left: 0.5em;
    }
  }

  &:after {
    content: "</Home>";
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
    padding: 0;
    padding-bottom: 4rem;
  }
`;

export const HomeContainer = styled.div<{ typing_direction?: string }>`
  padding-top: 7em;
  padding-left: 4em;
  display: flex;
  flex-direction: column;
  min-width: 50%;

  &:before {
    content: "<div>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 1.8rem;
    margin-left: -2em;

    @media screen and (max-width: 768px) {
      align-self: flex-start;
      margin-left: 2em;
    }
  }

  &:after {
    content: "</div>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 1.8rem;
    align-self: flex-end;

    @media screen and (max-width: 768px) {
      align-self: flex-start;
      margin-left: 2em;
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 4em;
    align-items: center;
    justify-content: center;
    padding-left: 0;
  }
`;

export const MemojiContainer = styled.div`
  padding-top: 6em;
  padding-left: 9em;

  @media screen and (max-width: 768px) {
    visibility: hidden;
    clear: both;
    display: none;
  }
`;

export const Memoji = styled.div`
  background-image: url(${memojiIcon});
  background-size: contain;
  background-repeat: no-repeat;
  height: 30em;
  width: 30em;
  max-width: 100%;
  z-index: 0;

  @media screen and (max-width: 1400px) {
    height: 24em;
    width: 24em;
  }

  @media screen and (max-width: 1200px) {
    height: 15em;
    width: 15em;
  }
`;

export const TypeWritter = styled.div<{ typing_direction?: string }>`
  font-size: 2.8em;
  color: white;
  max-width: fit-content;
  overflow: hidden;
  border-right: 0.15em solid greenyellow;
  white-space: nowrap;
  letter-spacing: 0.05em;

  ${({ typing_direction }) =>
    typing_direction === "forward" &&
    `
      animation: typing 4.0s steps(60, end), blink-caret 0.75s;
  `};

  ${({ typing_direction }) =>
    typing_direction === "backward" &&
    `
      animation: deleting 4.0s steps(60, end), blink-caret 0.75s;
  `};

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes deleting {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: greenyellow;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 2em;
  }
`;

export const Button = styled(LinkScroll)`
  background-color: yellowgreen;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  font-weight: bold;
  height: 3.5em;
  width: 10em;
  vertical-align: center;
  margin-top: 8em;
  transition: 500ms;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    margin-top: 5em;
  }
`;
