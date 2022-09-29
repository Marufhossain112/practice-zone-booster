import React from "react";
import "./BreakDuration.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BreakDuration = (props) => {
  //   console.log(props);
  const notify = () => toast("Congratulations , Activity Completed !");
  const { breaks, onChange } = props;

  return (
    <div>
      <div className="flex flex-col">
        <span>Break time</span>
        <input
          type="text"
          className="mt-2 mx-5 p-2 "
          onChange={onChange}
          value={breaks}
        />
      </div>

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
