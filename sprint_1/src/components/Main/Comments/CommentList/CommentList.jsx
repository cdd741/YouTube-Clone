import React from "react";
import "./CommentList.scss";
import Comment from "./Comment/Comment";

function CommentList({ getTimePassed, className, comments }) {
  return (
    <ul className={className}>
      {comments.map((comment) => (
        <Comment
          getTimePassed={getTimePassed}
          comment={comment}
          key={comment.id}
        />
      ))}
    </ul>
  );
}

export default CommentList;
