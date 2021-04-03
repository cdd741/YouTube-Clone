import React from "react";
import "./CommentList.scss";
import Comment from "./Comment/Comment";

function CommentList({ className, comments }) {
  return (
    <ul className={className}>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </ul>
  );
}

export default CommentList;
