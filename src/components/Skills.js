import React from "react";
import styled from "styled-components";
import Shape from "./Shape";
import ShapeM from "./ShapeM";

const Skills = () => {
  return (
    <StyledContainerDiv>
      <StyledDiv>
        <Shape />
        <ShapeM />
        <h1 id="skills">My Skills</h1>
        <p>
          Having a Deep knowledge in object-oriented programming.<br></br>
          <b>
            {" "}
            JavaScript | TypeScript | Java | HTML | CSS | ReactJS | Redux |
            NodeJS | MongoDB | SQL | Firebase | Cocos Creator | GIT | OOP
          </b>
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

const StyledDiv = styled.div`
  width: 80%;
  margin: auto;
`;

export default Skills;
