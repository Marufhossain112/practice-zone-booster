import React from "react";
import "./BreakDuration.css";
const BreakDuration = (props) => {
  //   console.log(props);
  const { breaks, onChange } = props;
  return (
    <div>
      <input
        type="text"
        placeholder="Break Time"
        className="mt-2 p-2"
        onChange={onChange}
        value={breaks}
      />
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4">
        Activity Completed
      </button>
    </div>
  );
};

export default BreakDuration;
