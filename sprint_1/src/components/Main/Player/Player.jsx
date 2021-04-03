import React from "react";
import "./Player.scss";

function Player({ video, image }) {
  return (
    <div className="player">
      <video poster={image} controls width="100%">
        <source src={video} type="video" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  );
}

export default Player;
