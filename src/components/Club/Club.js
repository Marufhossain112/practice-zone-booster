import React, { useEffect, useState } from "react";
import Exercise from "../Exercise/Exercise";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Club.css";
import Break from "../Break/Break";
const Club = () => {
  const [infos, setInfo] = useState([]);
  console.log(infos);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return (
    <div className="main-container">
      <div className="exercise-container mx-9 bg-lime-200">
        {infos.map((info) => (
          <Exercise info={info} key={info.id}></Exercise>
        ))}
      </div>
      <div className="counter-container  bg-cyan-200">
        <div className="my-profile flex items-center ml-6">
          <div className="images">
            <img
              src="https://www.ukmodels.co.uk/wp-content/uploads/2015/07/shutterstock_221570062.jpg"
              alt=""
            />
          </div>
          <div className="profile-info text-left ml-6">
            <h4 className="text-2xl font-semibold">Maruf Hossain</h4>
            <p className="">
              <FontAwesomeIcon className="" icon={faLocationDot} />
              <span className="ml-1">Dhaka,Bangladesh</span>
            </p>
          </div>
        </div>
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
        <Break></Break>
      </div>
    </div>
  );
};
export default Club;
