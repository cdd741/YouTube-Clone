import React from "react";
import "./Comment.scss";

function Comment({ getTimePassed, comment }) {
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
