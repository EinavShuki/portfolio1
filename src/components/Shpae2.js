import React from "react";
import styled from "styled-components";

const Shpae2 = () => {
  return (
    <StyledSvg
      width="280"
      height="650"
      viewBox="0 0 180 417"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 417V0C8.51692 14.1602 12.1652 20.9856 60 74C313.675 346.612 98.7411 228.558 0 417Z"
        fill="#B58C8C"
      />
      <path
        d="M0 417V0C8.51692 14.1602 12.1652 20.9856 60 74C313.675 346.612 98.7411 228.558 0 417Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="81"
          y1="399"
          x2="90"
          y2="-55"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0388464" stopColor="#E1C9C9" />
          <stop offset="0.787102" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </StyledSvg>
  );
};
const StyledSvg = styled.svg`
  position: absolute;
  top: 0rem;
  left: 0px;
  z-index: -1;
  @media (max-width: 650px) {
    left: -160px;
  }
`;

export default Shpae2;
