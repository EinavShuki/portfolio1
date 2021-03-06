import React from "react";
import styled from "styled-components";

function Shape() {
  return (
    <StyledSvg
      width="312"
      height="801"
      viewBox="0 0 312 801"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M311.954 800.393C169.154 772.975 94.4238 710.5 41.9998 646C-47.7778 535.542 20.9537 394 129.954 288C268.853 152.923 280.496 32.5028 311.954 0V800.393Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="212.804"
          y1="750.313"
          x2="590.44"
          y2="119.765"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B58C8C" />
          <stop offset="1" stopColor="#E1C9C9" />
        </linearGradient>
      </defs>
    </StyledSvg>
  );
}

const StyledSvg = styled.svg`
  position: absolute;
  top: 0rem;
  right: 0;
  z-index: -1;
`;
export default Shape;
