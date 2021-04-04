import React from "react";
import Comment from "./Comment/Comment";

const imgList = [
  "https://emoji.slack-edge.com/T01N11LCR55/surprised-jon/016aed46b077ef79.png",
  "https://ca.slack-edge.com/T01N11LCR55-U01N5D1LC1M-ff75f5b78e12-512",
  "https://ca.slack-edge.com/T01N11LCR55-U01N5D1PV39-8e781d88c7e3-512",
];

function CommentList({ getTimePassed, className, comments }) {
  return (
    <ul className={className}>
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
  );
}

export default CommentList;
