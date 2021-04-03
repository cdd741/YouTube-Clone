import React from "react";

function Comment({ comment }) {
  let date = new Date(comment.timestamp);
  date = date.toLocaleDateString();
  return (
    <li className="comment__container" id={comment.id}>
      <img className="comment__item comment__item--left" src="" alt="" />
      <div className="comment__item comment__item--right">
        <div className="comment__title">
          <h4 className="comment__name">{comment.name}</h4>
          <h4 className="comment__date">{date}</h4>
        </div>
        <p className="comment__description">{comment.comment}</p>
        <div className="commment__like-del-btn">
          <button className="comment__delete-btn">delete</button>
          <button className="comment__like-btn">{comment.likes} ❤</button>
        </div>
      </div>
    </li>
  );
}

export default Comment;
