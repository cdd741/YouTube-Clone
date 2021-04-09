import React, { Component } from "react";
import videoDetail from "../../data/video-details.json";
import videos from "../../data/videos.json";
import "./Home.scss";
import Player from "../../components/Player/Player";
import Info from "../../components/Info/Info";
import Comments from "../../components/Comments/Comments";
import Playlist from "../../components/Playlist/Playlist";
import { url, api_key } from "../../App";
import axios from "axios";

function Unit(name, time) {
  this.name = name;
  this.time = time;
}

const year = new Unit("year", 31556926);
const month = new Unit("month", 2629743);
const week = new Unit("week", 604800);
const day = new Unit("day", 86400);
const hour = new Unit("hour", 3600);
const minut = new Unit("minut", 60);
const second = new Unit("second", 1);
const timeUnits = [year, month, week, day, hour, minut, second];

// helper function for calculating dynamic timestemp
function getTimePassed(timeThen) {
  // time now
  let timeNow = new Date().getTime();
  // time passed
  let timeDiff = timeNow - timeThen;
  // to seconds
  timeDiff = Math.round(timeDiff / 1000);

  // find what unit to display
  for (let i = 0; i < timeUnits.length; ++i) {
    // time divide by units
    let quotient = Math.floor(timeDiff / timeUnits[i].time);
    if (quotient) {
      let plural = "";
      if (quotient > 1) plural = "s";
      return `${quotient} ${timeUnits[i].name}${plural} ago`;
    }
  }
  return `just now`;
}

class Home extends Component {
  state = {
    // current video object
    videoMeta: null,
    filteredVideo: null,
  };

  filterVideo = (videos, currentVideoId) => {
    return videos.filter((video) => video.id !== currentVideoId);
  };

  getVideo = (videoList, currentId) => {
    return axios
      .get(`${url}/videos/${currentId}${api_key}`)
      .then((res) => {
        console.log("in getVideo");
        this.setState({
          videoMeta: res.data,
          filteredVideo: this.filterVideo(videoList, currentId),
        });
      })
      .catch((err) => {
        console.error("Returning ERROR from GET request of /videos/:id", err);
      });
  };

  getVideos = (currentId) => {
    return axios
      .get(`${url}/videos${api_key}`)
      .then((res) => {
        console.log("in getVideos");
        this.getVideo(res.data, currentId);
      })
      .catch((err) => {
        console.error("Returning ERROR from GET request of /videos", err);
      });
  };

  componentDidMount = () => {
    console.log("hello");
    let initialId = this.props.match
      ? this.props.match.params.id
      : "1af0jruup5gu";
    this.getVideos(initialId).then(() => {
      console.log(
        "are you gonna run if i refresh?",
        this.props.match,
        this.state
      );
    });
  };

  componentDidUpdate = () => {
    let currentId = this.props.match
      ? this.props.match.params.id
      : "1af0jruup5gu";
    console.log("bitch");
    if (!this.props.match.params.id || currentId === this.state.videoMeta.id) {
      return;
    } else {
      this.getVideos(currentId).then(() => {
        this.getVideo(currentId);
      });
    }
  };

  render() {
    // set document.title to the current video title
    // document.title = this.state.videoMeta.title;
    return (
      this.state.videoMeta && (
        <div className="home">
          <Player
            video={this.state.videoMeta.video}
            image={this.state.videoMeta.image}
          />
          <div className="home__primary-container">
            <div className="home__secondary-container home__secondary-container--meta">
              <Info
                getTimePassed={getTimePassed}
                title={this.state.videoMeta.title}
                channel={this.state.videoMeta.channel}
                timestamp={this.state.videoMeta.timestamp}
                views={this.state.videoMeta.views}
                likes={this.state.videoMeta.likes}
                description={this.state.videoMeta.description}
              />
              <Comments
                getTimePassed={getTimePassed}
                comments={this.state.videoMeta.comments}
              />
            </div>
            <div className="home__secondary-container home__secondary-container--playlist">
              <Playlist playlist={this.state.filteredVideo} />
            </div>
          </div>
        </div>
      )
    );
  }
}

export default Home;
