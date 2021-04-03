import React from "react";
import "./PlaylistItem.scss";

function PlaylistItem({ videoMeta, handleOnClick }) {
  return (
    <div className="playlist-item">
      <div className="playlist-item__image-container">
        <img
          className="playlist-item__image"
          src={videoMeta.image}
          alt="playlist_item_image"
          onClick={() => {
            handleOnClick(videoMeta.id);
          }}
        />
      </div>
      <div className="playlist-item__info">
        <h4
          className="playlist-item__title"
          onClick={() => {
            handleOnClick(videoMeta.id);
          }}
        >
          {videoMeta.title}
        </h4>
        <h5
          className="playlist-item__channel"
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
