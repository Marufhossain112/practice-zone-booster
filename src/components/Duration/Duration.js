import React from "react";
import "./Duration.css";
const Duration = (props) => {
  console.log(props);

  const { duration, onChange } = props;
  // console.log(onchange);

  let total = 0;
  for (const time of duration) {
    total = total + time.requiredTime;
  }
  console.log(total);
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
      <input type="text" placeholder="Break Time" className="mt-2 p-2" />
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4">
        Activity Completed
      </button>
    </div>
  );
};

export default Duration;
