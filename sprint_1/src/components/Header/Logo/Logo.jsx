import React from "react";
import "./Logo.scss";
import logo from "../../../assets/images/Logo/Logo-brainflix.svg";

function Logo({ className }) {
  return (
    <div className={className}>
      <img className="header__logo-img" src={logo} alt="brainflix_logo" />
    </div>
  );
}

export default Logo;
