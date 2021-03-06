import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <StyledDiv>
      <StyledA href="#about">About</StyledA>
      <StyledA href="#skills">Skills</StyledA>
      <StyledA href="#projects_">Projects</StyledA>
      <StyledA href="#contacts_">Contacts</StyledA>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 10vh;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  @media (max-width: 650px) {
    a {
      font-size: 1rem;
    }
  }
`;
const StyledA = styled.a`
  transition: all 275ms ease;
  cursor: pointer;
  &:hover {
    color: #fffffd;
  }
`;

export default Header;
