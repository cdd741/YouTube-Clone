// comment template
// {
//     "name": "Micheal Lyons",
//     "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
//     "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
//     "likes": 0,
//     "timestamp": 1545162149000
// }

const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

const commentsRoutes = express.Router({ mergeParams: true });
commentsRoutes.use(express.json());

commentsRoutes.post("/", (req, res) => {
  const videoId = req.params.videoId;
  const comment = {
    name: req.body.name,
    comment: req.body.comment,
    id: uuidv4(),
    likes: 0,
    timestamp: Date.now(),
  };

  // reading json file by readFileSync
  const rawdata = fs.readFileSync(
    path.resolve(__dirname, "../data/video-details.json")
  );
  // parse the data into array
  const videoList = JSON.parse(rawdata);

  const video = videoList.find((video) => video.id === videoId);
  video.comments.push(comment);

  // parse into json
  json = JSON.stringify(videoList);
  // write back to the file
  fs.writeFileSync(path.resolve(__dirname, "../data/video-details.json"), json);
  res.status(201).send(comment);
});

commentsRoutes.delete("/:commentId", (req, res) => {
  const videoId = req.params.videoId;
  const commentId = req.params.commentId;
  // reading json file by readFileSync
  const rawdata = fs.readFileSync(
    path.resolve(__dirname, "../data/video-details.json")
  );
  // parse the data into array
  const videoList = JSON.parse(rawdata);

  const video = videoList.find((video) => video.id === videoId);
  video.comments = video.comments.filter((comment) => comment.id !== commentId);
  // parse into json
  json = JSON.stringify(videoList);
  // write back to the file
  fs.writeFileSync(path.resolve(__dirname, "../data/video-details.json"), json);
  res.status(202).send("delete success");
});

module.exports = commentsRoutes;
