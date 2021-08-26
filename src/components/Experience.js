import React from "react";
import styled from "styled-components";
import Shpae2M from "./Shape2M";
import Shpae2 from "./Shpae2";
import AnakatechIcon from "../img/anakatech-logo.jpg";

const Experience = () => {
  return (
    <StyledContainerDiv>
      <StyledDiv>
        <Shpae2 />
        <Shpae2M />
        <h1 id="experience">My Experience</h1>
        <StyledSpan>
          <StyledImg src={AnakatechIcon} alt="AnakatechIcon" />
          <StyledSubTitle>
            Netomedia-Anakatech | Game Developer. <br></br>
          </StyledSubTitle>
        </StyledSpan>
        <p>
          Develop gambling games in <b>Typescript</b>, using{" "}
          <b>Cocos-Creator</b> game's engine. This role demands from me to have
          a strong self-learning ability along with a creative mind.
        </p>
      </StyledDiv>
    </StyledContainerDiv>
  );
};
const StyledContainerDiv = styled.div`
  position: relative;
  min-height: 70vh;
  margin-top: 2rem;
`;
const StyledSpan = styled.span`
  display: flex;
  align-items: baseline;
`;
const StyledImg = styled.img`
  height: 25px;
  margin-right: 3%;
`;

const StyledSubTitle = styled.p`
  margin-top: 1rem;
  font-weight: bold;
`;
const StyledDiv = styled.div`
  width: 80%;
  margin: auto;
`;

export default Experience;
