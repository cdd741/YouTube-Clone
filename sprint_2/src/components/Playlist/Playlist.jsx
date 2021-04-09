import React from "react";
import "./Playlist.scss";
import { Link } from "react-router-dom";

function PlaylistItem({ videoMeta }) {
  return (
    <Link
      to={`/video/${videoMeta.id}`}
      key={videoMeta.id}
      className="playlist-item"
    >
      <div className="playlist-item__image-container pointer">
        <img
          className="playlist-item__image"
          src={videoMeta.image}
          alt="playlist_item_image pointer"
        />
      </div>
      <div className="playlist-item__info">
        <h4 className="playlist-item__title pointer">{videoMeta.title}</h4>
        <h4 className="playlist-item__channel pointer">{videoMeta.channel}</h4>
      </div>
    </Link>
  );
}

function Playlist({ playlist }) {
  return (
    <div className="playlist">
      <h4 className="playlist__title">NEXT VIDEO</h4>
      <div>
        {/* passing video list into PlaylistItem component */}
        {playlist.map((videoMeta) => (
          <PlaylistItem videoMeta={videoMeta} key={videoMeta.id} />
        ))}
      </div>
    </div>
  );
}

export default Playlist;
