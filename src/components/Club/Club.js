import React, { useEffect, useState } from "react";
import Exercise from "../Exercise/Exercise";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Club.css";
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
      <div className="exercise-container mx-9">
        {infos.map((info) => (
          <Exercise info={info} key={info.id}></Exercise>
        ))}
      </div>
      <div className="counter-container ">
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
      </div>
    </div>
  );
};
export default Club;
