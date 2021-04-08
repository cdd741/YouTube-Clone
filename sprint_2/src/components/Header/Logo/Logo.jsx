import React from "react";
import "./Logo.scss";
import logo from "../../../assets/images/Logo/Logo-brainflix.svg";

function Logo({ className }) {
  return (
    <a className={className} href="../../../../public/index.html">
      <img className="header__logo-img" src={logo} alt="brainflix_logo" />
    </a>
  );
}

export default Logo;
