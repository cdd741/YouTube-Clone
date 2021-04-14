const videoList = require("../data/video-details.json");
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

const videoRoutes = express.Router();
videoRoutes.use(express.json());

videoRoutes.get("/", (_req, res) => {
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

videoRoutes.get("/:id", (req, res) => {
  console.log("id");
  const selectedVideo = videoList.find((video) => video.id === req.params.id);
  res.status(200).send(selectedVideo);
});

videoRoutes.post("/", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const id = uuidv4();
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
    timestamp: 1545162149000,
    comments: [
      {
        name: "Micheal Lyons",
        comment:
          "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
        id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
        likes: 0,
        timestamp: 1545162149000,
      },
      {
        name: "Gary Wong",
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
        likes: 0,
        timestamp: 1544595784046,
      },
      {
        name: "Theodore Duncan",
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
        likes: 0,
        timestamp: 1542262984046,
      },
    ],
  };
  const rawdata = fs.readFileSync(
    path.resolve(__dirname, "../data/video-details.json")
  );
  const videos = JSON.parse(rawdata);
  videos.push(videoDetail);
  json = JSON.stringify(videos);
  fs.writeFileSync(path.resolve(__dirname, "../data/video-details.json"), json);
  res.status(201).send("qweqwe");
});

module.exports = videoRoutes;
