import styled from "styled-components";

export const ContactBody = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 7rem 0 7rem;
  min-height: 100%;
  padding-bottom: 3rem;
  position: relative;

  &:before {
    content: "<Contact>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 1.8rem;
    left: 0.5em;
    position: absolute;

    @media screen and (max-width: 768px) {
      left: 0.5em;
    }
  }

  &:after {
    content: "</Contact>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 1.8rem;
    position: absolute;
    bottom: 0;
    right: 0.5em;

    @media screen and (max-width: 768px) {
      left: 0.5em;
    }
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 0;
    padding-bottom: 3rem;
    align-items: center;
  }
`;

export const LeftContainer = styled.div`
  padding-top: 4em;
  width: 70%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    justify-content: flex-start;
    width: fit-content;
  }
`;

export const RightContainer = styled.div`
  padding-top: 4em;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;

  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const PersonInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  margin: 1em 0;
  padding: 1em 1.4em;
  width: 100%;
  outline: none;
  border: 0.05em solid white;
  border-radius: 0.8rem;
  display: inline-block;
  background-color: #333333;
  color: white;
  font-size: 0.8em;
  box-sizing: border-box;

  &:focus {
    border: 0.05em solid greenyellow;
  }
`;

export const Message = styled.textarea`
  margin: 1em 0;
  padding: 0.5em 0.7em;
  background-color: #333333;
  color: white;
  outline: none;
  resize: none;
  width: 100%;
  height: 7em;
  font-size: 1.5em;
  border-radius: 1rem;
  box-sizing: border-box;

  &:focus {
    border: 0.05em solid greenyellow;
  }
`;

export const SubmitRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 1em;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SubmitButton = styled.button`
  background-color: yellowgreen;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: block;
  align-self: flex-end;
  font-size: 1.3em;
  font-weight: bold;
  height: 3.8em;
  width: 10em;
  transition: 500ms;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    align-self: center;
    width: 100%;
  }
`;

export const IconContainer = styled.div`
  padding-left: 2em;
  display: flex;
  gap: 0.5em;
  align-self: flex-start;
  width: fit-content;

  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`;

export const Icon = styled.div`
  background-color: white;
  display: flex;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  border: 1px solid grey;
  align-items: center;
  justify-content: center;
  background-color: yellowgreen;
`;

export const IconText = styled.div`
  color: white;
  font-size: 1.7em;
  text-align: center;
  align-items: center;
  align-self: center;

  @media screen and (max-width: 768px) {
    font-size: 1.3em;
  }
`;

export const CaptchaHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
