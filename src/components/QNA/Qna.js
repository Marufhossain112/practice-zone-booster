import React from "react";
import "./Qna.css";
const Qna = () => {
  return (
    <div>
      <h1 className="mt-9 text-3xl font-semibold underline">
        Most important interview questions
      </h1>
      <div className="questions mt-5">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            How does React works
          </div>
          <div className="collapse-content">
            <p className="px-96 text-justify">
              ReactJS divides the UI into isolated reusable pieces of code known
              as components. React components work similarly to JavaScript
              functions as they accept arbitrary inputs called properties or
              props. It's possible to have as many components as necessary
              without cluttering your code.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Props vs State in React
          </div>
          <div className="collapse-content">
            <p className="px-96 text-justify">
              Props are used to pass data from one component to another. The
              state is a local data storage that is local to the component only
              and cannot be passed to other components. The this. setState
              property is used to update the state values in the component
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            useEffect works except data fetching
          </div>
          <div className="collapse-content">
            <p className="px-96 text-justify">
              The useEffect Hook allows you to perform side effects in your
              components. Some examples of side effects are: fetching data,
              directly updating the DOM, and timers. useEffect accepts two
              arguments. The second argument is optional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qna;
