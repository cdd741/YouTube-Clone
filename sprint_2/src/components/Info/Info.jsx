import React from "react";
import "./Info.scss";
import viewsIcon from "../../assets/images/Icons/Icon-views.svg";
import likesIcon from "../../assets/images/Icons/Icon-likes.svg";

function Info({
  getTimePassed,
  title,
  channel,
  timestamp,
  views,
  likes,
  description,
}) {
  // getting the dynamic timestemp
  let date = getTimePassed(timestamp);
  return (
    <div className="info">
      <h1 className="info__title">{title}</h1>
      <div className="info__meta">
        <div className="info__upload-info">
          <h4 className="info__channel">By {channel}</h4>
          <h4 className="info__date">{date}</h4>
        </div>
        <div className="info__viewing">
          <div className="info__container info__container--views">
            <img className="info__icon" src={viewsIcon} alt="views_icon" />
            <h4 className="info__count">{views}</h4>
          </div>
          <div className="info__container info__container--likes">
            <img className="info__icon" src={likesIcon} alt="likes_icon" />
            <h4 className="info__count">{likes}</h4>
          </div>
        </div>
      </div>
      <div className="info__description-container">
        <p className="info__description">{description}</p>
      </div>
    </div>
  );
}

export default Info;
