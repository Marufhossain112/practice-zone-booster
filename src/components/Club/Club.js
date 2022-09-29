import React, { useEffect, useState } from "react";
import Exercise from "../Exercise/Exercise";
import "./Club.css";
import Break from "../Break/Break";
import Duration from "../Duration/Duration";
import Profile from "../Profile/Profile";
import Information from "../Information/Information";
import BreakDuration from "../Break-duration/BreakDuration";
const Club = () => {
  const [infos, setInfo] = useState([]);
  const [duration, setDuration] = useState([]);
  const [breaks, setBreaks] = useState([]);

  // take break button
  const handleBreakBtn = (breakInfo) => {
    setBreaks(breakInfo);
  };
  // exercise duration button
  const handleDurationBtn = (manInfo) => {
    const newDuration = [...duration, manInfo];
    setDuration(newDuration);
  };
  // onChange for break duration
  const handleBrakeChange = (event) => {
    setBreaks(event.target.value);
  };

  // onChange for exercise duration
  const handleChange = (event) => {
    setDuration(event.target.value);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return (
    <div>
      <div className="main-container">
        <div className="exercise-container mx-9 bg-lime-200">
          {infos.map((info) => (
            <Exercise
              info={info}
              key={info.id}
              handleDurationBtn={handleDurationBtn}
            ></Exercise>
          ))}
        </div>
        <div className="counter-container bg-cyan-200">
          <Profile></Profile>
          <Information></Information>
          <Break handleBreakBtn={handleBreakBtn}></Break>
          <Duration duration={duration} onChange={handleChange}></Duration>
          <BreakDuration
            breaks={breaks}
            onChange={handleBrakeChange}
          ></BreakDuration>
        </div>
      </div>
    </div>
  );
};
export default Club;
