import React, { useEffect, useState } from "react";
import "./Break.css";
const Break = ({ handleBreakBtn }) => {
  return (
    <div>
      <h1 className="text-2xl">Add A Break</h1>
      <div className="time-set flex bg-slate-400 py-3 mt-3 mx-5 rounded-lg">
        <button
          // onClick={getTheBreakTime}
          onClick={() => handleBreakBtn(10)}
          className="time bg-slate-100 border rounded-xl p-1 mx-4 hover:bg-emerald-300 "
        >
          <span className="time-frame">10</span>
          <span>s</span>
        </button>
        <button
          // onClick={getTheBreakTime}
          onClick={() => handleBreakBtn(20)}
          className="time bg-slate-100 border rounded-xl p-1 mx-4 hover:bg-emerald-300"
        >
          {" "}
          <span className="time-frame">20</span>
          <span>s</span>
        </button>
        <button
          // onClick={getTheBreakTime}
          onClick={() => handleBreakBtn(30)}
          className="time bg-slate-100 border rounded-xl p-1 mx-4 hover:bg-emerald-300"
        >
          <span className="time-frame">30</span>
          <span>s</span>
        </button>
        <button
          // onClick={getTheBreakTime}
          onClick={() => handleBreakBtn(40)}
          className="time bg-slate-100 border rounded-xl p-1 mx-4 hover:bg-emerald-300"
        >
          <span className="time-frame">40</span>
          <span>s</span>
        </button>
      </div>
    </div>
  );
};

export default Break;
