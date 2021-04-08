import React from "react";
import "./Player.scss";

function Player({ video, image }) {
  return (
    <div className="player">
      <video className="player__video" poster={image} controls>
        <source src={video} type="video" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  );
}

export default Player;
