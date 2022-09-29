import React from "react";

const Information = () => {
  return (
    <div className="my-information flex bg-slate-400 justify-evenly mt-5 mx-5 rounded-md py-2">
      <div className="flex flex-col">
        <span className="text-2xl">
          75<sub className="text-1xl">kg</sub>
        </span>
        <span>Weight</span>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl">6.5</span> <span>Height</span>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl">
          25<sub className="text-1xl">years</sub>{" "}
        </span>
        <span>Age</span>
      </div>
    </div>
  );
};

export default Information;
