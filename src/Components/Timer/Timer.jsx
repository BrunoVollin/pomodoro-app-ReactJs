import React, { Component, useEffect, useState } from "react";
import Play from "./Play";
import { Number, Wrapper } from "./Timer.style";
import timeConverter from "../../util/timeConverter";
import bg from "../../img/bg.svg"


const Timer = () => {
  const [time, setTime] = useState(100);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    let currentTimer = 1;

    const timer = setInterval(() => {
      if (play && currentTimer > 0) {
        setTime((prevTime) => {
          currentTimer = prevTime - 1;
          console.log(currentTimer);
          return currentTimer;
        });
      } else
        return () => clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, [play]);

  return (
    <Wrapper bg={bg}>
      <ul>
        <li onClick={() => {setTime(1500); setPlay(false)}}>Pomodoro</li>
        <li onClick={() => {setTime(300); setPlay(false)}}>Short Break</li>
        <li onClick={() => {setTime(600); setPlay(false)}}>Long Break</li>
      </ul>
      <Number>{timeConverter(time)}</Number>
      <Play size={100} pause={!play} onClick={() => setPlay(!play)} />
    </Wrapper>
  );
};

export default Timer;
