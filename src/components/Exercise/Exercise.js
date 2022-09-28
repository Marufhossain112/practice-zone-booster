import React from "react";
import "./Exercise.css";
const Exercise = (props) => {
  const { img, age, headerTitle, instruction, requiredTime } = props.info;
  return (
    <div className="player-info">
      <img src={img} alt="" />
      <h3>{headerTitle}</h3>
      <p>{instruction}</p>
      <p>For Age : {age}</p>
      <p>Time required : {requiredTime}</p>
      <button>Add to list</button>
    </div>
  );
};

export default Exercise;
