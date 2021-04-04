import React from "react";
import "./Comment.scss";

function Unit(name, time) {
  this.name = name;
  this.time = time;
}

const year = new Unit("year", 31556926);
const month = new Unit("month", 2629743);
const week = new Unit("week", 604800);
const day = new Unit("day", 86400);
const hour = new Unit("hour", 3600);
const minut = new Unit("minut", 60);
const second = new Unit("second", 1);
const timeUnits = [year, month, week, day, hour, minut, second];

function getTimePassed(timeThen) {
  // time now
  let timeNow = new Date().getTime();
  // time passed
  let timeDiff = timeNow - timeThen;
  // to seconds
  timeDiff = Math.round(timeDiff / 1000);

  // find what unit to display
  for (let i = 0; i < timeUnits.length; ++i) {
    // time divide by units
    let quotient = Math.floor(timeDiff / timeUnits[i].time);
    if (quotient) {
      let plural = "";
      if (quotient > 1) plural = "s";
      return `${quotient} ${timeUnits[i].name}${plural} ago`;
    }
  }
  return `just now`;
}

function Comment({ comment }) {
  let timePassed = getTimePassed(comment.timestamp);
  return (
    <li className="comment" id={comment.id}>
      <img className="comment__item comment__item--left" src="" alt="" />
      <div className="comment__item comment__item--right">
        <div className="comment__title">
          <h4 className="comment__name">{comment.name}</h4>
          <h4 className="comment__date">{timePassed}</h4>
        </div>
        <p className="comment__description">{comment.comment}</p>
      </div>
    </li>
  );
}

export default Comment;
