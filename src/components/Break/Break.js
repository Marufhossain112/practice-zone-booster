import React from "react";
import "./Break.css";
const Break = () => {
  return (
    <div>
      <h1 className="text-2xl">Add A Break</h1>
      <div className="time-set flex bg-slate-400 py-3 mt-3 mx-5 rounded-lg">
        <div className="time bg-slate-100 border rounded-xl p-1 mx-4 hover:bg-emerald-300 ">
          10<span>s</span>
        </div>
        <div className="time bg-slate-100 border rounded-xl p-1 mx-4 hover:bg-emerald-300">
          20<span>s</span>
        </div>
        <div className="time bg-slate-100 border rounded-xl p-1 mx-4 hover:bg-emerald-300">
          30<span>s</span>
        </div>
        <div className="time bg-slate-100 border rounded-xl p-1 mx-4 hover:bg-emerald-300">
          40<span>s</span>
        </div>
      </div>
    </div>
  );
};

export default Break;
