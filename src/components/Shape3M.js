import React from "react";
import styled from "styled-components";

const Shape3M = () => {
  return (
    <StyledSvg
      width="117"
      height="226"
      viewBox="0 0 117 226"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M117 226V0C116.536 62.7349 32.232 128.597 13.5388 143.503C-32.2492 180.014 47.1373 221.65 117 226Z"
        fill="#B58C8C"
      />
      <path
        d="M117 226V0C116.536 62.7349 32.232 128.597 13.5388 143.503C-32.2492 180.014 47.1373 221.65 117 226Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="123.791"
          y1="5.54622"
          x2="-33.5937"
          y2="119.832"
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
  visibility: hidden;
  @media (max-width: 650px) {
    visibility: visible;
    position: absolute;
    top: 9rem;
    right: 0;
    z-index: -1;
  }
`;

export default Shape3M;
