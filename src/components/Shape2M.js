import React from "react";
import styled from "styled-components";

const Shpae2M = () => {
  return (
    <StyledSvg
      width="54"
      height="200"
      viewBox="0 0 54 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 200V0C2.56592 6.79147 3.66505 10.0651 18.0764 35.4916C94.5019 166.241 29.7481 109.62 0 200Z"
        fill="#B58C8C"
      />
      <path
        d="M0 200V0C2.56592 6.79147 3.66505 10.0651 18.0764 35.4916C94.5019 166.241 29.7481 109.62 0 200Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="24.4032"
          y1="191.367"
          x2="31.2708"
          y2="-26.2477"
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
  visibility: hidden;
  @media (max-width: 650px) {
    visibility: visible;
    position: absolute;
    top: -10rem;
    left: 0px;
    z-index: -1;
  }
`;

export default Shpae2M;
