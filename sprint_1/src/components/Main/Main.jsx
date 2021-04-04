import React, { Component } from "react";
import videoDetail from "../../data/video-details.json";
import "./Main.scss";
import Player from "./Player/Player";
import Info from "./Info/Info";
import Comments from "./Comments/Comments";
import Playlist from "./Playlist/Playlist";

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

class Main extends Component {
  state = {
    // current video object
    videoMeta: videoDetail[0],
  };

  // onclick event handling function for playlist
  handleOnClick = (id) => {
    // setting the selected video into state
    let newVideoMeta = videoDetail.find((video) => video.id === id);
    this.setState({ videoMeta: newVideoMeta });
  };

  render() {
    return (
      <div className="main">
        <Player
          video={this.state.videoMeta.video}
          image={this.state.videoMeta.image}
        />
        <div className="main__primary-container">
          <div className="main__secondary-container main__secondary-container--meta">
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
          <div className="main__secondary-container main__secondary-container--playlist">
            <Playlist
              currentVideoId={this.state.videoMeta.id}
              handleOnClick={this.handleOnClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
