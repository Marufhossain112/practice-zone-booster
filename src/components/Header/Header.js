import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <FontAwesomeIcon className="logo-styling" icon={faMeteor} />
      <span className="heading">BOOSTER-PRACTICE-ZONE</span>
      <div>Select today's practice</div>
    </div>
  );
};

export default Header;
