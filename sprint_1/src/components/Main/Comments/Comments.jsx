import React from "react";
import "./Comments.scss";
import CommentForm from "./CommentForm/CommentForm";
import CommentList from "./CommentList/CommentList";

function Comments({ comments }) {
  let commentListLength = comments.length;
  return (
    <div className="comments">
      <h3 className="comments__title">{commentListLength} Comments</h3>
      <CommentForm className="comments__form" />
      <CommentList className="comments__list" comments={comments} />
    </div>
  );
}

export default Comments;
