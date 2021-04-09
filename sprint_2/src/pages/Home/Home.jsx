import React, { Component } from "react";
import videoDetail from "../../data/video-details.json";
import videos from "../../data/videos.json";
import "./Home.scss";
import Player from "../../components/Player/Player";
import Info from "../../components/Info/Info";
import Comments from "../../components/Comments/Comments";
import Playlist from "../../components/Playlist/Playlist";

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
  constructor(props) {
    super(props);
    this.state = {
      // current video object
      videoMeta: this.findVideo("1af0jruup5gu"),
      filteredVideo: this.filterVideo("1af0jruup5gu"),
    };
  }

  filterVideo = (currentVideoId) => {
    return videos.filter((video) => video.id !== currentVideoId);
  };

  findVideo = (currentVideoId) => {
    return videoDetail.find((video) => video.id === currentVideoId);
  };

  // onclick event handling function for playlist
  handleOnClick = (id, e) => {
    e.preventDefault();
    // setting the selected video into state
    this.setState({
      videoMeta: this.findVideo(id),
      filteredVideo: this.filterVideo(id),
    });
  };

  render() {
    // set document.title to the current video title
    document.title = this.state.videoMeta.title;
    return (
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
            <Playlist
              playlist={this.state.filteredVideo}
              handleOnClick={this.handleOnClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
