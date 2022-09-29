import React from "react";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Profile = () => {
  return (
    <div className="my-profile flex items-center justify-center ml-6">
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
  );
};

export default Profile;
