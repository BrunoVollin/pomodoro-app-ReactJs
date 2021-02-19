import React from "react";

const Play = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
    >
      <defs>
        <style>{`.cls-1 {
        fill: #f0716d;
      }
          .cls-1:hover {
        fill: #810909;
      }
          .cls-2 {
        fill: #fff;
        fill-rule: evenodd;
      }`}</style>
      </defs>
      <g id="Artboard_1" data-name="Artboard 1">
        <g id="PLAY">
          <circle class="cls-1" cx="50" cy="50" r="50" />
          <path class="cls-2" d="M34,72V31L75,51.5Z" />
        </g>
      </g>
    </svg>
  );
};

export default Play;
