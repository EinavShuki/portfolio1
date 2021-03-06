import React, { useEffect } from "react";
import styled from "styled-components";
import Shape3 from "./Shape3";
import aos from "aos";
import "aos/dist/aos.css";

const Contacts = () => {
  useEffect(() => {
    aos.init({ duration: 2000, easing: "ease-in-out", delay: 300 });
  }, []);
  return (
    <StyledContainerDiv id="contacts_">
      <StyledDiv>
        <Shape3 />
        <h1>Contacts</h1>
        <StyledP data-aos="zoom-in-up" data-aos-anchor-placement="top-top">
          <StyledLinks
            target="_blank"
            rel="noreferrer"
            href="https://github.com/EinavShuki"
          >
            <i size="5X" id="github_icon" className="fab fa-github"></i>
          </StyledLinks>

          <StyledLinks
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/einav-shpigel/"
          >
            <i id="linkedin_icon" className="fab fa-linkedin"></i>
          </StyledLinks>
          <StyledLinks
            target="_blank"
            rel="noreferrer"
            href="mailto:einavshpigel@gmail.com"
          >
            <i id="email_icon" className="fas fa-at"></i>
          </StyledLinks>
        </StyledP>
      </StyledDiv>
    </StyledContainerDiv>
  );
};
const StyledContainerDiv = styled.div`
  position: relative;
  min-height: 90vh;

  padding-top: 2rem;
`;
const StyledDiv = styled.div`
  width: 80%;
  margin: auto;
`;
const StyledP = styled.p`
  display: flex;
  justify-content: space-between;
  padding: 3rem 15rem 1rem 0rem;
`;
const StyledLinks = styled.a`
  font-size: 2.5rem;
  color: #b58c8c;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  transition: color 300ms ease-in-out;

  #github_icon:hover {
    color: #000000;
  }
  #linkedin_icon:hover {
    color: #0077b5;
  }
  #email_icon:hover {
    color: #000000;
  }
  @media (max-width: 650px) {
    padding-right: 2rem;
    padding-left: 2rem;
  }
`;

export default Contacts;
