import React from "react";

const Play = ({ pause, size, onClick }) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
    >
      <defs>
        <style>{`.cls-1 {
          fill: #a41d19;
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
        {!pause ? (
          <g id="PLAY">
            <circle class="cls-1" cx="50" cy="50" r="50" />
            <path
              class="cls-2"
              d="M713,456H672v41l41,0.068V456Z"
              transform="translate(-642 -427)"
            />
          </g>
        ) : (
          <g id="PLAY">
            <circle class="cls-1" cx="50" cy="50" r="50" />
            <path class="cls-2" d="M34,72V31L75,51.5Z" />
          </g>
        )}
      </g>
    </svg>
  );
};
export default Play;
