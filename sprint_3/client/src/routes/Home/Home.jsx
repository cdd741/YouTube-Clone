import React, { Component } from "react";
import axios from "axios";
import "./Home.scss";
import Player from "../../components/Player/Player";
import Info from "../../components/Info/Info";
import Comments from "../../components/Comments/Comments";
import Playlist from "../../components/Playlist/Playlist";
import {
  videoListGetRequestApi,
  videoMetaGetRequestApi,
} from "../../utils/brainflixApi";

class Home extends Component {
  state = {
    videoMeta: null,
    videoList: null,
    commentsUpdate: false,
  };

  handleCommentUpdate = () => {
    this.setState({ commentsUpdate: true });
  };

  filterVideo = (currentVideoId) => {
    return this.state.videoList.filter((video) => video.id !== currentVideoId);
  };

  getVideo = (currentId) => {
    return axios
      .get(videoMetaGetRequestApi(currentId))
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
      .get(videoListGetRequestApi())
      .then((res) => {
        this.setState({ videoList: res.data });
      })
      .catch((err) => {
        console.error("Returning ERROR from GET request of /videos", err);
      });
  };

  componentDidMount = () => {
    axios
      .get(videoListGetRequestApi())
      .then((res) => {
        this.setState({ videoList: res.data });
      })
      .then(() => {
        let initialId = this.props.match.params.id
          ? this.props.match.params.id
          : this.state.videoList[0].id;
        this.getVideo(initialId);
      })
      .then(() => {
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        console.error("ERROR from componentDidUpdate", err);
      });
  };

  componentDidUpdate = () => {
    // return immediately if videoMeta is empty
    // it's because setState from componentDidMount
    // is trggering componentDidUpdate, and the function above is not finished yet
    // or the id has not been changed
    let currentId = this.props.match.params.id
      ? this.props.match.params.id
      : this.state.videoList[0].id;

    let oldId = this.state.videoMeta
      ? this.state.videoMeta.id
      : this.state.videoList[0].id;

    if (
      this.state.commentsUpdate ||
      (this.state.videoMeta && currentId !== this.state.videoMeta.id)
    ) {
      this.getVideo(currentId)
        .then(() => {
          if (this.state.commentsUpdate) {
            this.setState({
              commentsUpdate: false,
            });
          } else if (this.state.videoMeta && currentId !== oldId) {
            window.scrollTo(0, 0);
          }
        })
        .catch((err) => {
          console.error("ERROR from componentDidUpdate", err);
        });
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
                title={this.state.videoMeta.title}
                channel={this.state.videoMeta.channel}
                timestamp={this.state.videoMeta.timestamp}
                views={this.state.videoMeta.views}
                likes={this.state.videoMeta.likes}
                description={this.state.videoMeta.description}
                handleCommentUpdate={this.handleCommentUpdate}
                videoID={this.state.videoMeta.id}
              />
              <Comments
                videoID={this.state.videoMeta.id}
                comments={this.state.videoMeta.comments}
                handleCommentUpdate={this.handleCommentUpdate}
              />
            </div>
            <div className="home__secondary-container home__secondary-container--playlist">
              <Playlist playlist={this.filterVideo(this.state.videoMeta.id)} />
            </div>
          </div>
        </div>
      )
    );
  }
}

export default Home;
