import React from "react";
import "./Playlist.scss";
import videos from "../../../data/videos.json";
import PlaylistItem from "./PlaylistItem/PlaylistItem";

function Playlist({ currentVideoId, handleOnClick }) {
  // filtering out the current video by its id
  let playlist = videos.filter((video) => video.id !== currentVideoId);

  return (
    <div className="playlist">
      <h4 className="playlist__title">NEXT VIDEO</h4>
      <div>
        {/* passing video list into PlaylistItem component */}
        {playlist.map((videoMeta) => (
          <PlaylistItem
            videoMeta={videoMeta}
            handleOnClick={handleOnClick}
            key={videoMeta.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Playlist;
