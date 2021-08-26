import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <StyledDiv>
      <StyledA href="#about">About</StyledA>
      <StyledA href="#experience">Experience</StyledA>
      <StyledA href="#skills">Skills</StyledA>
      <StyledA href="#projects_">Projects</StyledA>
      <StyledA href="#contacts_">Contacts</StyledA>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  top: 0;
  z-index: 2;
  width: 100%;
  height: 4rem;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  @media (max-width: 650px) {
    height: 3rem;
    a {
      font-size: 0.8rem;
    }
  }
`;
const StyledA = styled.a`
  transition: all 400ms ease;
  cursor: pointer;
  &:hover {
    color: #5e5e5e;
  }
`;

export default Header;
