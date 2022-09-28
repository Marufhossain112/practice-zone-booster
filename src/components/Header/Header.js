import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
const Header = () => {
  return (
    <div className="text-left mt-8 ml-9">
      <FontAwesomeIcon className="logo-styling text-red-600" icon={faMeteor} />
      <span className="text-2xl font-semibold text-green-500">
        BOOSTER-PRACTICE-ZONE
      </span>
      <div className="my-5 text-2xl font-medium">Select today's practice</div>
    </div>
  );
};

export default Header;
