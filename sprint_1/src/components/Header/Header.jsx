import React, { Component } from "react";
import "./Header.scss";
import Logo from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import Upload from "./Upload/Upload";
import ProfilePicture from "./ProfilePicture/ProfilePicture";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Logo className="header__logo" />
        <SearchBar className="header__search-bar" />
        <div className="header__sub-container">
          <Upload />
          <ProfilePicture className="header__profile-picture" />
        </div>
      </div>
    );
  }
}

export default Header;
