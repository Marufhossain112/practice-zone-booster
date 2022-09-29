import React from "react";
import "./BreakDuration.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BreakDuration = (props) => {
  //   console.log(props);
  const notify = () => toast("Congratulations , Activity Completed !");
  const { breaks, onChange } = props;
  const inputStyle = {
    outline: 0,
    border: 0,
  };
  const divStyle = {
    border: "1px solid gray",
    display: "inline",
    padding: "2px",
  };
  return (
    <div style={divStyle}>
      <span>Break time</span>
      <input
        style={inputStyle}
        type="text"
        className="mt-2 p-2"
        onChange={onChange}
        value={breaks}
      />
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4"
        onClick={notify}
      >
        Activity Completed
      </button>
      <ToastContainer />
    </div>
  );
};

export default BreakDuration;
