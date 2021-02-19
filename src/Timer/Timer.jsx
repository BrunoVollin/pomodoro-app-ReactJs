import React from "react";
import Play from "./Play";
import { Number, Wrapper } from "./Timer.style";
// import play from "../img/button-play.svg";


const Timer = () => {
  return (
    <Wrapper>
      <ul>
        <li>Pomodoro</li>
        <li>Short Break</li>
        <li>Long Break</li>
      </ul>
      <Number>25</Number>
      {/* <img src={play} className="" alt="" /> */}
      <Play size={300}/>

    </Wrapper>
  );
};


export default Timer;
