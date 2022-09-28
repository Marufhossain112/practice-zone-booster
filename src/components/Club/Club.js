import React, { useEffect, useState } from "react";
import Exercise from "../Exercise/Exercise";
import Header from "../Header/Header";
import "./Club.css";
const Club = () => {
  const [infos, setInfo] = useState([]);
  console.log(infos);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return (
    <div className="main-container">
      <div className="exercise-container">
        {infos.map((info) => (
          <Exercise info={info} key={info.id}></Exercise>
        ))}
      </div>
      <div className="counter-container"> I am the container</div>
    </div>
  );
};
export default Club;
