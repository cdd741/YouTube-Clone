import React, { useState } from "react";
import axios from "axios";

import "./Comments.scss";
import Button from "../Button/Button";
import MohanMuruge from "../../assets/images/ProfilePicture/Mohan-muruge.jpg";
import getTimePassed from "../../utils/getTimePassed";
import {
  commentsPostRequestUrl,
  commentsDeleteRequestUrl,
} from "../../utils/brainflixApi";

const imgList = [
  "https://emoji.slack-edge.com/T01N11LCR55/surprised-jon/016aed46b077ef79.png",
  "https://ca.slack-edge.com/T01N11LCR55-U01N5D1LC1M-ff75f5b78e12-512",
  "https://ca.slack-edge.com/T01N11LCR55-U01N5D1PV39-8e781d88c7e3-512",
];

function Comment({ comment, img, videoID, handleCommentUpdate }) {
  let timePassed = getTimePassed(comment.timestamp);

  const handleDeleteOnClick = (commentId, e) => {
    e.preventDefault();
    axios
      .delete(commentsDeleteRequestUrl(videoID, commentId))
      .catch((err) =>
        console.error("ERROR from DELETE request in handleDeleteOnClick", err)
      );
    handleCommentUpdate();
  };

  return (
    <li className="comment" id={comment.id}>
      <img className="comment__item comment__item--left" src={img} alt="" />
      <div className="comment__item comment__item--right">
        <div className="comment__title">
          <h4 className="comment__name">{comment.name}</h4>
          <h4 className="comment__date">{timePassed}</h4>
        </div>
        <p className="comment__description">{comment.comment}</p>
        <div>
          <button
            className="comment__delete-btn"
            onClick={(e) => {
              handleDeleteOnClick(comment.id, e);
            }}
          >
            delete
          </button>
        </div>
      </div>
    </li>
  );
}

function Comments({ videoID, comments, handleCommentUpdate }) {
  const [commentText, setCommentText] = useState("");

  const handleOnChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (commentText === "") {
      alert("You cannot submit empty comment");
      return;
    }
    axios
      .post(commentsPostRequestUrl(videoID), {
        name: "Mohan Muruge",
        comment: commentText,
      })
      .catch((err) =>
        console.error("ERROR from POST request in handleOnSubmit", err)
      );
    handleCommentUpdate();
    setCommentText("");
  };

  return (
    <div className="comments">
      <h3 className="comments__title">{comments.length} Comments</h3>

      <div className="comments__form">
        <img
          className="comments__profile-picture"
          src={MohanMuruge}
          alt="Mohan_Muruge"
        />
        <form className="comments__input" onSubmit={handleOnSubmit}>
          <label className="comments__label" htmlFor="comment">
            <h5 className="comments__label-text">JOIN THE CONVERSATION</h5>
            <textarea
              className="comments__textarea"
              type="text"
              name="comment"
              id="comment"
              value={commentText}
              placeholder="Add a comment"
              onChange={handleOnChange}
            ></textarea>
          </label>
          <Button className="comments__button" content="COMMENT" />
        </form>
      </div>

      <ul className="comments__list">
        {comments
          .sort((a, b) => b.timestamp - a.timestamp)
          .map((comment, idx) => (
            <Comment
              getTimePassed={getTimePassed}
              comment={comment}
              img={imgList[idx]}
              key={comment.id}
              videoID={videoID}
              handleCommentUpdate={handleCommentUpdate}
            />
          ))}
      </ul>
    </div>
  );
}

export default Comments;
