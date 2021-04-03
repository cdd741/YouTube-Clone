import React from "react";
import "./Playlist.scss";
import videos from "../../../data/videos.json";
import PlaylistItem from "./PlaylistItem/PlaylistItem";

function Playlist({ currentVideoId, handleOnClick }) {
  let playlist = videos.filter((video) => video.id !== currentVideoId);

  return (
    <div className="videolist">
      <h4 className="videolist__title">NEXT VIDEO</h4>
      {playlist.map((videoMeta) => (
        <PlaylistItem
          videoMeta={videoMeta}
          handleOnClick={handleOnClick}
          key={videoMeta.id}
        />
      ))}
    </div>
  );
}

export default Playlist;
