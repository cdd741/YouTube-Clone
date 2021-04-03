import React from "react";
import "./CommentForm.scss";
import Button from "../../../Snippets/Button/Button";

function CommentFrom({ className }) {
  return (
    <div className={className}>
      <img className="comments__profile-picture" src="" alt="" />
      <form className="comments__input">
        <label className="comments__label" htmlFor="comment">
          JOIN THE CONVERSATION
          <textarea
            className="comments__textarea"
            type="text"
            name="comment"
          ></textarea>
        </label>
        <Button className="comments__button" />
      </form>
    </div>
  );
}

export default CommentFrom;
