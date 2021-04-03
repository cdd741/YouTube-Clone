import React, { Component } from "react";
import videoDetail from "../../data/video-details.json";
import "./Main.scss";
import Player from "./Player/Player";
import Info from "./Info/Info";
import Comments from "./Comments/Comments";
import Playlist from "./Playlist/Playlist";

class Main extends Component {
  state = {
    videoMeta: videoDetail[0],
  };

  handleOnClick = (id) => {
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
              title={this.state.videoMeta.title}
              channel={this.state.videoMeta.channel}
              timestamp={this.state.videoMeta.timestamp}
              views={this.state.videoMeta.views}
              likes={this.state.videoMeta.likes}
              description={this.state.videoMeta.description}
            />
            <Comments comments={this.state.videoMeta.comments} />
          </div>
          <div className="main__secondary-container main__secondary-container--video-list">
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
