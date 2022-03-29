import styled from "styled-components";

export const SidebarBody = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 2vw;
  gap: 1em;
  width: fit-content;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 8rem;
  background-color: white;
  align-items: center;
  align-self: center;
`;

export const SocialIcon = styled.a`
  color: white;
  cursor: pointer;

  &:hover {
    color: yellowgreen;
    transform: translateY(-5px);
  }
`;
