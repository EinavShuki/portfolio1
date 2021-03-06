import React from "react";
import styled from "styled-components";
import songappimg from "../img/song-app.png";
import Shpae2 from "./Shpae2";

const Projects = () => {
  return (
    <StyledContainerDiv id="projects_">
      <StyledDiv>
        <Shpae2 />
        <h1>Projects</h1>
        <h3>
          Movies Rating{" "}
          <StyledLink
            target="_blank"
            rel="noreferrer"
            className="link_img"
            href="https://movies-rating-reactnodejs.herokuapp.com/"
          >
            <i className="fas fa-link"></i>
          </StyledLink>
        </h3>
        <p>
          Allows users to view and add movies recomendation and reviews. Using{" "}
          <b>React, NodeJS ,Express, MongoDB</b> with <b>mongoose</b>.
        </p>
        <h3>Song In Pic</h3>
        <p>
          Israeli <b>android</b> game in which the user guesses the song that is
          presented as an image enigma. Using <b>Youtube API</b>.
        </p>
        <StyledImag src={songappimg} className="phone_img" alt="app_images" />
        <h3>MATAK</h3>
        <p>
          A React web site that helps to coordinate and confirm routes on a map.
          <br></br>
          Using<b> leaflet, Redux</b>, and <b>Material UI</b>.
        </p>
      </StyledDiv>
    </StyledContainerDiv>
  );
};
const StyledContainerDiv = styled.div`
  position: relative;
  min-height: 70vh;
  padding-top: 2rem;
`;
const StyledDiv = styled.div`
  width: 80%;
  margin: auto;
`;
const StyledImag = styled.img`
  width: 18rem;
  margin: 1rem;
`;
const StyledLink = styled.a`
  color: #b58c8c;
  &:hover {
    color: #f9e7e7;
  }
  transition: all 275ms ease;
`;

export default Projects;
