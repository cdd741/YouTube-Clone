import React from "react";
import "./Button.scss";

function Button({ className, content }) {
  return <button className={`${className} button-component`}>{content}</button>;
}

export default Button;
