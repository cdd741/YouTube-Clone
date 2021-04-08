import React from "react";
import "./ProfilePicture.scss";
import MohanMuruge from "../../../assets/images/ProfilePicture/Mohan-muruge.jpg";

function ProfilePicture({ className }) {
  return <img className={className} src={MohanMuruge} alt="profile_picture" />;
}

export default ProfilePicture;
