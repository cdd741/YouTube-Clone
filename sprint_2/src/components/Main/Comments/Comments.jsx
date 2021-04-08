import React from "react";
import "./Comments.scss";
import CommentForm from "./CommentForm/CommentForm";
import CommentList from "./CommentList/CommentList";

function Comments({ getTimePassed, comments }) {
  return (
    <div className="comments">
      <h3 className="comments__title">{comments.length} Comments</h3>
      <CommentForm className="comments__form" />
      <CommentList
        className="comments__list"
        getTimePassed={getTimePassed}
        comments={comments}
      />
    </div>
  );
}

export default Comments;
