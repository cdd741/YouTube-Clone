import React from "react";
import "./Comments.scss";
import Button from "../Button/Button";
import MohanMuruge from "../../assets/images/ProfilePicture/Mohan-muruge.jpg";

const imgList = [
  "https://emoji.slack-edge.com/T01N11LCR55/surprised-jon/016aed46b077ef79.png",
  "https://ca.slack-edge.com/T01N11LCR55-U01N5D1LC1M-ff75f5b78e12-512",
  "https://ca.slack-edge.com/T01N11LCR55-U01N5D1PV39-8e781d88c7e3-512",
];

function Comment({ getTimePassed, comment, img }) {
  let timePassed = getTimePassed(comment.timestamp);
  return (
    <li className="comment" id={comment.id}>
      <img className="comment__item comment__item--left" src={img} alt="" />
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

function Comments({ getTimePassed, comments }) {
  return (
    <div className="comments">
      <h3 className="comments__title">{comments.length} Comments</h3>

      <div className="comments__form">
        <img
          className="comments__profile-picture"
          src={MohanMuruge}
          alt="Mohan_Muruge"
        />
        <form
          className="comments__input"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className="comments__label" htmlFor="comment">
            <h5 className="comments__label-text">JOIN THE CONVERSATION</h5>
            <textarea
              className="comments__textarea"
              type="text"
              name="comment"
              id="comment"
              placeholder="Add a comment"
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
            />
          ))}
      </ul>
    </div>
  );
}

export default Comments;
