import React from "react";
import styled from "styled-components";
import Shape from "./Shape";

const Skills = () => {
  return (
    <StyledContainerDiv>
      <StyledDiv id="skills">
        <Shape />
        <h1>My Skills</h1>
        <p>
          B.Sc. degree in Computer Science with a{" "}
          <b>certificate of excellence</b>. Having a Deep knowledge in
          object-oriented programming.<br></br>
          <b> Java | HTML | CSS | ReactJS | NodeJS | MongoDB | C++</b>
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
  min-height: 100vh;
  margin-top: 1.5rem;
`;

const StyledDiv = styled.div`
  width: 80%;
  margin: auto;
`;

export default Skills;
