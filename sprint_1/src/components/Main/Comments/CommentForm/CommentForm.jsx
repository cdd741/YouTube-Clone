import React from "react";
import "./CommentForm.scss";
import Button from "../../../Snippets/Button/Button";

function CommentFrom({ className }) {
  return (
    <div className={className}>
      <img src="" alt="" />
      <form>
        <label htmlFor="">
          JOIN THE CONVERSATION
          <textarea type="text" name="comment"></textarea>
        </label>
        <Button className="comments__button" />
      </form>
    </div>
  );
}

export default CommentFrom;
