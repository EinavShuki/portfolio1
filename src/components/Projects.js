import React from "react";
import styled from "styled-components";
import songappimg from "../img/song-app.png";
import Shpae2M from "./Shape2M";
import Shpae2 from "./Shpae2";
import moviesIco from "../img/movies.png";
import paw from "../img/pawprint.png";

const Projects = () => {
  return (
    <StyledContainerDiv>
      <StyledDiv>
        <Shpae2 />
        <Shpae2M />
        <h1 id="projects_">My Projects</h1>
        <StyledSubTitle>
          <StyledIcon src={moviesIco} alt="moviesIcon"></StyledIcon>
          Movies Rating{" "}
          <StyledLink
            target="_blank"
            rel="noreferrer"
            className="link_img"
            href="https://movies-rating-reactnodejs.herokuapp.com/"
          >
            <i className="fas fa-link"></i>
          </StyledLink>
        </StyledSubTitle>
        <p>
          Allows users to view and add movies recomendation and reviews. Using{" "}
          <b>React, NodeJS ,Express, MongoDB</b> with <b>mongoose</b>.
        </p>
        <StyledSubTitle>
          <StyledIcon src={paw} alt="pawIcon"></StyledIcon>
          DogWalker{" "}
          <StyledLink
            target="_blank"
            rel="noreferrer"
            className="link_img"
            href="https://dogwalker-einav.herokuapp.com/"
          >
            <i className="fas fa-link"></i>
          </StyledLink>
        </StyledSubTitle>
        <p>
          Allows users to seek a dog walker according to their preferences, or
          register and suggesting their services as dog walkers. Using{" "}
          <b>React</b> and <b>Firebase</b>.
        </p>
        <StyledSubTitle>Song In Pic</StyledSubTitle>
        <p>
          Israeli <b>Android</b> game in which the user guesses the song that is
          presented as an image enigma. Using <b>Youtube API</b>.
        </p>
        <StyledImag src={songappimg} className="phone_img" alt="app_images" />
        <StyledSubTitle>MATAK</StyledSubTitle>
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
  margin-top: 2rem;
`;
const StyledDiv = styled.div`
  width: 80%;
  margin: auto;
`;
const StyledSubTitle = styled.h3`
  margin-top: 1rem;
  display: flex;
  align-items: center;
`;
const StyledImag = styled.img`
  width: 18rem;
  margin: 1rem;
  @media (max-width: 650px) {
    width: 12rem;
  }
`;
const StyledLink = styled.a`
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  font-size: 2.2rem;
  color: #b58c8c;
  margin-left: 5px;
  &:hover {
    color: #f9e7e7;
  }
  transition: all 275ms ease;
`;

const StyledIcon = styled.img`
  width: 20px;
  margin-right: 5px;
`;

export default Projects;
