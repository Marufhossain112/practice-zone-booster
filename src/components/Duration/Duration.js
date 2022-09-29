import React from "react";
import BreakDuration from "../Break-duration/BreakDuration";
import "./Duration.css";
const Duration = (props) => {
  // console.log(props);

  const { duration, onChange } = props;
  // console.log(onchange);

  let total = 0;
  for (const time of duration) {
    total = total + time.requiredTime;
  }
  // console.log(total);
  // const handleChange = event => {
  //   setMessage(event.target.value);
  // };

  return (
    <div>
      <h1 className="text-2xl mt-5">Exercise Details</h1>
      <input
        type="text"
        placeholder="Exercise Time"
        className="mt-2 p-2"
        onChange={onChange}
        value={total}
      />
    </div>
  );
};

export default Duration;
