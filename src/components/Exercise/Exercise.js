import React from "react";
import addToLocalStorage from "../utilities/localStorage";
import "./Exercise.css";
const Exercise = (props) => {
  const { img, age, headerTitle, instruction, requiredTime } = props.info;

  // console.log(props);
  return (
    <div className="player-info border border-indigo-800 rounded-xl py-6">
      <img className="mx-auto rounded-xl" src={img} alt="" />
      <h3 className="text-2xl font-bold mt-4">{headerTitle}</h3>
      <p className="px-6">{instruction}</p>
      <p>Age : {age}</p>
      <p className="mb-4">Time required : {requiredTime}s</p>
      <button
        onClick={()=>props.handleDurationBtn(props.info)}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Add to list
      </button>
    </div>
  );
};

export default Exercise;
