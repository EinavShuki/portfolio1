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
            Java| JavaScript | HTML | CSS | ReactJS | NodeJS | MongoDB | C++
          </b>
          <br></br>
          <br></br>
          Familiarity with Angular, PHP, jQuery, Python (Numpy, Pandas).
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
