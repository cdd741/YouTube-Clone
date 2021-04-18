const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

const videoRoutes = express.Router();
videoRoutes.use(express.json());

videoRoutes.get("/", (_req, res) => {
  // reading json file by readFileSync
  const rawdata = fs.readFileSync(
    path.resolve(__dirname, "../data/video-details.json")
  );
  // parse the data into array
  const videoList = JSON.parse(rawdata);

  const shortList = videoList.map((detailedVideo) => {
    return {
      id: detailedVideo.id,
      title: detailedVideo.title,
      channel: detailedVideo.channel,
      image: detailedVideo.image,
    };
  });
  res.status(200).send(shortList);
});

videoRoutes.get("/:videoId", (req, res) => {
  // reading json file by readFileSync
  const rawdata = fs.readFileSync(
    path.resolve(__dirname, "../data/video-details.json")
  );
  // parse the data into array
  const videoList = JSON.parse(rawdata);
  const selectedVideo = videoList.find(
    (video) => video.id === req.params.videoId
  );
  res.status(200).send(selectedVideo);
});

videoRoutes.post("/", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const id = uuidv4();
  const timestamp = Date.now();
  const videoDetail = {
    id: id,
    title: title,
    channel: "Attack Titan",
    image: "http://localhost:8080/images/upload-image.jpg",
    description: description,
    views: "1,001,023",
    likes: "110,985",
    duration: "4:01",
    video: "http://localhost:8080/images/BrainStationSampleVideo.mp4",
    timestamp: timestamp,
    comments: [],
  };
  // reading json file by readFileSync
  const rawdata = fs.readFileSync(
    path.resolve(__dirname, "../data/video-details.json")
  );
  // parse the data into array
  const videos = JSON.parse(rawdata);
  // push new data into array
  videos.push(videoDetail);
  // parse into json
  json = JSON.stringify(videos);
  // write back to the file
  fs.writeFileSync(path.resolve(__dirname, "../data/video-details.json"), json);
  res.status(201).send(videoDetail);
});

videoRoutes.put("/:videoId/likes", (req, res) => {
  const videoId = req.params.videoId;
  // reading json file by readFileSync
  const rawdata = fs.readFileSync(
    path.resolve(__dirname, "../data/video-details.json")
  );
  // parse the data into array
  const videoList = JSON.parse(rawdata);

  const video = videoList.find((video) => video.id === videoId);
  // let num = Number(video.likes) + 1;
  // video.likes = String(num);
  const newLikes = parseInt(video.likes.split(",").join("")) + 1;
  const newLikesStr = numberWithCommas(newLikes);
  video.likes = newLikesStr;
  // parse into json
  json = JSON.stringify(videoList);
  // write back to the file
  fs.writeFileSync(path.resolve(__dirname, "../data/video-details.json"), json);
  res.status(204).send("video liked");
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

module.exports = videoRoutes;
