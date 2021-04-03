import React from "react";
import "./Info.scss";
import viewsIcon from "../../../assets/images/Icons/Icon-views.svg";
import likesIcon from "../../../assets/images/Icons/Icon-likes.svg";

function Info({ title, channel, timestamp, views, likes, description }) {
  let date = new Date(timestamp);
  date = date.toLocaleDateString();
  return (
    <div className="info">
      <h1 className="info__title">{title}</h1>
      <div className="info__upload-info">
        <h3>{channel}</h3>
        <h3>{date}</h3>
      </div>
      <div className="info__viewing">
        <div className="info__viewing-container info__viewing-container--views">
          <img
            className="info__viewing-icon"
            src={viewsIcon}
            alt="views_icon"
          />
          <h4 className="info__viewing-count">{views}</h4>
        </div>
        <div className="info__viewing-container info__viewing-container--likes">
          <img
            className="info__viewing-icon"
            src={likesIcon}
            alt="likes_icon"
          />
          <h4 className="info__count">{likes}</h4>
        </div>
      </div>
      <div className="info__description-container">
        <p className="info__description-content">{description}</p>
      </div>
    </div>
  );
}

export default Info;
