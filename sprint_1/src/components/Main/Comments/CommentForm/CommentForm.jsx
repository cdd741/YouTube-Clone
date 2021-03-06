import React from "react";
import "./CommentForm.scss";
import Button from "../../../Snippets/Button/Button";
import MohanMuruge from "../../../../assets/images/ProfilePicture/Mohan-muruge.jpg";

function CommentFrom({ className }) {
  return (
    <div className={className}>
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
  );
}

export default CommentFrom;
