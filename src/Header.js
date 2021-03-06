import React from "react";
import HomeComponent from "./HomeComponent";

const Header = () => {
  return (
    <>
      <div id="header_nav">
        <a href="#about">About</a>
        <a href="#skills_">Skills</a>
        <a href="#projects_">Projects</a>
        <a href="#contacts_">Contacts</a>
      </div>
      <HomeComponent />
    </>
  );
};

export default Header;
