import React from "react";
import styled from "styled-components";

function WaveBackground() {
  return (
    <StyledSvg
      viewBox="0 0 1440 544"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 441.622V0H1440V505.918C1301.82 405.616 962.637 286.944 735.586 457.42C508.536 627.896 152.607 504.815 0 441.622Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="720"
          y1="0"
          x2="720"
          y2="544"
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
  top: 0;
  z-index: -1;
  width: 100%;
  margin: auto;
  @media (max-width: 650px) {
    top: 0;
  }
`;
export default WaveBackground;
