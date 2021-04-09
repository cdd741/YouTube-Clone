import React from "react";
import "./Playlist.scss";

function PlaylistItem({ videoMeta, handleOnClick }) {
  return (
    <div className="playlist-item">
      <div className="playlist-item__image-container pointer">
        <img
          className="playlist-item__image"
          src={videoMeta.image}
          alt="playlist_item_image pointer"
          onClick={(e) => {
            handleOnClick(videoMeta.id, e);
          }}
        />
      </div>
      <div className="playlist-item__info">
        <h4
          className="playlist-item__title pointer"
          onClick={(e) => {
            handleOnClick(videoMeta.id, e);
          }}
        >
          {videoMeta.title}
        </h4>
        <h4
          className="playlist-item__channel pointer"
          onClick={(e) => {
            handleOnClick(videoMeta.id, e);
          }}
        >
          {videoMeta.channel}
        </h4>
      </div>
    </div>
  );
}

function Playlist({ playlist, handleOnClick }) {
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
