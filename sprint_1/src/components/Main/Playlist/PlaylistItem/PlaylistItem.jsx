import React from "react";
import "./PlaylistItem.scss";

function PlaylistItem({ videoMeta, handleOnClick }) {
  return (
    <div className="playlist-item">
      <div className="playlist-item__image-container pointer">
        <img
          className="playlist-item__image"
          src={videoMeta.image}
          alt="playlist_item_image pointer"
          onClick={() => {
            handleOnClick(videoMeta.id);
          }}
        />
      </div>
      <div className="playlist-item__info">
        <h4
          className="playlist-item__title pointer"
          onClick={() => {
            handleOnClick(videoMeta.id);
          }}
        >
          {videoMeta.title}
        </h4>
        <h5
          className="playlist-item__channel pointer"
          onClick={() => {
            handleOnClick(videoMeta.id);
          }}
        >
          {videoMeta.channel}
        </h5>
      </div>
    </div>
  );
}

export default PlaylistItem;
