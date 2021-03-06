import React from "react";
import styled from "styled-components";

const Shape3 = () => {
  return (
    <StyledSvg
      width="621"
      height="652"
      viewBox="0 0 621 652"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M620.999 652V0C618.537 180.987 171.192 370.998 72 414C-170.967 519.332 250.285 639.452 620.999 652Z"
        fill="#B58C8C"
      />
      <path
        d="M620.999 652V0C618.537 180.987 171.192 370.998 72 414C-170.967 519.332 250.285 639.452 620.999 652Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="657.035"
          y1="16.0006"
          x2="198.864"
          y2="627.948"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.369792" stopColor="white" stopOpacity="0.14" />
          <stop offset="1" stopColor="#E1C9C9" />
        </linearGradient>
      </defs>
    </StyledSvg>
  );
};
const StyledSvg = styled.svg`
  position: absolute;
  top: 0rem;
  right: 0;
  z-index: -1;
  @media (max-width: 650px) {
    right: -300px;
  }
`;

export default Shape3;
