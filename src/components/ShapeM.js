import React from "react";
import styled from "styled-components";

function ShapeM() {
  return (
    <StyledSvg
      width="84"
      height="179"
      viewBox="0 0 84 179"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M84 179V0C76.7056 13.2119 66.3073 13.9481 64.0555 17.4351C61.8037 20.9221 36.7121 64.5097 9.04707 87.7565C-18.618 111.003 20.2236 168.675 84 179Z"
        fill="#B58C8C"
      />
      <path
        d="M84 179V0C76.7056 13.2119 66.3073 13.9481 64.0555 17.4351C61.8037 20.9221 36.7121 64.5097 9.04707 87.7565C-18.618 111.003 20.2236 168.675 84 179Z"
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
  visibility: hidden;

  @media (max-width: 650px) {
    visibility: visible;
    position: absolute;
    top: -10rem;
    right: 0;
    z-index: -1;
  }
`;
export default ShapeM;
