import React from "react";
import "./Exercise.css";
const Exercise = (props) => {
  const { img, age, headerTitle, id, instruction, requiredTime } = props.info;
  return (
    <div className="player-info">
      <img src={img} alt="" />
      <p>age : {age}</p>
    </div>
  );
};

export default Exercise;
