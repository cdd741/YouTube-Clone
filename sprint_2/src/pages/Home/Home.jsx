import React, { Component } from "react";

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
    videoList: null,
  };

  filterVideo = (videos, currentVideoId) => {
    return videos.filter((video) => video.id !== currentVideoId);
  };

  getVideo = (currentId) => {
    return axios
      .get(`${url}/videos/${currentId}${api_key}`)
      .then((res) => {
        this.setState({
          videoMeta: res.data,
        });
      })
      .catch((err) => {
        console.error("Returning ERROR from GET request of /videos/:id", err);
      });
  };

  getVideos = () => {
    return axios
      .get(`${url}/videos${api_key}`)
      .then((res) => {
        this.setState({ videoList: res.data });
      })
      .catch((err) => {
        console.error("Returning ERROR from GET request of /videos", err);
      });
  };

  componentDidMount = () => {
    let initialId = this.props.match.params.id
      ? this.props.match.params.id
      : "1af0jruup5gu";
    this.getVideos().then(() => {
      this.getVideo(initialId).catch((err) => {
        console.error("ERROR from componentDidUpdate", err);
      });
    });
    window.scrollTo(0, 0);
  };

  // return immediately if videoMeta is empty
  // it's because setState from componentDidMount
  // is trggering componentDidUpdate, and the function above is not finished yet
  // or the id has not been changed
  componentDidUpdate = () => {
    let currentId = this.props.match.params.id
      ? this.props.match.params.id
      : "1af0jruup5gu";
    if (!this.state.videoMeta || currentId === this.state.videoMeta.id) {
      return;
    } else {
      this.getVideo(currentId).catch((err) => {
        console.error("ERROR from componentDidUpdate", err);
      });
      window.scrollTo(0, 0);
    }
  };

  render() {
    // set document.title to the current video title
    if (this.state.videoMeta) document.title = this.state.videoMeta.title;
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
              <Playlist playlist={this.filterVideo(this.state.videoList)} />
            </div>
          </div>
        </div>
      )
    );
  }
}

export default Home;
