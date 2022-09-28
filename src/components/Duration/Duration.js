import React from "react";
import "./Duration.css";
const Duration = () => {
  return (
    <div>
      <h1 className="text-2xl mt-5">Exercise Details</h1>
      <input type="text" placeholder="Exercise Time" className="mt-2 p-2" />
      <input type="text" placeholder="Break Time" className="mt-2 p-2" />
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4">
        Activity Completed
      </button>
    </div>
  );
};

export default Duration;
