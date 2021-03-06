import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <StyledDiv>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects_">Projects</a>
      <a href="#contacts_">Contacts</a>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
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

export default Header;
